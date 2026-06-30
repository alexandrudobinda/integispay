# Handoff: IntegisPay — Two-Edition Marketing Site (Crypto & Web3 + Software & SaaS)

## Overview
IntegisPay is a specialist **payment-integration consultancy**. It sells a *done-for-you* integration & onboarding service that connects a client's product to a **MiCA-compliant, EU-regulated payment processor** (crypto + fiat). IntegisPay is an **independent integration partner** — it does NOT sell the processor itself.

This package contains the full marketing site delivered as **two complete editions under one brand**, plus a brand-level **front-door selector**:

- **Edition A — Crypto & Web3** (teal accent) — for exchanges, NFT/GameFi, dApps, Web3 marketplaces.
- **Edition B — Software & SaaS** (coral accent) — for SaaS, dev tools and subscription platforms; messaging centers on recurring/usage billing, failed-payment recovery, cross-border, and crypto + stablecoin options.

Both editions share the same brand, typography, layout grid, spacing and component structure. **The only systematic differences between editions are: accent color, copy/examples, and iconography emphasis.** Everything else is identical so the two read as two editions of one product.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes that show the intended look, copy and behavior. They are **not production code to ship directly**. They are authored in a lightweight in-house templating runtime (`support.js`, the `<x-dc>` / `dc-import` custom elements). **Do not port `support.js` or the `.dc.html` wrapper** into the target codebase.

The task is to **recreate these designs in the target codebase's environment** (React/Next, Vue/Nuxt, Astro, SvelteKit, plain HTML/CSS, etc.) using its established patterns, component library and conventions. If no environment exists yet, choose the most appropriate modern framework (a static/SSG stack like Next.js or Astro suits a marketing site) and implement there. Treat the shared pieces (Header, CTA, Footer) as **real reusable components driven by an `edition` prop**, exactly as modeled here.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy and interactions are specified. Recreate the UI pixel-accurately using the codebase's libraries. All copy in the files is final placeholder marketing copy (no lorem ipsum) and can ship as-is or be edited by content.

---

## Information Architecture / Routing

```
/ (Welcome)            → brand front-door selector (edition-neutral)
                         ├─ choose "Software & SaaS"  → /saas
                         └─ choose "Crypto & Web3"    → /crypto

Edition A — Crypto & Web3                Edition B — Software & SaaS
  /crypto         Home.dc.html             /saas            Home-SaaS.dc.html
  /crypto/integrations CryptoIntegrations  /saas/integrations  SaaSIntegrations
  /crypto/mica    MiCAGuide.dc.html        /saas/mica       MiCAGuide-SaaS.dc.html
  /crypto/cases   CaseStudies.dc.html      /saas/cases      CaseStudies-SaaS.dc.html
  /crypto/about   Contact.dc.html          /saas/about      Contact-SaaS.dc.html
```

Route names above are a suggestion; the prototype uses flat filenames (`Home.dc.html`, `Home-SaaS.dc.html`, …) and `href`s point file-to-file. Map them to whatever routing the target uses. **The header logo links to the Welcome selector** on every page.

