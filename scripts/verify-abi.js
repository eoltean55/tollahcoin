import { readFileSync } from "node:fs";

const artifactPath = "artifacts/contracts/Tollahcoin.sol/Tollahcoin.json";
const artifact = JSON.parse(readFileSync(artifactPath, "utf8"));
const names = new Set(artifact.abi.map((item) => item.name).filter(Boolean));

const expected = ["name", "symbol", "decimals", "totalSupply", "balanceOf", "transfer"];
const forbidden = ["mint", "pause", "unpause", "blacklist", "setTax", "setFees", "excludeFromFees"];

for (const name of expected) {
  if (!names.has(name)) {
    throw new Error(`Missing expected ERC-20 ABI entry: ${name}`);
  }
}

for (const name of forbidden) {
  if (names.has(name)) {
    throw new Error(`Forbidden privileged ABI entry found: ${name}`);
  }
}

console.log("ABI verification passed");
