import { readFileSync, writeFileSync } from "node:fs";
import { createPublicClient, createWalletClient, formatEther, http, isAddress } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { polygon } from "viem/chains";

const requiredEnv = ["POLYGON_RPC_URL", "DEPLOYER_PRIVATE_KEY", "TREASURY_ADDRESS"];
const missing = requiredEnv.filter((name) => !process.env[name]);

if (missing.length > 0) {
  throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
}

const treasury = process.env.TREASURY_ADDRESS;

if (!isAddress(treasury)) {
  throw new Error("TREASURY_ADDRESS must be a valid EVM address");
}

const privateKey = process.env.DEPLOYER_PRIVATE_KEY.startsWith("0x")
  ? process.env.DEPLOYER_PRIVATE_KEY
  : `0x${process.env.DEPLOYER_PRIVATE_KEY}`;

const artifact = JSON.parse(readFileSync("artifacts/contracts/Tollahcoin.sol/Tollahcoin.json", "utf8"));
const account = privateKeyToAccount(privateKey);
const transport = http(process.env.POLYGON_RPC_URL);
const publicClient = createPublicClient({ chain: polygon, transport });
const walletClient = createWalletClient({ account, chain: polygon, transport });
const balance = await publicClient.getBalance({ address: account.address });

if (balance === 0n) {
  throw new Error(`Deployment wallet ${account.address} has no MATIC on Polygon`);
}

console.log(`Deploying Tollahcoin from ${account.address}`);
console.log(`Treasury: ${treasury}`);
console.log(`Deployer balance: ${formatEther(balance)} MATIC`);

const hash = await walletClient.deployContract({
  abi: artifact.abi,
  bytecode: artifact.bytecode,
  args: [treasury],
});

console.log(`Deployment transaction: ${hash}`);

const receipt = await publicClient.waitForTransactionReceipt({ hash });

if (!receipt.contractAddress) {
  throw new Error("Deployment transaction completed without a contract address");
}

const record = {
  network: "polygon",
  chainId: polygon.id,
  contractName: "Tollahcoin",
  contractAddress: receipt.contractAddress,
  transactionHash: hash,
  deployer: account.address,
  treasury,
  blockNumber: receipt.blockNumber.toString(),
  gasUsed: receipt.gasUsed.toString(),
  explorer: `https://polygonscan.com/address/${receipt.contractAddress}`,
  timestamp: new Date().toISOString(),
};

writeFileSync("deployment.polygon.json", `${JSON.stringify(record, null, 2)}\n`);

console.log("Deployment record written to deployment.polygon.json");
console.log(JSON.stringify(record, null, 2));
