import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { SubscriptionCodePanel } from "@/components/CodePanel";
import { ShieldCheck, Globe, Chevrons, Pulse } from "@/components/Icons";

export const metadata: Metadata = {
  title: "IntegisPay for SaaS — Crypto + fiat recurring billing, integrated for you",
  description:
    "We wire subscriptions, crypto + fiat checkout and stablecoin settlement into your SaaS — so you stop losing revenue to failed payments and cross-border friction.",
};

export default function SaasHomePage() {
  return (
    <div className="ed-saas">
      <Header edition="saas" active="home" />

      {/* HERO */}
      <section className="hero">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="grid-texture" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="pill">
              <span className="pill-dot" />
              <span className="pill-text">
                Built on a MiCA-compliant, EU-regulated processor
              </span>
            </div>
            <h1>
              Recurring billing in crypto + fiat,{" "}
              <span className="accent">built into your SaaS.</span>
            </h1>
            <p className="hero-sub tight">
              We&apos;re a specialist payments-integration studio. We wire subscriptions, crypto
              + fiat checkout and stablecoin settlement into your product — so you stop losing
              revenue to failed payments and cross-border friction. You ship product; we ship
              the billing.
            </p>
            <div className="hero-riskline">
              <span>
                Merchant Account Solutions for Low, Medium, and Higher Risk Businesses
              </span>
            </div>
            <div className="btn-row hero-buttons">
              <Link href="/saas/about#book" className="btn btn-primary">
                Book a free integration call
              </Link>
              <Link href="/saas/integrations" className="btn btn-ghost">
                How the integration works
              </Link>
            </div>
            <div className="trusted-line">
              <span className="label">Built for:</span>
              <span className="items">
                B2B SaaS · Usage-based platforms · Dev tools · Subscription apps · Marketplaces
              </span>
            </div>
          </div>
          <SubscriptionCodePanel />
        </div>
      </section>

      {/* TRUST BAR */}
      <Reveal className="trustbar-wrap">
        <div className="trustbar">
          <span className="trust-item">
            <ShieldCheck />
            MiCA-compliant
          </span>
          <span className="trust-divider" />
          <span className="trust-item">
            <Globe />
            EU-regulated processor
          </span>
          <span className="trust-divider" />
          <span className="trust-mono">card · BTC · ETH · SOL · USDC</span>
          <span className="trust-divider" />
          <span className="trust-mono">EURXM · USDXM · RONXM</span>
        </div>
      </Reveal>

      {/* PROBLEM */}
      <Reveal className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 48, maxWidth: 700 }}>
            <span className="eyebrow">The problem</span>
            <h2>Subscription revenue leaks where billing gets complicated.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Failed-payment churn</h3>
              <p>
                Expired cards and soft declines quietly cancel paying customers. Without smart
                retries and dunning, that revenue just disappears.
              </p>
            </div>
            <div className="card">
              <h3>Cross-border friction</h3>
              <p>
                Global customers want to pay in their currency — and increasingly in
                stablecoins. Multi-currency and crypto support is a build most teams keep
                deferring.
              </p>
            </div>
            <div className="card">
              <h3>No time to build it</h3>
              <p>
                Recurring logic, proration, webhooks and reconciliation are a quarter of
                engineering work — time your team should spend on the product.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* WHAT WE DO */}
      <Reveal className="section tight-top">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 44 }}>
            <span className="eyebrow">What we do</span>
            <h2>A done-for-you billing integration, end to end.</h2>
          </div>
          <div className="grid grid-feature">
            <div className="feature-card">
              <div className="icon-tile">
                <ShieldCheck size={22} />
              </div>
              <h3>1 · Compliance qualification</h3>
              <p>
                We assess your SaaS model and risk tier against the regulated processor&apos;s
                requirements — jurisdiction, business type, KYC/KYB and settlement currency — so
                you know you qualify before a line of code.
              </p>
              <ul className="bullet-list">
                <li>
                  <span className="arrow">→</span>Eligibility &amp; risk-tier review
                </li>
                <li>
                  <span className="arrow">→</span>KYC / KYB onboarding support
                </li>
                <li>
                  <span className="arrow">→</span>Settlement &amp; payout planning
                </li>
              </ul>
            </div>
            <div className="feature-card core">
              <span className="core-badge">CORE</span>
              <div className="icon-tile strong">
                <Chevrons size={22} />
              </div>
              <h3>2 · Billing integration</h3>
              <p>
                We build billing into your product: subscriptions, crypto + fiat checkout,
                usage-based metering, dunning and webhooks — tested, monitored and handed over
                clean.
              </p>
              <ul className="bullet-list">
                <li>
                  <span className="arrow">→</span>Subscriptions &amp; hosted checkout
                </li>
                <li>
                  <span className="arrow">→</span>Metering + proration + trials
                </li>
                <li>
                  <span className="arrow">→</span>Webhooks, retries &amp; dunning
                </li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="icon-tile">
                <Pulse size={22} />
              </div>
              <h3>3 · Ongoing support</h3>
              <p>
                After go-live we stay on: monitoring, new currencies and chains, plan changes
                and upgrades as the processor&apos;s API and your pricing evolve.
              </p>
              <ul className="bullet-list">
                <li>
                  <span className="arrow">→</span>Monitoring &amp; alerting
                </li>
                <li>
                  <span className="arrow">→</span>New currencies &amp; chains
                </li>
                <li>
                  <span className="arrow">→</span>Pricing &amp; plan changes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* RISK TIERS */}
      <Reveal className="section tight-top">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Merchant account solutions</span>
            <h2>For low, medium and higher-risk businesses.</h2>
          </div>
          <div className="risk-grid">
            <div className="risk-card">
              <div className="risk-head">
                <span className="risk-dot low" />
                <span className="risk-label low">Low risk</span>
              </div>
              <h3>Standard SaaS &amp; subscriptions</h3>
              <p>
                B2B tools, productivity apps and predictable monthly plans. Fast onboarding and
                clean settlement to fiat or stablecoins.
              </p>
            </div>
            <div className="risk-card">
              <div className="risk-head">
                <span className="risk-dot med" />
                <span className="risk-label med">Medium risk</span>
              </div>
              <h3>High-ticket &amp; usage-based</h3>
              <p>
                Enterprise contracts, metered billing and variable invoices. We structure
                settlement and dunning to keep recovery high.
              </p>
            </div>
            <div className="risk-card high">
              <div className="risk-head">
                <span className="risk-dot high" />
                <span className="risk-label high">Higher risk</span>
              </div>
              <h3>Global &amp; crypto-forward platforms</h3>
              <p>
                Cross-border, high-volume or crypto-heavy models. We match you to the right
                regulated route so you get approved and stay compliant.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* STATS STRIP */}
      <Reveal className="section tight-top">
        <div className="stats-strip">
          <div>
            <div className="stat-num accent">5–10</div>
            <div className="stat-label">days to live, typical integration</div>
          </div>
          <div>
            <div className="stat-num">card+crypto</div>
            <div className="stat-label">one checkout, every payment method</div>
          </div>
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">MiCA-aligned stablecoins (EURXM, USDXM, RONXM)</div>
          </div>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">done for you — no in-house billing build</div>
          </div>
        </div>
      </Reveal>

      {/* CASE STUDY TEASER */}
      <Reveal className="section tight-top">
        <div className="teaser-grid">
          <div className="teaser-card">
            <div>
              <span className="eyebrow">Case study</span>
              <h3>B2B SaaS recovered 11% of churned revenue with smart dunning</h3>
              <p>
                A subscription platform was losing customers to failed card payments. We added
                retries, dunning and a crypto + stablecoin fallback — and turned silent churn
                into recovered revenue.
              </p>
            </div>
            <div className="teaser-stats">
              <div className="teaser-stat">
                <div className="big accent">+11%</div>
                <div className="sub">revenue recovered</div>
              </div>
              <div className="teaser-stat">
                <div className="big">8 days</div>
                <div className="sub">to production</div>
              </div>
            </div>
          </div>
          <div className="quote-card">
            <p className="quote">
              &quot;They handled the entire billing integration — subscriptions, retries, crypto
              + fiat. Failed payments stopped quietly cancelling our customers.&quot;
            </p>
            <div className="author">
              <div className="avatar" />
              <div>
                <div className="name">Head of Growth (placeholder)</div>
                <div className="role">B2B SaaS platform</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <CtaSection edition="saas" />
      <Footer edition="saas" />
    </div>
  );
}
