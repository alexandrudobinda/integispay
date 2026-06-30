import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Crypto + Fiat in the EU (MiCA) — IntegisPay",
  description:
    "A practical, engineer's-eye overview of how to accept crypto + fiat legally in the EU under MiCA, and the cleanest path to compliant acceptance.",
};

export default function CryptoMicaPage() {
  return (
    <div className="ed-crypto">
      <Header edition="crypto" active="mica" />

      {/* PAGE HERO */}
      <section className="guide-hero">
        <div className="guide-hero-inner">
          <span className="eyebrow">Guide · EU regulation</span>
          <h1>How to accept crypto + fiat legally in the EU under MiCA.</h1>
          <p className="guide-lede">
            A practical, engineer&apos;s-eye overview of what changed with MiCA, what it means
            for businesses that want to accept crypto payments, and the cleanest path to
            compliant acceptance. Written by the team that does the integration.
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
              <a href="#who-is-affected">2 · Who&apos;s affected</a>
              <a href="#licensing">3 · Licensing &amp; the processor route</a>
              <a href="#stablecoins">4 · Stablecoins under MiCA</a>
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
              when you handle other people&apos;s crypto.
            </p>
            <p>
              For a business that simply wants to <em>accept</em> crypto, the headline is this:
              handling crypto payments on behalf of customers is a regulated activity. You
              either become licensed yourself, or you work through a provider that already is.
            </p>

            <h2 id="who-is-affected">2 · Who&apos;s affected</h2>
            <p>
              If you take crypto in exchange for goods, services, subscriptions or access — and
              especially if you convert it, hold it for users, or pay out to third parties —
              you&apos;re touching regulated activity. That includes exchanges, marketplaces,
              NFT and GameFi platforms, dApps with commerce, and crypto-native SaaS.
            </p>
            <ul className="article-list">
              <li>
                <span className="dash">—</span>Accepting crypto at checkout and converting to
                fiat or stablecoins.
              </li>
              <li>
                <span className="dash">—</span>Holding balances or custody on behalf of users.
              </li>
              <li>
                <span className="dash">—</span>Paying out to vendors, creators or
                counterparties.
              </li>
            </ul>

            <h2 id="licensing">3 · Licensing &amp; the processor route</h2>
            <p>
              Becoming a licensed CASP is possible, but it&apos;s a multi-quarter project:
              capital requirements, governance, AML programs, audits and ongoing reporting. For
              most businesses whose product isn&apos;t payments itself, that&apos;s the wrong
              investment.
            </p>
            <p>
              The pragmatic route is to integrate a{" "}
              <strong>MiCA-compliant, EU-regulated payment processor</strong>. The processor
              carries the licensing, KYC/KYB, monitoring and settlement obligations; you
              integrate their API and inherit a compliant flow. That&apos;s the model we build
              on.
            </p>
            <div className="aside-quote">
              <p>
                Working through a regulated processor doesn&apos;t make compliance
                &quot;someone else&apos;s problem&quot; — you still have obligations. But it
                removes the need to hold a CASP license yourself, which is the expensive, slow
                part.
              </p>
            </div>

            <h2 id="stablecoins">4 · Stablecoins under MiCA</h2>
            <p>
              MiCA introduced strict rules for stablecoins (e-money tokens and asset-referenced
              tokens): reserve backing, redemption rights and issuer authorization. The
              practical effect is that compliant, fiat-backed stablecoins become the natural
              settlement layer — you get stable value without the regulatory ambiguity of
              holding volatile crypto.
            </p>
            <p>
              In our integrations, settlement typically routes into MiCA-aligned stablecoins
              like EURXM, USDXM or RONXM, or out to fiat (EUR, USD, RON) — depending on your
              treasury and payout needs.
            </p>

            <h2 id="path">5 · The compliant path</h2>
            <p>
              Put simply: qualify your model, onboard to a regulated processor, integrate the
              payment layer properly, and keep it monitored. That&apos;s the sequence we run
              with every client — and the reason most go live in days rather than spinning up a
              compliance program from scratch.
            </p>

            <h2 id="checklist">6 · Practical checklist</h2>
            <div className="checklist">
              <div className="checklist-item">
                <span className="num">01</span>
                <div className="text">
                  Confirm whether your activity is in scope and which obligations attach.
                </div>
              </div>
              <div className="checklist-item">
                <span className="num">02</span>
                <div className="text">
                  Choose a regulated processor and verify its license covers your use case and
                  region.
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
                  Integrate checkout, webhooks and reconciliation — then monitor it in
                  production.
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <CtaSection edition="crypto" />
      <Footer edition="crypto" />
    </div>
  );
}
