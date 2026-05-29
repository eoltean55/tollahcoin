# Polygon deployment runbook

This runbook gets tollahcoin from tested contract code to a live Polygon contract. It does not remove the need for legal, tax, or compliance review.

## What Cursor prepared

- Fixed-supply ERC-20 contract: `contracts/Tollahcoin.sol`
- Contract tests: `test/Tollahcoin.t.sol`
- ABI safety check: `scripts/verify-abi.js`
- Polygon deployment script: `scripts/deploy-polygon.js`
- Post-deployment site updater: `scripts/update-site-after-deploy.js`
- Environment template: `.env.example`

## 1. Prepare wallets

Use two wallets:

1. **Deployment wallet:** temporary wallet with only enough `MATIC` for gas.
2. **Treasury wallet:** Elliott-controlled wallet that receives the full token supply.

Do not deploy from a wallet holding unrelated funds.

## 2. Configure environment

Copy `.env.example` to `.env`, then fill in:

- `POLYGON_RPC_URL`
- `DEPLOYER_PRIVATE_KEY`
- `TREASURY_ADDRESS`

Never commit `.env`.

## 3. Run pre-deployment checks

```sh
npm install
npm test
npm audit --audit-level=high
```

Expected result:

- Contract compiles.
- 5 Solidity tests pass.
- ABI verification passes.
- No high-severity dependency audit findings.

## 4. Deploy to Polygon

Load environment variables, then deploy:

```sh
set -a
source .env
set +a
npm run deploy:polygon
```

The script writes `deployment.polygon.json` with:

- Contract address
- Transaction hash
- Deployer
- Treasury
- Block number
- Gas used
- PolygonScan link

## 5. Verify on PolygonScan

Verify the contract source with:

- Solidity: `0.8.28`
- Optimizer: enabled
- Optimizer runs: `200`
- Constructor argument: the treasury wallet address

## 6. Update the website

After deployment, set:

- `TOKEN_CONTRACT_ADDRESS`
- `TOKEN_DECIMALS=18`
- `CONTRACT_VERIFIED=true` only after PolygonScan verification is complete
- `PUBLIC_SITE_URL` once the final website URL is live

Then run:

```sh
npm run update:site:contract
```

Preview the update without writing files:

```sh
DRY_RUN=true npm run update:site:contract
```

Review the diff before committing.

## 7. Create the first liquidity pool

With a few hundred dollars, start small:

- Pair with `USDC` for clearer pricing or `MATIC` for Polygon-native access.
- Publish the pool address.
- Warn that slippage can be high.
- Do not encourage large buys until liquidity is deeper.

## 8. Update public facts

After deploy, verification, and liquidity creation, update:

- `buy.html`
- `tokenomics.html`
- `transparency.html`
- `token-metadata.json`
- `README.md`

Do not claim exchange listings, locked liquidity, audits, or guaranteed safety unless those facts are publicly linked.
