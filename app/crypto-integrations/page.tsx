import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { WebhookCodePanel } from "@/components/CodePanel";

export const metadata: Metadata = {
  title: "Crypto Integrations — IntegisPay",
  description:
    "Multi-chain acceptance, stablecoin settlement and a compliant fiat off-ramp — built into your product on a MiCA-compliant processor.",
};

export default function CryptoIntegrationsPage() {
  return (
    <>
      <Header active="crypto" />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="glow glow-center" />
        <div className="page-hero-inner">
          <span className="eyebrow">Crypto-native &amp; Web3</span>
          <h1>Crypto payments, integrated into your product.</h1>
          <p className="page-hero-sub">
            Multi-chain acceptance, stablecoin settlement and a compliant fiat off-ramp — built
            into your exchange, marketplace, dApp or SaaS by us, on a MiCA-compliant processor.
            Production-ready in days.
          </p>
          <div className="btn-row center">
            <Link href="/contact#book" className="btn btn-primary btn-sm">
              Book a free integration call
            </Link>
            <Link href="/eu-mica" className="btn btn-ghost btn-sm">
              How MiCA applies
            </Link>
          </div>
        </div>
      </section>

      {/* THE HARD PARTS */}
      <Reveal className="section-64">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 44 }}>
            <span className="eyebrow">The hard parts</span>
            <h2>What makes crypto acceptance painful — and how we remove it.</h2>
          </div>
          <div className="grid-pain">
            <div className="card pain-card">
              <h3>Multi-chain support</h3>
              <p>
                Accepting BTC, ETH, SOL, SUI and EGLD means different confirmations, fee models
                and finality rules per chain.
              </p>
              <p className="pain-remove">
                <span className="arrow">→ </span>We integrate one API that normalizes all of
                them, with per-chain webhook handling.
              </p>
            </div>
            <div className="card pain-card">
              <h3>Stablecoin settlement</h3>
              <p>
                Volatility makes raw crypto risky to hold. You need settlement into stable value
                without manual treasury work.
              </p>
              <p className="pain-remove">
                <span className="arrow">→ </span>We configure settlement to EURXM, USDXM or
                RONXM — 1:1 fiat-backed, MiCA-aligned.
              </p>
            </div>
            <div className="card pain-card">
              <h3>Fiat off-ramp</h3>
              <p>
                Most businesses still pay suppliers and salaries in fiat. Getting from crypto to
                a bank account compliantly is non-trivial.
              </p>
              <p className="pain-remove">
                <span className="arrow">→ </span>We set up payouts in EUR, USD or RON through
                the regulated processor.
              </p>
            </div>
            <div className="card pain-card">
              <h3>Compliance overhead</h3>
              <p>
                KYC/KYB, transaction monitoring and reporting obligations are easy to
                under-build and expensive to retrofit.
              </p>
              <p className="pain-remove">
                <span className="arrow">→ </span>We onboard you to a processor that carries the
                licensing, so you inherit the compliance.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* WHAT'S INCLUDED + CODE */}
      <Reveal className="section tight-top">
        <div className="includes-grid">
          <div>
            <span className="eyebrow">What the integration includes</span>
            <div className="includes-head">
              <h2>A complete payment layer — not a snippet you finish yourself.</h2>
            </div>
            <div className="numbered-list">
              <div className="numbered-row">
                <span className="num">01</span>
                <div>
                  <div className="title">Crypto API &amp; hosted checkout</div>
                  <div className="desc">
                    Drop-in checkout or fully embedded payment elements, themed to your product.
                  </div>
                </div>
              </div>
              <div className="numbered-row">
                <span className="num">02</span>
                <div>
                  <div className="title">Payment links &amp; invoices</div>
                  <div className="desc">
                    Shareable links and invoicing for sales, OTC deals and one-off charges.
                  </div>
                </div>
              </div>
              <div className="numbered-row">
                <span className="num">03</span>
                <div>
                  <div className="title">Recurring &amp; subscriptions</div>
                  <div className="desc">
                    Billing in stablecoins or fiat with retry logic and dunning handled.
                  </div>
                </div>
              </div>
              <div className="numbered-row">
                <span className="num">04</span>
                <div>
                  <div className="title">Multi-chain webhooks</div>
                  <div className="desc">
                    Signed, idempotent webhook handling with retries and replay protection.
                  </div>
                </div>
              </div>
              <div className="numbered-row">
                <span className="num">05</span>
                <div>
                  <div className="title">Settlement &amp; reconciliation</div>
                  <div className="desc">
                    Settlement into your chosen currency, with reconciliation your finance team
                    can trust.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky-panel">
            <WebhookCodePanel />
          </div>
        </div>
      </Reveal>

      {/* CHAINS & STABLECOINS */}
      <Reveal className="section tight-top">
        <div className="chains-panel">
          <div className="chains-grid">
            <div>
              <h3>Chains we integrate</h3>
              <div className="chip-row">
                <span className="chip">BTC</span>
                <span className="chip">ETH</span>
                <span className="chip">SOL</span>
                <span className="chip">SUI</span>
                <span className="chip">EGLD</span>
              </div>
            </div>
            <div>
              <h3>Stablecoins &amp; settlement</h3>
              <div className="chip-row">
                <span className="chip teal">EURXM</span>
                <span className="chip teal">USDXM</span>
                <span className="chip teal">RONXM</span>
                <span className="chip">EUR · USD · RON payouts</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* PROOF */}
      <Reveal className="section tight-top">
        <div className="proof-card">
          <p className="quote">
            &quot;We needed multi-chain checkout with EUR settlement and didn&apos;t want to
            staff a payments team. They scoped it, built it and handed over a clean, monitored
            integration in a week.&quot;
          </p>
          <div className="author">
            <div className="avatar" />
            <div>
              <div className="name">CTO (placeholder)</div>
              <div className="role">Crypto-native marketplace</div>
            </div>
          </div>
        </div>
      </Reveal>

      <CtaSection />
      <Footer />
    </>
  );
}
