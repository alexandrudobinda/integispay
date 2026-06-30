# IntegisPay

Marketing / lead-generation website for **IntegisPay**, a payments-integration studio that
helps crypto-native and Web3 businesses accept crypto + fiat through a MiCA-compliant,
EU-regulated processor.

Built with **Next.js (App Router) + TypeScript**, recreated faithfully from the high-fidelity
design references in [`/design`](./design).

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Fonts via `next/font/google` — Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono (mono)
- Plain global CSS with design tokens — no UI kit, all icons inline SVG
- Deploys to **Vercel** with zero config

## Two editions, one brand

The site ships as **two editions under one brand**, plus a neutral front-door selector:

- **Crypto & Web3** (teal accent) — `/crypto/*`
- **Software & SaaS** (coral accent) — `/saas/*`

Editions share every component; only the **accent color, copy and iconography** differ. The
accent is themeable through CSS variables (`.ed-crypto` / `.ed-saas` wrappers), and the shared
`Header` / `Footer` / `CtaSection` / `ContactForm` / `CodePanel` take an `edition` prop. The
header logo always links back to the Welcome selector (there is no in-header edition switcher).

| Route                   | Page                          |
| ----------------------- | ----------------------------- |
| `/`                     | Welcome (front-door selector) |
| `/crypto`               | Crypto — Home                 |
| `/crypto/integrations`  | Crypto — Integrations         |
| `/crypto/mica`          | Crypto — EU & MiCA guide      |
| `/crypto/cases`         | Crypto — Case Studies         |
| `/crypto/about`         | Crypto — About / Contact      |
| `/saas`                 | SaaS — Home                   |
| `/saas/integrations`    | SaaS — Integrations           |
| `/saas/mica`            | SaaS — EU & MiCA guide        |
| `/saas/cases`           | SaaS — Case Studies           |
| `/saas/about`           | SaaS — About / Contact        |

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

## Run with Docker (production build)

```bash
docker compose up --build
# http://localhost:3000
```

This builds the standalone Next.js output and serves it the same way it runs in production.

## Deploy to Vercel via GitHub

1. Push this repo to `git@github.com:alexandrudobinda/integispay.git`.
2. In Vercel, **New Project → Import** the `integispay` GitHub repo.
3. Framework preset is auto-detected as **Next.js** — no settings to change.
4. Deploy. Every push to the default branch ships a new production deployment.

## Contact form → SendGrid

The contact form posts to a server route (`app/api/contact/route.ts`) that emails the lead via
SendGrid (`@sendgrid/mail`). The API key lives only on the server — never in client code.

**Setup**

1. In SendGrid → **Settings → API Keys**, create a key with **Mail Send** permission.
2. Verify a **Single Sender** (the `From` address) under **Settings → Sender Authentication**.
3. Copy `.env.example` to `.env.local` and fill in:

   ```
   SENDGRID_API_KEY=SG.xxxxx
   CONTACT_FROM_EMAIL=hello@integispay.com   # must be a verified sender
   CONTACT_TO_EMAIL=hello@integispay.com     # where leads are delivered
   ```

4. **Local dev:** `npm run dev` (Next loads `.env.local` automatically).
5. **Docker:** `docker compose --env-file .env.local up --build` (passes the vars into the container).
6. **Vercel:** add the three variables under **Project → Settings → Environment Variables**, then redeploy.

The form validates name/email/message, shows a sending + error state, and replies are set to the
submitter's email (`replyTo`). For higher deliverability, switch the sender to **Domain
Authentication** later.

## Notes before launch

- Replace placeholder contact details (`hello@integispay.com`), case-study figures and
  testimonials with real content.
- Re-verify processor facts (MiCA compliance, supported chains, stablecoins, payout currencies)
  against the processor's current docs.
- The independent-partner disclaimer in the footer must remain on every page.
