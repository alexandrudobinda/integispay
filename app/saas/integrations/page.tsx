import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { SubscriptionWebhookPanel } from "@/components/CodePanel";

export const metadata: Metadata = {
  title: "SaaS Integrations — IntegisPay",
  description:
    "Recurring & usage-based billing, crypto + fiat checkout, dunning and stablecoin settlement — built into your SaaS on a MiCA-compliant processor.",
};

export default function SaasIntegrationsPage() {
  return (
    <div className="ed-saas">
      <Header edition="saas" active="crypto" />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="glow glow-center" />
        <div className="page-hero-inner">
          <span className="eyebrow">Software &amp; SaaS</span>
          <h1>Subscription billing, integrated into your product.</h1>
          <p className="page-hero-sub wide">
            Recurring &amp; usage-based billing, crypto + fiat checkout, dunning and stablecoin
            settlement — built into your SaaS by us, on a MiCA-compliant processor.
            Production-ready in days, with the edge cases handled.
          </p>
          <div className="btn-row center">
            <Link href="/saas/about#book" className="btn btn-primary btn-sm">
              Book a free integration call
            </Link>
            <Link href="/saas/mica" className="btn btn-ghost btn-sm">
              How MiCA applies to SaaS
            </Link>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <Reveal className="section-64">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 44, maxWidth: 700 }}>
            <span className="eyebrow">The hard parts</span>
            <h2>What makes SaaS billing painful — and how we remove it.</h2>
          </div>
          <div className="grid-pain">
            <div className="card pain-card">
              <h3>Recurring &amp; proration</h3>
              <p>
                Plans, trials, upgrades, downgrades and mid-cycle proration are a deceptive
                amount of logic to build and keep correct.
              </p>
              <p className="pain-remove">
                <span className="arrow">→ </span>We integrate subscriptions with trials,
                proration and plan changes handled end to end.
              </p>
            </div>
            <div className="card pain-card">
              <h3>Failed-payment churn</h3>
              <p>
                Soft declines and expired cards silently cancel paying customers. Recovery needs
                retries, dunning and fallbacks.
              </p>
              <p className="pain-remove">
                <span className="arrow">→ </span>We wire smart retries, dunning emails and a
                crypto/stablecoin fallback to recover revenue.
              </p>
            </div>
            <div className="card pain-card">
              <h3>Cross-border &amp; multi-currency</h3>
              <p>
                Global customers want to pay in their currency — and increasingly in
                stablecoins. FX and settlement add friction.
              </p>
              <p className="pain-remove">
                <span className="arrow">→ </span>We set up multi-currency charging with
                settlement to EURXM, USDXM, RONXM or fiat.
              </p>
            </div>
            <div className="card pain-card">
              <h3>Usage-based metering</h3>
              <p>
                Metered API calls, seats or events need accurate aggregation, invoicing and
                reconciliation your finance team trusts.
              </p>
              <p className="pain-remove">
                <span className="arrow">→ </span>We integrate metering and usage-based invoicing
                without you building a billing engine.
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
              <h2>A complete billing layer — not a snippet you finish yourself.</h2>
            </div>
            <div className="numbered-list">
              <div className="numbered-row">
                <span className="num">01</span>
                <div>
                  <div className="title">Subscriptions &amp; hosted checkout</div>
                  <div className="desc">
                    Plans, trials and proration with a checkout that takes cards and crypto,
                    themed to your product.
                  </div>
                </div>
              </div>
              <div className="numbered-row">
                <span className="num">02</span>
                <div>
                  <div className="title">Dunning &amp; failed-payment recovery</div>
                  <div className="desc">
                    Retry schedules, dunning flows and fallbacks that win back revenue instead
                    of churning it.
                  </div>
                </div>
              </div>
              <div className="numbered-row">
                <span className="num">03</span>
                <div>
                  <div className="title">Usage-based &amp; metered billing</div>
                  <div className="desc">
                    Meter seats, API calls or events and bill per-usage with accurate invoicing.
                  </div>
                </div>
              </div>
              <div className="numbered-row">
                <span className="num">04</span>
                <div>
                  <div className="title">Webhooks &amp; subscription events</div>
                  <div className="desc">
                    Signed, idempotent webhooks for renewals, failures and cancellations with
                    retries.
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
            <SubscriptionWebhookPanel />
          </div>
        </div>
      </Reveal>

      {/* METHODS & SETTLEMENT */}
      <Reveal className="section tight-top">
        <div className="chains-panel">
          <div className="chains-grid">
            <div>
              <h3>Payment methods at checkout</h3>
              <div className="chip-row">
                <span className="chip">Card</span>
                <span className="chip">BTC</span>
                <span className="chip">ETH</span>
                <span className="chip">SOL</span>
                <span className="chip">USDC</span>
              </div>
            </div>
            <div>
              <h3>Stablecoins &amp; settlement</h3>
              <div className="chip-row">
                <span className="chip accent">EURXM</span>
                <span className="chip accent">USDXM</span>
                <span className="chip accent">RONXM</span>
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
            &quot;We wanted subscriptions plus a crypto option and didn&apos;t want to staff a
            billing team. They scoped it, built it and handed over a clean, monitored
            integration — dunning and all.&quot;
          </p>
          <div className="author">
            <div className="avatar" />
            <div>
              <div className="name">VP Engineering (placeholder)</div>
              <div className="role">B2B SaaS platform</div>
            </div>
          </div>
        </div>
      </Reveal>

      <CtaSection edition="saas" />
      <Footer edition="saas" />
    </div>
  );
}
