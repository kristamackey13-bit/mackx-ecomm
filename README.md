# mackx ecomm

Private-beta starter for a task marketplace and digital services platform.

## Stack
- Next.js App Router + TypeScript
- wagmi + viem for Base wallet connectivity
- Supabase planned for auth, database, and storage
- Vercel planned for hosting

## Product rules
- Customers must connect a wallet before account registration can be completed.
- Base is the target network; customer payments are intended to use USDC.
- Marketplace fee: 15%.
- Worker payouts are requested by workers and approved by an administrator.
- Initial categories: ecommerce product research, social media graphics, virtual assistant tasks, website design, and product listing management.
- Private beta is invitation-only.

## Development
1. Copy `.env.example` to `.env.local`.
2. Install dependencies with `npm install`.
3. Run `npm run dev`.

## Important payment/security status
This starter does **not** accept or verify real payments and does not perform payouts. Before enabling money movement, implement server-side wallet-signature authentication with one-time nonces, verify Base transaction receipts and the official USDC contract for the selected network, add idempotent payment event processing and an immutable ledger, and complete provider/legal eligibility checks. Never store private keys or seed phrases.

Wallet connection is not proof of account identity. A production registration flow must verify a signed, expiring server challenge (for example, SIWE) before linking a wallet to a user.
