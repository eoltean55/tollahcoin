# Contract readiness checklist

This repo now includes a starter ERC-20 contract for tollahcoin:

- Contract: `contracts/Tollahcoin.sol`
- Tests: `test/Tollahcoin.t.sol`
- ABI check: `scripts/verify-abi.js`
- Deployment script: `scripts/deploy-polygon.js`
- Site update script: `scripts/update-site-after-deploy.js`

## Intended token properties

The included contract is designed for trust and exchange readiness:

- Fixed supply: `1,000,000,000 IRAN`
- Decimals: `18`
- Buy tax: `0%`
- Sell tax: `0%`
- No owner-only mint function
- No pause function
- No blacklist function
- No hidden fee setters
- Initial supply goes to the treasury address passed to the constructor

This means Elliott controls the initial treasury wallet, but the contract itself does not include privileged admin controls.

## Before deployment

1. Pick the treasury wallet that will receive the full initial supply.
2. Confirm whether Elliott wants no admin controls or a multisig-admin contract. The included contract is the cleaner no-admin version.
3. Run `npm test`.
4. Review the generated ABI and bytecode in `artifacts/`.
5. Confirm the public website, buy guide, tokenomics page, and metadata all match the final contract.
6. Follow `DEPLOYMENT_RUNBOOK.md` with a dedicated deployment wallet and Elliott treasury wallet.

## Deployment notes

Do not deploy from a wallet holding unrelated funds. Use a dedicated deployment wallet and keep records of:

- Deployer address
- Treasury address
- Network
- Contract address
- Transaction hash
- Exact commit hash used for deployment

## PolygonScan verification

After deployment, verify the source code on PolygonScan using the same compiler settings from `hardhat.config.ts`:

- Solidity: `0.8.28`
- Optimizer: enabled
- Optimizer runs: `200`

Once verified, update:

- `index.html`
- `buy.html`
- `transparency.html`
- `token-metadata.json`
- `README.md`

## Do not claim until true

Do not publicly claim the token is deployed, verified, no-tax, fixed-supply, or exchange-ready unless the live contract and public links prove it.