### Navigation rules
- **There is no in-header edition switcher.** Edition switching happens only via the **logo → Welcome selector**: the logo on every page links to the Welcome front-door, where the two path cards take the user into an edition. (An earlier segmented switcher was intentionally removed.)
- Each edition's nav links stay within that edition. "Book a call" goes to that edition's About/Contact `#book`.
- The **Welcome page is edition-neutral**: it has NO "Book a call" CTA (removed intentionally so it doesn't bias toward one edition) and no in-page links into a single edition's contact — the only actions are the two path cards.

---

## Design Tokens

### Color
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#EAEEF4` | Page background (both editions) |
| `--bg-welcome` | `#EAEEF4` | Welcome page bg |
| `--surface` | `#FFFFFF` | Cards |
| `--surface-grad` | `linear-gradient(180deg,#FFFFFF,#F4F7FB)` | Raised cards / code panels |
| `--panel` | `#F2F5F9` | Inset panels (how-it-works, stat strips) |
| `--footer-bg` | `#E6EAF1` | Footer |
| `--text` | `#0E1A2B` | Headings |
| `--text-body` | `#586780` | Body copy |
| `--text-strong` | `#36435A` | Emphasis body |
| `--text-muted` | `#7E8BA0` / `#93A0B4` | Captions, inactive nav |
| `--border` | `rgba(13,27,46,0.09)` | Hairline borders |
| `--border-strong` | `rgba(13,27,46,0.16)` | Inputs, secondary buttons |
| **Crypto accent** | `#12B39A` | Edition A primary |
| Crypto accent dark | `#0E9A84` (text on light) / `#0E8C5E` (code strings) | |
| **SaaS accent** | `#E8623C` | Edition B primary |
| SaaS accent dark | `#C24A26` | text on light |
| SaaS warm secondary | `#E8A23C` (amber) | sparingly: medium-risk dot, secondary glow |
| Logo cross-stroke | `#7C6CF0` (indigo) | the small horizontal bar in the logo mark, both editions |
| Risk: low | `#16A766` / text `#0E8C53` | SaaS risk-tier dot |
| Risk: medium | `#E8A23C` / text `#B07A12` | SaaS risk-tier dot |
| Risk: high | `#E8623C` / text `#C24A26` | SaaS risk-tier dot |

**Accent helper values** (use rgba of the accent at these alphas):
- Soft fill `0.06–0.10`, border `0.20–0.30`, glow radial `0.13–0.16`, button shadow `0.28–0.32`, button shadow hover `0.40–0.42`.
- Crypto rgba base = `18,179,154`. SaaS rgba base = `232,98,60`. Amber rgba base = `232,162,60`.

### Typography
- **Headings / display:** `Space Grotesk`, weight 600, `letter-spacing:-0.02em` to `-0.03em`.
- **Body / UI:** `IBM Plex Sans`, weights 400/500/600.
- **Mono (kickers, code, badges, chain/coin chips):** `IBM Plex Mono`, 400/500.
- Google Fonts import: `Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500`.
- Hero H1: `clamp(38px,5.6vw,66px)`, line-height `1.04`. Section H2: `clamp(28px,4vw,42px)`, line-height `1.1`. Body lead: `18–18.5px`, line-height `1.6`. Card body: `14–14.5px`, line-height `1.6`. Mono kicker: `12px`, `letter-spacing:0.1em`, uppercase.

### Spacing / Radius / Shadow
- Content max-width `1200px` (header `1240px`), gutter `24px`.
- Section vertical padding `64–84px`. Card padding `26–30px`.
- Radius: buttons `9–12px`, cards `14–18px`, large panels `20–22px`, pills `100px`.
- Card shadow `0 1px 3px rgba(13,27,46,0.05)`; raised `0 20–30px 60–80px rgba(13,27,46,0.08–0.14)`.
- Primary button shadow uses the accent (see helper values).

---

## Screens / Views

> Layout is consistent across editions; only accent + copy change. Where a screen exists in both editions, it's described once with the per-edition copy noted.

### 1. Welcome (front-door selector) — `Welcome.dc.html`
- **Purpose:** First page a lead lands on. Lets them self-select their path before entering an edition.
- **Layout:** Full-viewport flex column (`min-height:100vh`). Minimal brand bar (logo only — links to Welcome) → centered hero copy → two large choice cards in a `repeat(auto-fit,minmax(320px,1fr))` grid → neutral helper line → slim footer disclaimer. Ambient: a teal radial glow (left), a coral radial glow (right), faint 54px dot-grid masked to a soft radial.
- **Choice cards (order matters):** **Software & SaaS card is shown FIRST (left)**, Crypto & Web3 second (right). In the source this is done with CSS `order:1` (SaaS) / `order:2` (Crypto) on the two anchors.
  - Each card: icon tile (accent-tinted), an "Edition A/B" mono badge, title (`Space Grotesk` 25px), 1-paragraph value prop, three mono feature chips, and an accent "Enter … →" link. Whole card is a link; hover lifts `translateY(-4px)` + stronger shadow + accent border.
  - SaaS card → `Home-SaaS`; Crypto card → `Home`.
- **No "Book a call" anywhere on this page** (intentional — edition-neutral).

### 2. Home — `Home.dc.html` (crypto) / `Home-SaaS.dc.html` (saas)
- **Sections:** Header → Hero (two-col: copy left, code panel right) → Trust bar → Problem (3 cards) → What we do (3 cards, middle card flagged `CORE`) → [SaaS only] **Merchant-account risk tiers** (low/medium/higher-risk, 3 cards) / [Crypto] How-it-works 4-step + Use-cases grid → Stat strip (4 stats) → Case-study teaser (2-col, stat block + testimonial) → CTASection → Footer.
- **Hero code panel:** a fake editor window (3 dots, mono filename tab, status chip, syntax-highlighted `pre`, footer chips, "illustrative" tag).
  - Crypto: `create-payment.ts` — `client.payments.create({ amount, settlement:"EURXM", accepts:["BTC","ETH","SOL","SUI"], recurring, webhook })`.
  - SaaS: `create-subscription.ts` — `client.subscriptions.create({ customer, plan:"pro_monthly", amount:49.00, settlement:"EURXM", accepts:["card","BTC","ETH","USDC"], dunning:true })`. Status chip `201 Created`.
- **SaaS hero extra:** an accent left-border strip with the line **"Merchant Account Solutions for Low, Medium, and Higher Risk Businesses"** (between the lead paragraph and the buttons).
- **Hero H1:** Crypto = "Accept crypto + fiat **the compliant way** — integrated for you." · SaaS = "Recurring billing in crypto + fiat, **built into your SaaS.**" (accent span on the highlighted phrase).
- **Trust bar:** shield "MiCA-compliant" · globe "EU-regulated processor" · mono chain list · mono stablecoin list (`EURXM · USDXM · RONXM`), separated by 1px dividers, centered, wraps.

### 3. Integrations / Solution page — `CryptoIntegrations.dc.html` / `SaaSIntegrations.dc.html`
- **Layout:** Centered page hero → pain-points grid (4 cards, each with a "→ how we remove it" line below a hairline) → two-column "What's included" (numbered 01–05 list, left) + **sticky code panel** (right) → methods & settlement badge panel → testimonial → CTA → Footer.
- **Code panel:** Crypto = `webhook-handler.ts` (verify signature → switch on `payment.confirmed` / `payout.settled`). SaaS = `subscription-webhook.ts` (switch on `invoice.paid` → grantAccess / `payment.failed` → startDunning).
- **Methods/settlement chips:** Crypto = chains `BTC ETH SOL SUI EGLD` + stablecoins. SaaS = methods `Card BTC ETH SOL USDC` + stablecoins. Stablecoin chips use the edition accent fill.

### 4. EU & MiCA guide — `MiCAGuide.dc.html` / `MiCAGuide-SaaS.dc.html`
- **Layout:** Page hero (kicker, H1, lead, "Updated June 2026 · ~8 min read") → article body with **sticky left TOC** (6 anchors, accent hover state) and a right `article` column. Top of article = a tinted "not legal/financial advice" note box (accent border/fill). Six `<h2>` sections with `scroll-margin-top:90px`; one pull-quote with accent left border; a numbered checklist (01–04 cards).
- **SaaS reframing:** title "Accepting crypto + fiat for your SaaS, compliantly in the EU"; section 2 = "Does it apply to SaaS?"; section 4 = "Stablecoins for billing"; examples are subscription/usage-billing oriented and mention risk tier in onboarding.

### 5. Case Studies — `CaseStudies.dc.html` / `CaseStudies-SaaS.dc.html`
- **Layout:** Centered hero → grid of 6 case cards (`repeat(auto-fit,minmax(330px,1fr))`) → dashed-border disclaimer strip → CTA → Footer.
- **Card:** category mono badge (accent fill) + duration (top row), title, blurb (flex:1), then a 2-stat footer above a hairline. Accent on the first stat number.
- **Copy:** Crypto cards = NFT marketplace / exchange / GameFi / crypto-SaaS / Web3 marketplace / token commerce. SaaS cards = B2B SaaS dunning (+11% recovered) / dev-tool metered billing / global multi-currency+stablecoin / high-ticket annual / SaaS marketplace split payouts / early-stage launch. **No real company names** — anonymized, representative figures.

### 6. About & Contact — `Contact.dc.html` / `Contact-SaaS.dc.html`
- **Layout:** About intro (kicker, H1, paragraph) → 2-column grid: left = "Book a free integration call" card (accent border) + "What to expect" (01–03) + email; right = **contact form** with success state.
- **Form fields:** Name, Business/Company, a `<select>` (Crypto: use-case list / SaaS: billing-model list), Current setup, Message, submit. On submit → show success panel (`submitted` state) with a checkmark circle. Inputs show accent focus ring `0 0 0 3px rgba(accent,0.15)` + accent border. `#book` anchors to the booking card, `#contact-form` to the form.
- This is currently a **client-side demo form** (no backend). Wire to the real lead pipeline (CRM/email) in implementation.

---

## Shared Components (build these as real, prop-driven components)

### Header — `Header.dc.html`
- **Props:** `edition` (`"crypto"` | `"saas"`, default `crypto`), `active` (`home`|`crypto`|`mica`|`cases`|`about`) for nav highlight.
- Sticky, `z-index:100`, translucent bg with backdrop blur; bg opacity goes `0.6 → 0.92` once `scrollY > 8`.
- Left: **logo (always links to Welcome)**. Right group: nav links + accent "Book a call" button. **No edition switcher anywhere.**
- **Responsive:** below `980px`, collapse to a hamburger; mobile menu shows stacked nav links. "Book a call" stays visible in the bar.
- Accent, link set, logo stroke, book href all derive from `edition`.

### CTASection — `CTASection.dc.html`
- **Prop:** `edition`. Full-width centered call-to-action card with accent radial glow + masked dot-grid. Accent kicker, big heading (edition-specific copy), subcopy, accent primary button (→ that edition's `#book`) + secondary button (→ that edition's Integrations page). All accent values derive from `edition`.

### Footer — `Footer.dc.html`
- **Prop:** `edition`. 3-column: brand blurb (edition-specific); "Navigate" link column (edition's pages); "Get started" (book + email) + MiCA/EU badges. Bottom row = **independent-partner disclaimer** + copyright. Link hover color = edition accent.
- **Disclaimer (must ship verbatim):** "IntegisPay is an independent integration partner. We are not affiliated with, endorsed by, or speaking on behalf of xMoney or any payment processor. Nothing on this site constitutes financial, legal, regulatory, or tax advice. Always confirm licensing and compliance requirements with qualified counsel."

---

## Interactions & Behavior
- **Scroll reveal:** elements marked `data-reveal` start at `opacity:0; translateY(20px)` and animate to visible (`opacity .7s, transform .7s, cubic-bezier(.2,.7,.2,1)`) via an `IntersectionObserver` (threshold ~0.08, unobserve after reveal). Reproduce with the codebase's preferred approach (IO hook, Framer Motion `whileInView`, etc.). Respect `prefers-reduced-motion`.
- **Header bg on scroll:** toggle translucency past 8px.
- **Switcher / nav hover:** color transitions ~0.2s.
- **Card / button hover:** buttons lift `translateY(-1px/-2px)` + deepen accent shadow; Welcome cards lift `-4px` + accent border.
- **Hero ambient glows:** slow infinite drift keyframes (`ip-drift` ~16s, `ip-drift2` ~19s) — decorative, `pointer-events:none`. Optional; safe to drop on reduced-motion.
- **Code cursor:** blinking block `▍` (`ip-blink` 1.1s step).
- **Contact form:** controlled inputs; submit prevents default and flips to a success panel. No validation rules beyond required-by-design; add real validation + backend submission.

## State Management
- **Header:** `isMobile` (matchMedia `max-width:980px`), `open` (mobile menu), `scrolled` (window scroll > 8). Derive accent/links/switcher from the `edition` prop.
- **Contact pages:** form fields (`name`, `business`, `useCase`/billing model, `setup`, `message`) + `submitted` boolean.
- **No data fetching** in the prototype. Real build: wire the contact form to the lead pipeline; everything else is static content.

## Assets
- **No raster images or external assets.** The logo is an inline SVG mark (rounded square + an "A"-like peak path in the accent + a short indigo `#7C6CF0` cross-stroke); all icons are small inline SVGs; "screenshots" are CSS/HTML fake code panels. Recreate icons with the codebase's icon set or keep as inline SVG. Fonts via Google Fonts (or self-host Space Grotesk / IBM Plex Sans / IBM Plex Mono).

## Files
All design-reference files are in this folder:
- `Welcome.dc.html` — front-door selector
- **Edition A (crypto):** `Home.dc.html`, `CryptoIntegrations.dc.html`, `MiCAGuide.dc.html`, `CaseStudies.dc.html`, `Contact.dc.html`
- **Edition B (saas):** `Home-SaaS.dc.html`, `SaaSIntegrations.dc.html`, `MiCAGuide-SaaS.dc.html`, `CaseStudies-SaaS.dc.html`, `Contact-SaaS.dc.html`
- **Shared (prop-driven):** `Header.dc.html`, `CTASection.dc.html`, `Footer.dc.html`
- `support.js` — the prototype runtime. **Reference only; do not port.** To preview a file, open any `.dc.html` directly in a browser.

### How to read a `.dc.html` file
- Markup lives between `<x-dc>…</x-dc>`; styling is **inline** on elements.
- `{{ value }}` are template holes filled by the component's logic class (`renderVals()` at the bottom). `<sc-for>` = list repeat, `<sc-if>` = conditional, `<dc-import name="X" …>` = mount sibling component `X.dc.html` with props.
- Treat the logic class as the spec for component state/props; rebuild it idiomatically in the target framework.
