# Handoff: IntegisPay marketing website → Next.js

## Overview
IntegisPay is an authority / lead-generation marketing site for a **payments-integration studio** that helps crypto-native and Web3 businesses accept crypto + fiat through a MiCA-compliant, EU-regulated processor (the studio's *integration & onboarding service* is the product being sold — **not** the processor). The site is 5 pages plus 3 shared components, all on one light-gray + teal theme.

The emotional hook is: *"Accept crypto + fiat the compliant way — integrated for you in days, not months."* Tone is technical-credible and reassuring (Stripe-docs-meets-boutique-Web3-consultancy), agency voice ("we" / "our team"), no hype.

## About the design files
The files in this bundle are **design references created in HTML** — prototypes that show the intended look, copy, and behavior. They are **not** production code to copy verbatim. Your task is to **recreate these designs in a Next.js app** using its conventions (App Router, React components, `next/font`, etc.). The HTML uses a small custom runtime (`support.js`, the `.dc.html` "Design Component" format) purely for prototyping — **ignore that runtime**; reimplement the markup as React components with ordinary CSS.

Each `.dc.html` file, when opened in a browser, renders the page. The relevant markup lives between the `<x-dc>` … `</x-dc>` tags; the page logic lives in the `<script data-dc-script>` class at the bottom (`renderVals()` returns the values the template binds to). Read both to understand a page.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and interactions are all defined here and should be reproduced faithfully. All measurements/hex values below are exact.

---

## Tech recommendation (Next.js)

- **Next.js App Router** + TypeScript.
- **Fonts** via `next/font/google`: `Space_Grotesk` (headings), `IBM_Plex_Sans` (body), `IBM_Plex_Mono` (code/eyebrows/badges). Expose as CSS variables and set `IBM Plex Sans` as the default body font.
- **Styling**: any approach is fine (CSS Modules, Tailwind, vanilla-extract). If Tailwind, encode the tokens below into the theme. The prototype uses inline styles only because of the prototyping runtime — **do not** ship inline styles; move them to your styling layer.
- **No UI kit / no images required** — every icon and the logo are inline SVG (provided below). No raster assets.
- **Client components**: the header (responsive nav + scroll state), the scroll-reveal wrapper, and the contact form need `"use client"`. Everything else can be a server component.

### Suggested route / file structure
```
app/
  layout.tsx                 # fonts, <html>/<body>, global CSS vars, default bg #EAEEF4
  page.tsx                   # Home
  crypto-integrations/page.tsx
  eu-mica/page.tsx           # the MiCA guide
  case-studies/page.tsx
  contact/page.tsx
components/
  Header.tsx                 # "use client" — sticky, responsive, active link
  Footer.tsx
  CtaSection.tsx             # reusable bottom CTA band
  Reveal.tsx                 # "use client" — IntersectionObserver fade-in wrapper
  ContactForm.tsx            # "use client" — controlled form + success state
  CodePanel.tsx              # the "terminal" card (hero + crypto page)
  Logo.tsx                   # inline SVG wordmark
styles/
  tokens.css                 # CSS variables (or tailwind theme)
```

Route mapping (update the nav `href`s accordingly — the prototype uses `*.dc.html` filenames):
| Prototype file | Route | Nav label | `active` key |
|---|---|---|---|
| `Home.dc.html` | `/` | Home | `home` |
| `CryptoIntegrations.dc.html` | `/crypto-integrations` | Crypto Integrations | `crypto` |
| `MiCAGuide.dc.html` | `/eu-mica` | EU & MiCA | `mica` |
| `CaseStudies.dc.html` | `/case-studies` | Case Studies | `cases` |
| `Contact.dc.html` | `/contact` | About | `about` |

---

## Design tokens

### Color
| Token | Hex / value | Usage |
|---|---|---|
| `--bg` | `#EAEEF4` | Page background (light cool gray) |
| `--surface` | `#FFFFFF` | Cards, form, header/footer surfaces |
| `--surface-2` | `#F2F5F9` | Subtle panels (e.g. "how it works" panel) |
| `--surface-3` | `#F4F7FB` | Card gradient bottom / code panel bottom |
| `--footer-bg` | `#E6EAF1` | Footer |
| `--ink` | `#0E1A2B` | Headings, strongest text |
| `--text` | `#182636` | Body strong |
| `--text-2` | `#36435A` | Secondary text / inline code text |
| `--article` | `#3E4B61` | Long-form article body (MiCA page) |
| `--muted` | `#586780` | Muted body / subheads |
| `--muted-2` | `#5B6A82` | — |
| `--faint` | `#7E8BA0` | Captions, meta, labels |
| `--faint-2` | `#93A0B4` | Faintest / code comments / placeholders region |
| `--accent` | `#12B39A` | Primary teal — buttons, links, eyebrows, icons |
| `--accent-strong` | `#0E9A84` | Teal text needing extra contrast |
| `--accent-tint-bg` | `rgba(18,179,154,0.08)` | Teal chip/badge background |
| `--accent-tint-border` | `rgba(18,179,154,0.22)` | Teal chip/badge border |
| `--on-accent` | `#FFFFFF` | Text/icon on teal buttons |
| border hairline | `rgba(13,27,46,0.09)` | Default card border (scale: `.05 .06 .08 .09 .10 .11 .12 .16`) |
| code: number | `#B07A12` | syntax: numbers |
| code: string | `#0E8C5E` | syntax: strings |
| code: keyword | `#12B39A` | syntax: keywords / function names |
| code: comment | `#93A0B4` | syntax: comments |
| code: dots | `#C9D2DF` | window traffic-light dots |

Accent RGB (for rgba()): **18, 179, 154**. Ink RGB: **13, 27, 46**.

### Shadows
- Card: `0 1px 3px rgba(13,27,46,0.05)`
- Elevated card / code panel: `0 24px 60px rgba(13,27,46,0.10)`
- Teal button: `0 6px 22px rgba(18,179,154,0.28)` (hover lifts ~`-2px`, shadow grows)

### Radius
`8–9px` small chips/badges · `10–11px` inputs & buttons · `14px` standard cards · `16–18px` feature/case cards · `20–22px` large panels & CTA band.

### Spacing & layout
- Content container: `max-width: 1200px; margin: 0 auto; padding: 0 24px` (article container on MiCA page: `1080px`).
- Section vertical padding: ~`72–96px` (hero), ~`64–88px` (content sections).
- Grid gaps: `14–22px`.

### Typography
| Role | Family | Size | Weight | Tracking |
|---|---|---|---|---|
| Hero H1 | Space Grotesk | `clamp(38px, 5.6vw, 66px)`, line-height 1.04 | 600 | `-0.03em` |
| Page H1 (inner pages) | Space Grotesk | `clamp(32px, 4.6–5vw, 56px)` | 600 | `-0.03em` |
| Section H2 | Space Grotesk | `clamp(26–28px, 3.6–4vw, 40–42px)`, lh 1.1 | 600 | `-0.025em` |
| Card H3 | Space Grotesk | `16–20px` | 600 | `-0.01 to -0.02em` |
| Body | IBM Plex Sans | `14.5–18.5px`, lh 1.6 | 400 | — |
| Long-form body | IBM Plex Sans | `16px`, lh 1.75 | 400 | — |
| Eyebrow / badge / meta / code | IBM Plex Mono | `11–13px`, often `uppercase`, tracking `0.08–0.12em` | 400–500 | — |

Headings use `text-wrap: balance`/`pretty` where helpful. `html { scroll-behavior: smooth }`.

---

## Shared components

### Header (`components/Header.tsx`, client)
- Sticky (`position: sticky; top: 0; z-index: 100`), full-width, hairline bottom border `rgba(13,27,46,0.09)`, `backdrop-filter: saturate(160%) blur(14px)`.
- Background is translucent and **darkens on scroll**: `rgba(234,238,244,0.6)` at top → `rgba(234,238,244,0.9)` once `window.scrollY > 8`.
- Inner bar: `max-width:1200px`, height `68px`, flex space-between. Left = logo; right = nav links + teal **"Book a call"** button (`→ /contact#book`).
- Nav links: 14.5px, weight 500, color `--muted`; **active link** is `--ink`; hover → `--ink`. Links: Home, Crypto Integrations, EU & MiCA, Case Studies, About.
- **Responsive**: below `860px` (`matchMedia('(max-width: 860px)')`) hide the link row, show the "Book a call" button + a hamburger; tapping the hamburger toggles a stacked dropdown menu (full-width, `#EAEEF4` bg, links 16px stacked with hairline dividers).
- "Book a call" button: bg `--accent`, text `#FFFFFF`, weight 600, 14px, padding `10px 18px`, radius `9px`, shadow `0 4px 18px rgba(18,179,154,0.22)`.

### Footer (`components/Footer.tsx`)
- Background `--footer-bg` (`#E6EAF1`), top hairline border, `padding: 56–64px 24px 32px`.
- 3 columns (responsive `auto-fit minmax(200px,1fr)`): (1) logo + one-line description, (2) "Navigate" link list, (3) "Get started" (Book a call link + `hello@integispay.com`).
- Bottom bar (top hairline): **legal disclaimer** + `© 2026 IntegisPay`.
- **Disclaimer copy (verbatim):** *"IntegisPay is an independent integration partner. We are not affiliated with, endorsed by, or speaking on behalf of xMoney or any payment processor. Nothing on this site constitutes financial, legal, regulatory, or tax advice."*

### CtaSection (`components/CtaSection.tsx`)
- Reused at the bottom of Home, Crypto Integrations, MiCA, Case Studies (NOT on Contact).
- Centered band, `max-width:980px`, radius `22px`, teal-tinted top glow over white: `radial-gradient(120% 160% at 50% -20%, rgba(18,179,154,0.14), rgba(18,179,154,0.07) 38%, transparent 70%)` on `#FFFFFF`, 1px teal-tint border, faint grid texture masked to fade.
- Eyebrow "READY WHEN YOU ARE" → H2 *"Accept crypto + fiat the compliant way — integrated for you in days, not months."* → subcopy → primary button **"Book a free integration call"** (`→ /contact#book`) + ghost button **"See what's included"** (`→ /crypto-integrations`).

### Reveal (`components/Reveal.tsx`, client)
Scroll-in animation used on most sections. Wrap a section; on mount, set children `opacity:0; transform:translateY(20px); transition: opacity .7s, transform .7s (cubic-bezier(.2,.7,.2,1))`, then `IntersectionObserver` (threshold ~`0.08`, rootMargin `0px 0px -6% 0px`) sets `opacity:1; transform:none` once in view, unobserving after. Respect `prefers-reduced-motion` (skip the offset).

### Logo (inline SVG)
Wordmark = mark + "Integis" (ink) + "Pay" (teal). Mark:
```html
<svg width="28" height="28" viewBox="0 0 32 32" fill="none">
  <rect x="1" y="1" width="30" height="30" rx="8" fill="#FFFFFF" stroke="rgba(18,179,154,0.45)"/>
  <path d="M9 21 L16 7 L23 21" stroke="#12B39A" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 16 L20 16" stroke="#12B39A" stroke-width="2.2" stroke-linecap="round"/>
</svg>
```
Wordmark text: Space Grotesk 600, 18px, `-0.02em`; "Pay" colored `#12B39A`.

---

## Pages

### 1. Home (`/`)
Sections top-to-bottom:
1. **Hero** — two-column (`auto-fit minmax(360px,1fr)`, gap 56px). Left: pill badge "Built on a MiCA-compliant, EU-regulated processor" (teal dot + mono text), H1 *"Accept crypto + fiat **the compliant way** — integrated for you."* ("the compliant way" in teal), subcopy (agency "we" voice, see file), two buttons ("Book a free integration call" → `/contact#book`, "How the integration works" → `/crypto-integrations`), and a small "Trusted approach for: Exchanges · NFT/GameFi · dApps · Crypto SaaS · Marketplaces" line. Right: **CodePanel** (see below). Behind the hero: two slowly drifting teal radial glows (`@keyframes`, ~16–19s) + a faint grid masked to a radial fade. **Keep these as CSS animations** so they run in production.
2. **Trust bar** — single row, top+bottom hairlines: shield-check "MiCA-compliant", globe "EU-regulated processor", mono "BTC · ETH · SOL · SUI · EGLD", mono "EURXM · USDXM · RONXM", separated by 1px dividers; wraps on mobile.
3. **The problem** — eyebrow + H2, then 3 cards (Regulatory complexity / Fragmented tooling / No time to build it).
4. **What we do** — eyebrow + H2, 3 feature cards: (1) Compliance qualification, (2) Technical integration *(highlighted: teal border + "CORE" badge + shadow)*, (3) Ongoing support. Each: icon tile, H3, paragraph, 3-item bullet list with teal "→" markers.
5. **How it works** — a `--surface-2` panel (radius 20px) with eyebrow + H2 and a 4-step grid (`auto-fit minmax(210px,1fr)`): 01 Qualify · 02 Integrate · 03 Go live · 04 Scale (step 04 has teal tint). Mono step numbers in teal.
6. **Use cases** — eyebrow + H2 "Built for crypto-native & Web3 commerce.", grid `repeat(auto-fit, minmax(300px,1fr))` → **3 per row** (6 cards: Exchanges & brokers, NFT & GameFi, dApps & protocols, Crypto SaaS, Web3 marketplaces, Token commerce).
7. **Stats strip** — teal-tinted panel, 4 stats (`auto-fit minmax(160px,1fr)`): "5–10 days to live", "5+ chains (BTC, ETH, SOL, SUI, EGLD)", "3 MiCA-aligned stablecoins (EURXM, USDXM, RONXM)", "100% done for you". First number is teal, rest ink.
8. **Case-study teaser** — 2-up: left card (teal eyebrow "CASE STUDY", H3 "NFT marketplace, live in 7 days with multi-chain checkout", paragraph, two stats "7 days / 3 chains"); right card = pull-quote + placeholder avatar (teal gradient circle) + "Founder (placeholder) · Web3 marketplace".
9. **CtaSection** then **Footer**.

### 2. Crypto Integrations (`/crypto-integrations`)
1. **Page hero** (centered): eyebrow "CRYPTO-NATIVE & WEB3", H1 "Crypto payments, integrated into your product.", subcopy, buttons ("Book a free integration call" → `/contact#book`, "How MiCA applies" → `/eu-mica`). Single drifting teal glow behind.
2. **The hard parts** — eyebrow + H2, 4 cards (`auto-fit minmax(270px,1fr)`): Multi-chain support / Stablecoin settlement / Fiat off-ramp / Compliance overhead. Each card has a paragraph then a top-bordered "→ how we remove it" line.
3. **What the integration includes + code** — 2-column (`auto-fit minmax(340px,1fr)`). Left: eyebrow + H2 + a 5-row numbered list (01–05: Crypto API & hosted checkout / Payment links & invoices / Recurring & subscriptions / Multi-chain webhooks / Settlement & reconciliation), each row = mono number + title + description, hairline dividers. Right: **sticky CodePanel** showing `webhook-handler.ts` (signature verify + switch on `payment.confirmed` / `payout.settled`), footer note "Signed · idempotent · retried" + "illustrative".
4. **Chains & stablecoins** — `--surface-2` panel: "Chains we integrate" chips (BTC ETH SOL SUI EGLD) and "Stablecoins & settlement" teal chips (EURXM USDXM RONXM) + "EUR · USD · RON payouts".
5. **Proof** — gradient card with a large pull-quote + placeholder avatar ("CTO (placeholder) · Crypto-native marketplace").
6. **CtaSection** then **Footer**.

### 3. EU & MiCA guide (`/eu-mica`)
SEO/authority long-form article.
1. **Hero** (bordered bottom): eyebrow "GUIDE · EU REGULATION", H1 "How to accept crypto + fiat legally in the EU under MiCA.", lede, meta line "Updated June 2026 · ~8 min read".
2. **Body** — responsive 2-column **flex**: sticky **Table of Contents** sidebar (`flex: 0 0 220px`, left-bordered link list, hover = teal text + teal left-border) and **article** (`flex: 1 1 520px`). On narrow screens it wraps (TOC stacks above article). Anchor links use `scroll-margin-top: 90px`. Sections (with `id`s): `what-is-mica`, `who-is-affected`, `licensing`, `stablecoins`, `path`, `checklist`. Includes a teal "Note: educational, not advice" callout at top, an em-dash bullet list, a teal-left-border pull-aside, and a numbered 4-card checklist. Article body text is `--article` `#3E4B61`, 16px, line-height 1.75. **Copy is in `MiCAGuide.dc.html` — reproduce it verbatim.**
3. **CtaSection** then **Footer**.

### 4. Case Studies (`/case-studies`)
1. **Hero** (centered): eyebrow "SELECTED WORK", H1 "Integrations shipped. Outcomes measured.", subcopy noting names are withheld / metrics are representative.
2. **Case grid** — `repeat(auto-fit, minmax(330px,1fr))`, 6 white cards (NFT Marketplace / Exchange / GameFi / Crypto SaaS / Web3 Marketplace / Token Commerce). Each card: top row = teal category chip + mono "N days"; H3 result title; description (flex-grows to align); top-bordered footer row with two stats (first stat teal). Copy in `CaseStudies.dc.html`.
3. **Disclaimer strip** — dashed-border note: anonymized/representative figures; independent partner.
4. **CtaSection** then **Footer**.

### 5. About / Contact (`/contact`)
1. **About** — eyebrow "ABOUT INTEGISPAY", H1 "A payments-integration studio for crypto-native teams.", credibility paragraph.
2. **Contact grid** — 2-column (`auto-fit minmax(320px,1fr)`). Left column: a **"Book a free integration call"** card (`id="book"`, teal-tinted border, gradient white→`#F4F7FB`, button "Request a call" → `#contact-form`) and a **"What to expect"** card (3 numbered points + `hello@integispay.com`). Right column: the **contact form card** (`id="contact-form"`).
3. **Footer** (no CtaSection on this page).

---

## Interactions & behavior

- **Navigation**: standard `<Link>` routing. "Book a call" everywhere → `/contact#book`; the booking card scrolls to the form via `#contact-form`. Honor hash anchors with `scroll-margin-top: 90px` to clear the sticky header.
- **Header scroll state**: listen to `scroll` (passive), toggle the translucent background opacity at `scrollY > 8`.
- **Responsive nav**: `matchMedia('(max-width: 860px)')` switches to hamburger + toggled dropdown; close the menu on breakpoint change.
- **Scroll reveal**: see Reveal component above. Sections marked with reveal in the prototypes: trust bar, problem, what-we-do, how-it-works, use-cases, stats, case teaser (Home); the equivalent content sections on the other pages.
- **Hero motion**: CSS `@keyframes` only — `ip-drift`/`ip-drift2` (glow translate/scale, ~16–19s ease-in-out infinite) and `ip-blink` (terminal cursor, steps(1)). No JS. (In the prototype runtime these are CSS too; the earlier per-line "typing" animation was intentionally removed because it could leave content hidden — keep the code static + visible.)
- **Contact form** (`ContactForm.tsx`, client):
  - Fields: **Name** (text), **Business** (text), **Use case** (`<select>`: Exchange / broker, NFT / GameFi, dApp / protocol, Crypto SaaS, Web3 marketplace, Token commerce, Other), **Current setup** (text), **Message** (textarea, 4 rows).
  - Controlled inputs. Focus state: border → `--accent`, plus `box-shadow: 0 0 0 3px rgba(18,179,154,0.15)`.
  - On submit: `preventDefault()` → replace the form with a **success panel** (teal check-circle, "Thanks — we'll be in touch.", reassurance copy). The prototype has **no backend** — wire this to your real endpoint / email service / CRM. Add validation as needed (the prototype does none beyond being controlled).
  - Fine print under the button (verbatim): *"By submitting you agree to be contacted about your integration. We don't share your details."*

### CodePanel component
A "terminal" card used in the Home hero (`create-payment.ts`, 200 OK) and Crypto page (`webhook-handler.ts`). White surface, gradient `#FFFFFF → #F4F7FB`, 1px hairline border, large shadow, radius 16px. Title bar: 3 dots (`#C9D2DF`), a mono filename, optional mono "200 OK" pill (teal). Body: monospaced code with the syntax colors in the token table. Footer chip row (Home: webhooks / multi-chain / recurring / payment links). A tiny "illustrative" label bottom-right. **Code is illustrative copy, not a real SDK** — keep the "illustrative" markers.

## State management
- **Header**: `isMobile` (from matchMedia), `menuOpen` (bool), `scrolled` (bool).
- **ContactForm**: `{ name, business, useCase, setup, message }` strings + `submitted` bool.
- **Reveal**: none beyond the observer; no app-level state/data fetching anywhere. No external data sources.

## Assets
- **None as files.** All icons (shield-check, globe, chevrons, pin, check) and the logo are **inline SVG** — reproduce as small React components. Avatars are CSS gradient circles (`linear-gradient(135deg, #12B39A, #5BD6BE)`), placeholders for real headshots.
- **Fonts**: Space Grotesk, IBM Plex Sans, IBM Plex Mono (Google Fonts → use `next/font/google`).
- Replace placeholder contact details (`hello@integispay.com`), case-study figures, and testimonials with real content before launch.

## Compliance / copy guardrails (important)
- Keep the **independent-partner disclaimer** in the footer on every page (and the dashed disclaimer on Case Studies).
- Do not claim to *be* the processor or to speak for it. The product is the **integration & onboarding service**.
- Processor facts referenced (MiCA-compliant, EU-regulated, chains BTC/ETH/SOL/SUI/EGLD, stablecoins EURXM/USDXM/RONXM, EUR/USD/RON payouts) should be re-verified against the processor's current docs before launch.

## Files in this bundle (design references)
- `Home.dc.html` — Home page
- `CryptoIntegrations.dc.html` — Crypto Integrations page
- `MiCAGuide.dc.html` — EU & MiCA guide (verbatim long-form copy)
- `CaseStudies.dc.html` — Case Studies
- `Contact.dc.html` — About / Contact (form logic in its `<script>` block)
- `Header.dc.html`, `Footer.dc.html`, `CTASection.dc.html` — shared components
- `support.js` — the prototyping runtime (needed only to open the `.dc.html` files in a browser; **do not port it**)

To preview a reference page, open any `.dc.html` in a browser (they load `support.js` from the same folder).
