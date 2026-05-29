# Treasury policy

This policy is a starter framework for how Elliott should operate the tollahcoin treasury in a way that buyers, contributors, and reviewers can understand.

## Treasury goals

- Keep project funds separate from unrelated personal funds.
- Publish the treasury wallet after deployment.
- Use treasury funds only for project operations, liquidity, metadata, listings, infrastructure, community rewards, and contributor payments.
- Keep records for every material transfer.

## Wallet setup

At launch:

- The contract constructor sends the full initial supply to the treasury wallet.
- The treasury wallet should be Elliott-controlled and publicly disclosed.
- The deployment wallet should be separate and should hold only enough `MATIC` for deployment gas.

As the project grows:

- Move operational control to a multisig if meaningful treasury or liquidity value accumulates.
- Publish signer policy and approval threshold.
- Keep emergency access procedures written down.

## Liquidity use

For an initial pool funded with a few hundred dollars:

- Publish the pool address.
- Publish the pair asset.
- Explain that liquidity is small and slippage can be high.
- Do not describe liquidity as locked unless a lock exists and is linked.

## Spending records

Track:

- Date
- Amount
- Token or asset
- Recipient wallet
- Purpose
- Transaction hash

## Prohibited treasury behavior

- Hidden sell pressure from undisclosed wallets.
- Fake liquidity claims.
- Using treasury funds to fake volume.
- Paying for bot engagement.
- Moving project funds through unrelated personal wallets without records.
