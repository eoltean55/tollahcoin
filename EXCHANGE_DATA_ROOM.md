# Exchange data room

This packet organizes the facts an exchange, token tracker, wallet, or liquidity partner will ask for. It is intentionally conservative: do not claim anything here until the live on-chain facts and public links prove it.

## Project identity

- Project name: tollahcoin
- Token symbol: `IRAN`
- Network: Polygon
- Contract: `0x414E4A5E3b35a25E020f14c27546724856b10f7B`
- Website: pending final public URL
- Owner/contact: Elliott, pending official project email
- Official socials: pending official X, Telegram, and Discord links

## Technical packet

- Contract source: `contracts/Tollahcoin.sol`
- Contract standard: ERC-20
- Implementation: OpenZeppelin ERC-20
- Fixed supply: `1,000,000,000 IRAN`
- Decimals: `18`
- Buy/sell tax: `0% / 0%`
- Minting after launch: none in contract
- Pause/blacklist controls: none in contract
- Test command: `npm test`
- ABI check: `npm run verify:abi`
- Deployment runbook: `DEPLOYMENT_RUNBOOK.md`

## Market packet

Fill after deployment and first liquidity:

- DEX pair:
- Pool address:
- Pair asset: `USDC`, `MATIC`, or `WETH`
- Initial liquidity:
- Liquidity lock status:
- Chart links:
- Holder count:
- Daily volume:

## Compliance and risk packet

Fill before exchange outreach:

- Legal structure:
- DBA or entity name:
- Jurisdiction:
- Treasury wallet:
- Deployment wallet:
- Risk disclosures:
- Prohibited claims policy:
- Sanctions and restricted-jurisdiction policy:

## Listing sequence

1. Deploy and verify contract.
2. Update website and token metadata.
3. Create first liquidity pool.
4. Publish pool, chart, and slippage risk notes.
5. Submit to token lists and wallet metadata registries.
6. Apply to Dexscreener and GeckoTerminal if not auto-indexed.
7. Apply to CoinGecko and CoinMarketCap when public liquidity, socials, and volume exist.
8. Approach centralized exchanges only after legal/compliance materials are ready.

## Files in this data room

- `data-room/exchange-application.json`: structured listing packet template.
- `token-metadata.json`: token-list metadata starter.
- `CONTRACT_READINESS.md`: contract readiness checklist.
- `DEPLOYMENT_RUNBOOK.md`: deployment and site update process.
