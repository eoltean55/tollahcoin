# tollahcoin ($IRAN)

Static landing page for tollahcoin, a Polygon community token.

For project planning, see:

- [`OWNER_ROADMAP.md`](OWNER_ROADMAP.md): owner roadmap for making the coin verifiable, usable, and listing-ready.
- [`TOKENOMICS_STARTER.md`](TOKENOMICS_STARTER.md): plain-English tokenomics and low-budget liquidity plan.
- [`COMMUNITY_PLAYBOOK.md`](COMMUNITY_PLAYBOOK.md): X and chat-room outreach rules and templates.
- [`CONTRACT_READINESS.md`](CONTRACT_READINESS.md): tested ERC-20 contract properties and deployment checklist.
- [`DEPLOYMENT_RUNBOOK.md`](DEPLOYMENT_RUNBOOK.md): step-by-step Polygon deployment, verification, and site update process.
- [`EXCHANGE_DATA_ROOM.md`](EXCHANGE_DATA_ROOM.md): exchange, wallet, and tracker data-room checklist.
- [`RISK_DISCLOSURE.md`](RISK_DISCLOSURE.md): buyer and communication risk disclosures.
- [`TREASURY_POLICY.md`](TREASURY_POLICY.md): starter treasury and liquidity controls.
- [`PROHIBITED_CLAIMS_POLICY.md`](PROHIBITED_CLAIMS_POLICY.md): claims that should not be made without public proof.

Public site pages:

- [`buy.html`](buy.html): buyer-facing Polygon swap guide and risk notes.
- [`tokenomics.html`](tokenomics.html): starter tokenomics disclosure page.
- [`transparency.html`](transparency.html): contract, liquidity, metadata, and exchange-readiness checklist.
- [`contract-readiness.html`](contract-readiness.html): public contract properties and deployment checklist.
- [`exchange-data-room.html`](exchange-data-room.html): public exchange data-room overview.
- [`policies.html`](policies.html): public risk, treasury, and claims policies.
- [`launch-readiness.html`](launch-readiness.html): public readiness dashboard.
- [`launch-status.html`](launch-status.html): human-readable completed, blocked, and not-yet-claimable launch status.
- [`token-metadata.json`](token-metadata.json): starter metadata for wallet and token-list submissions.
- [`launch-status.json`](launch-status.json): machine-readable launch readiness status.

## What helps this coin grow

The most useful next moves are credibility and repeatable community activity:

1. Verify the contract source on PolygonScan.
2. Publish supply, tax, ownership, liquidity, and lock details.
3. Keep one canonical contract address everywhere:
   `0x414E4A5E3b35a25E020f14c27546724856b10f7B`.
4. Create official X, Telegram, Discord, and website links.
5. Submit logo and metadata to wallets, token lists, CoinGecko, and CoinMarketCap when requirements are met.
6. Run weekly meme prompts, holder votes, and contributor rewards that encourage real participation.
7. Avoid fake claims, fake volume, and spam. Long-term trust is more valuable than short-term noise.

## Local preview

Run a simple static server from the repository root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Contract checks

Install dependencies, compile, run Solidity tests, and verify the ABI:

```sh
npm install
npm test
```

Run the full local quality gate with:

```sh
npm run check:all
```

Prepare a Polygon deployment with:

```sh
cp .env.example .env
# Fill POLYGON_RPC_URL, DEPLOYER_PRIVATE_KEY, and TREASURY_ADDRESS.
set -a
source .env
set +a
npm run deploy:polygon
```

## Risk note

Crypto assets are volatile and high risk. Nothing in this repository is financial advice.
