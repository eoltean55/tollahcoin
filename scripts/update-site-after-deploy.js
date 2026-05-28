import { readFileSync, writeFileSync } from "node:fs";
import { isAddress } from "viem";

const contractAddress = process.env.TOKEN_CONTRACT_ADDRESS;
const dryRun = process.env.DRY_RUN === "true";

if (!contractAddress || !isAddress(contractAddress)) {
  throw new Error("Set TOKEN_CONTRACT_ADDRESS to the deployed Polygon token address");
}

const explorerTokenUrl = `https://polygonscan.com/token/${contractAddress}`;
const quickswapUrl = `https://quickswap.exchange/#/swap?outputCurrency=${contractAddress}`;
const addressPattern = /0x[a-fA-F0-9]{40}/g;
const filesToUpdate = [
  "index.html",
  "buy.html",
  "transparency.html",
  "README.md",
  "TOKENOMICS_STARTER.md",
  "COMMUNITY_PLAYBOOK.md",
];

for (const file of filesToUpdate) {
  const original = readFileSync(file, "utf8");
  const updated = original
    .replace(addressPattern, contractAddress)
    .replace(/https:\/\/polygonscan\.com\/token\/0x[a-fA-F0-9]{40}/g, explorerTokenUrl)
    .replace(/https:\/\/quickswap\.exchange\/#\/swap\?outputCurrency=0x[a-fA-F0-9]{40}/g, quickswapUrl);

  if (updated !== original && !dryRun) {
    writeFileSync(file, updated);
  }
}

const metadataPath = "token-metadata.json";
const metadata = JSON.parse(readFileSync(metadataPath, "utf8"));
metadata.address = contractAddress;
metadata.decimals = Number(process.env.TOKEN_DECIMALS || 18);
metadata.explorer = explorerTokenUrl;
metadata.status = process.env.CONTRACT_VERIFIED === "true" ? "verified" : "deployed-unverified";

if (process.env.PUBLIC_SITE_URL) {
  metadata.website = process.env.PUBLIC_SITE_URL;
  metadata.logoURI = `${process.env.PUBLIC_SITE_URL.replace(/\/$/, "")}/logo.svg`;
}

if (!dryRun) {
  writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`);
}

console.log(`${dryRun ? "Dry run completed for" : "Updated site files for"} ${contractAddress}`);
console.log(`Explorer: ${explorerTokenUrl}`);
