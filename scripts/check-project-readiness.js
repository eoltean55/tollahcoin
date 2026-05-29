import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "contracts/Tollahcoin.sol",
  "test/Tollahcoin.t.sol",
  "scripts/deploy-polygon.js",
  "scripts/update-site-after-deploy.js",
  "scripts/verify-abi.js",
  ".env.example",
  "DEPLOYMENT_RUNBOOK.md",
  "CONTRACT_READINESS.md",
  "EXCHANGE_DATA_ROOM.md",
  "RISK_DISCLOSURE.md",
  "TREASURY_POLICY.md",
  "PROHIBITED_CLAIMS_POLICY.md",
  "data-room/exchange-application.json",
  "token-metadata.json",
  "launch-status.json",
  "launch-status.html",
  "buy.html",
  "tokenomics.html",
  "transparency.html",
  "contract-readiness.html",
  "exchange-data-room.html",
  "policies.html",
  "launch-readiness.html",
];

const expectedPackageScripts = [
  "build:contracts",
  "test:contracts",
  "verify:abi",
  "deploy:polygon",
  "update:site:contract",
  "validate:site",
  "readiness:check",
  "check:all",
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

for (const file of requiredFiles) {
  assert(existsSync(file), `Missing required readiness file: ${file}`);
}

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
for (const script of expectedPackageScripts) {
  assert(pkg.scripts?.[script], `Missing package script: ${script}`);
}

const metadata = JSON.parse(readFileSync("token-metadata.json", "utf8"));
assert(metadata.name === "tollahcoin", "token metadata name mismatch");
assert(metadata.symbol === "IRAN", "token metadata symbol mismatch");
assert(metadata.chainId === 137, "token metadata chainId must be Polygon mainnet");
assert(/^0x[a-fA-F0-9]{40}$/.test(metadata.address), "token metadata address is not an EVM address");

const contractSource = readFileSync("contracts/Tollahcoin.sol", "utf8");
assert(contractSource.includes("INITIAL_SUPPLY"), "contract missing fixed supply constant");
assert(!contractSource.includes("Ownable"), "contract should not include Ownable admin controls");
assert(!contractSource.includes("Pausable"), "contract should not include Pausable controls");

const exchangeApplication = JSON.parse(readFileSync("data-room/exchange-application.json", "utf8"));
assert(exchangeApplication.project.name === "tollahcoin", "exchange packet project name mismatch");
assert(exchangeApplication.token.symbol === "IRAN", "exchange packet token symbol mismatch");
assert(exchangeApplication.network.chainId === 137, "exchange packet chainId must be Polygon mainnet");

const launchStatus = JSON.parse(readFileSync("launch-status.json", "utf8"));
assert(launchStatus.project === "tollahcoin", "launch status project mismatch");
assert(launchStatus.symbol === "IRAN", "launch status symbol mismatch");
assert(launchStatus.status === "pre-deployment", "launch status should remain pre-deployment until live deploy");
assert(launchStatus.blocked.length >= 3, "launch status must list blocked items");
assert(launchStatus.doNotClaimYet.includes("Exchange listing confirmed"), "launch status must include listing claim warning");

console.log("Project readiness check passed");
