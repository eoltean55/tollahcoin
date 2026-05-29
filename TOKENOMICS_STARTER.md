# Starter tokenomics and liquidity plan

Tokenomics means the rules and numbers behind the token. A buyer should be able to answer: how many tokens exist, who controls them, what fees exist, where liquidity is, and what can change later.

## Plain-English tokenomics

For a legitimate starter token, keep the rules boring and easy to verify:

- **Total supply:** fixed number of tokens created at launch.
- **Decimals:** usually 18 for an ERC-20 token.
- **Minting:** no new tokens after launch unless there is a very clear public reason.
- **Taxes:** ideally 0% buy tax and 0% sell tax for trust and exchange readiness.
- **Blacklist/pause:** avoid these unless there is a strong legal/security reason, because buyers fear transfer traps.
- **Owner controls:** either renounce ownership after setup or use a public multisig wallet with clear rules.
- **Allocations:** publish how much goes to liquidity, owner/treasury, community rewards, marketing, and reserves.
- **Liquidity:** publish pool address, initial liquidity, and whether liquidity is locked.

## Suggested starter structure

This is a simple starting point to discuss before any final deployment:

| Category | Starter suggestion | Why it helps |
| --- | --- | --- |
| Total supply | 1,000,000,000 `$IRAN` | Easy meme-coin scale and easy math |
| Buy/sell tax | 0% / 0% | Cleaner for buyers, DEX routers, wallets, and listings |
| Minting | Disabled after launch | Reduces dilution fear |
| Owner | Elliott initially, then multisig if project grows | Practical start with a path to stronger governance |
| Liquidity | Seed a small DEX pool first | Lets people buy while keeping risk contained |
| Treasury | Public owner/treasury wallet | Lets the community verify project funds |

Do not publish these as final facts until the contract actually matches them.

## Low-budget liquidity plan

If Elliott can start with a few hundred dollars, treat it as proof-of-market liquidity, not a guarantee of deep trading.

### Option A: Conservative starter pool

- Put about `$200-$500` total value into the first Polygon DEX pool.
- Pair `$IRAN` with a familiar asset such as `MATIC`, `USDC`, or `WETH`.
- Prefer `USDC` for clearer pricing, or `MATIC` for easier Polygon-native participation.
- Publish that liquidity is small and slippage may be high.
- Do not encourage large buys until liquidity is deeper.

### Option B: Staged liquidity

- Start with a small pool.
- Add more liquidity only after the contract, website, buy guide, socials, and chart links are stable.
- Track early questions and confusion before adding more funds.
- If the project gains real holders, consider locking part of liquidity and publishing the lock.

## What Cursor can build next

- A tokenomics page once Elliott confirms final supply, taxes, owner controls, and allocation percentages.
- A pool disclosure page once the DEX pair exists.
- A buy guide with slippage and risk language.
- Token-list metadata files for wallets and trackers.
- A contract test suite if the token contract is managed from this repo.

## What Elliott should not claim

- Do not promise price movement, returns, exchange listings, or safety.
- Do not say liquidity is locked unless it is actually locked and linked.
- Do not say the contract is renounced, audited, or verified unless it is true and linked.
- Do not use current events to imply urgency to buy.

## Legal and tax note

Sole proprietor with a DBA may be simple to start, but crypto tokens can create securities, commodities, money transmission, tax, sanctions, and consumer-protection issues. Cursor can organize the facts and disclosures, but Elliott should use qualified legal and tax advice before presales, paid promotions, exchange outreach, or public claims about token value.
