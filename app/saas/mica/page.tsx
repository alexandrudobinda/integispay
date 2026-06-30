import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Crypto + Fiat for your SaaS in the EU (MiCA) — IntegisPay",
  description:
    "A practical, engineer's-eye overview of what MiCA means for a software business that wants to bill in crypto and fiat — subscriptions, stablecoins and all.",
};

export default function SaasMicaPage() {
  return (
    <div className="ed-saas">
      <Header edition="saas" active="mica" />

      {/* PAGE HERO */}
      <section className="guide-hero">
        <div className="guide-hero-inner">
          <span className="eyebrow">Guide · EU regulation for SaaS</span>
          <h1>Accepting crypto + fiat for your SaaS, compliantly in the EU.</h1>
          <p className="guide-lede">
            A practical, engineer&apos;s-eye overview of what MiCA means for a software business
            that wants to bill in crypto and fiat — subscriptions, stablecoins and all — and the
            cleanest path to compliant acceptance. Written by the team that does the
            integration.
          </p>
          <div className="guide-meta">
            <span className="mono">Updated June 2026</span>
            <span className="meta-dot" />
            <span>~8 min read</span>
          </div>
        </div>
      </section>

      {/* BODY + TOC */}
      <section className="guide-body">
        <div className="guide-layout">
          <aside className="toc">
            <div className="toc-label">On this page</div>
            <nav>
              <a href="#what-is-mica">1 · What MiCA is</a>
              <a href="#who-is-affected">2 · Does it apply to SaaS?</a>
              <a href="#licensing">3 · The processor route</a>
              <a href="#stablecoins">4 · Stablecoins for billing</a>
              <a href="#path">5 · The compliant path</a>
              <a href="#checklist">6 · Practical checklist</a>
            </nav>
          </aside>

          <article className="article">
            <div className="callout">
              <p>
                <strong>Note:</strong> This is general, educational information — not legal,
                financial, or regulatory advice. Requirements depend on your business model and
                jurisdiction. Confirm specifics with qualified counsel.
              </p>
            </div>

            <h2 id="what-is-mica">1 · What MiCA is</h2>
            <p>
              MiCA — the EU&apos;s Markets in Crypto-Assets Regulation — is the first
              comprehensive, EU-wide framework for crypto-asset issuance and services. It
              replaces a patchwork of national rules with a single regime covering crypto-asset
              service providers (CASPs), stablecoin issuers and the conduct rules that apply
              when you handle crypto on behalf of customers.
            </p>
            <p>
              For a SaaS business that wants to <em>accept</em> crypto for subscriptions or
              usage, the headline is this: handling crypto payments on behalf of customers is a
              regulated activity. You either become licensed yourself, or you bill through a
              provider that already is.
            </p>

            <h2 id="who-is-affected">2 · Does it apply to SaaS?</h2>
            <p>
              If your software charges customers in crypto — for a subscription, a usage-based
              invoice or a one-off — and especially if you convert it, hold balances, or settle
              to stablecoins, you&apos;re touching regulated activity. That&apos;s true whether
              you&apos;re a B2B SaaS, a dev tool, a usage-based platform or a marketplace.
            </p>
            <ul className="article-list">
              <li>
                <span className="dash">—</span>Billing subscriptions or usage in crypto and
                converting to fiat or stablecoins.
              </li>
              <li>
                <span className="dash">—</span>Holding customer balances, credits or wallet
                top-ups.
              </li>
              <li>
                <span className="dash">—</span>Paying out to vendors, creators or partners on a
                marketplace.
              </li>
            </ul>

            <h2 id="licensing">3 · The processor route</h2>
            <p>
              Becoming a licensed CASP is possible, but it&apos;s a multi-quarter project:
              capital requirements, governance, AML programs, audits and ongoing reporting. For
              a SaaS company whose product isn&apos;t payments, that&apos;s the wrong
              investment.
            </p>
            <p>
              The pragmatic route is to bill through a{" "}
              <strong>MiCA-compliant, EU-regulated payment processor</strong>. The processor
              carries the licensing, KYC/KYB, monitoring and settlement obligations; you
              integrate their billing API and inherit a compliant flow. That&apos;s the model we
              build on — and the layer we wire into your SaaS.
            </p>
            <div className="aside-quote">
              <p>
                Working through a regulated processor doesn&apos;t make compliance
                &quot;someone else&apos;s problem&quot; — you still have obligations. But it
                removes the need to hold a CASP license yourself, which is the expensive, slow
                part.
              </p>
            </div>

            <h2 id="stablecoins">4 · Stablecoins for billing</h2>
            <p>
              MiCA introduced strict rules for stablecoins (e-money tokens and asset-referenced
              tokens): reserve backing, redemption rights and issuer authorization. For SaaS
              billing, the practical effect is that compliant, fiat-backed stablecoins become an
              ideal settlement layer — you get stable, predictable revenue without the
              volatility of holding raw crypto across a billing cycle.
            </p>
            <p>
              In our integrations, subscription and usage revenue typically settles into
              MiCA-aligned stablecoins like EURXM, USDXM or RONXM, or out to fiat (EUR, USD, RON)
              — depending on your treasury and payout needs.
            </p>

            <h2 id="path">5 · The compliant path</h2>
            <p>
              Put simply: qualify your model and risk tier, onboard to a regulated processor,
              integrate the billing layer properly — subscriptions, dunning, webhooks — and keep
              it monitored. That&apos;s the sequence we run with every SaaS client, and the
              reason most go live in days rather than spinning up a compliance program from
              scratch.
            </p>

            <h2 id="checklist">6 · Practical checklist</h2>
            <div className="checklist">
              <div className="checklist-item">
                <span className="num">01</span>
                <div className="text">
                  Confirm whether your billing activity is in scope and which obligations
                  attach.
                </div>
              </div>
              <div className="checklist-item">
                <span className="num">02</span>
                <div className="text">
                  Choose a regulated processor and verify its license covers your use case,
                  region and risk tier.
                </div>
              </div>
              <div className="checklist-item">
                <span className="num">03</span>
                <div className="text">
                  Complete KYC/KYB onboarding and define settlement &amp; payout currencies.
                </div>
              </div>
              <div className="checklist-item">
                <span className="num">04</span>
                <div className="text">
                  Integrate subscriptions, webhooks, dunning and reconciliation — then monitor
                  it in production.
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <CtaSection edition="saas" />
      <Footer edition="saas" />
    </div>
  );
}
