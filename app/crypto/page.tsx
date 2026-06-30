import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { HomeCodePanel } from "@/components/CodePanel";
import { ShieldCheck, Globe, Chevrons, Pin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "IntegisPay — Compliant crypto + fiat payment integration, done for you",
  description:
    "We connect crypto-native and Web3 businesses to a MiCA-compliant, EU-regulated payment stack — crypto and fiat, multi-chain, with stablecoin settlement. Live in days, not months.",
};

export default function CryptoHomePage() {
  return (
    <div className="ed-crypto">
      <Header edition="crypto" active="home" />

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
              Accept crypto + fiat <span className="accent">the compliant way</span> —
              integrated for you.
            </h1>
            <p className="hero-sub">
              We&apos;re a specialist payments-integration studio. We connect crypto-native and
              Web3 businesses to a regulated payment stack — crypto and fiat, multi-chain, with
              stablecoin settlement — so you go live in days, not months. Your team doesn&apos;t
              build it. Ours does.
            </p>
            <div className="btn-row hero-buttons">
              <Link href="/crypto/about#book" className="btn btn-primary">
                Book a free integration call
              </Link>
              <Link href="/crypto/integrations" className="btn btn-ghost">
                How the integration works
              </Link>
            </div>
            <div className="trusted-line">
              <span className="label">Trusted approach for:</span>
              <span className="items">
                Exchanges · NFT/GameFi · dApps · Crypto SaaS · Marketplaces
              </span>
            </div>
          </div>
          <HomeCodePanel />
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
          <span className="trust-mono">BTC · ETH · SOL · SUI · EGLD</span>
          <span className="trust-divider" />
          <span className="trust-mono">EURXM · USDXM · RONXM</span>
        </div>
      </Reveal>

      {/* PROBLEM */}
      <Reveal className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <span className="eyebrow">The problem</span>
            <h2>Accepting crypto compliantly got harder. Building it in-house got slower.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Regulatory complexity</h3>
              <p>
                Post-MiCA, accepting crypto in the EU means licensed processing, KYC/KYB,
                travel-rule data and stablecoin rules. Getting it wrong is existential.
              </p>
            </div>
            <div className="card">
              <h3>Fragmented tooling</h3>
              <p>
                Chains, wallets, on/off-ramps, settlement and reconciliation rarely speak the
                same language. Stitching them together is a project on its own.
              </p>
            </div>
            <div className="card">
              <h3>No time to build it</h3>
              <p>
                Your engineers should ship your product — not spend a quarter on payment
                plumbing, webhook retries and edge-case settlement logic.
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
            <h2>A done-for-you payment integration, end to end.</h2>
          </div>
          <div className="grid grid-feature">
            <div className="feature-card">
              <div className="icon-tile">
                <ShieldCheck size={22} />
              </div>
              <h3>1 · Compliance qualification</h3>
              <p>
                We assess your model against the regulated processor&apos;s requirements —
                jurisdiction, business type, KYC/KYB and settlement currency — so you know you
                qualify before a line of code.
              </p>
              <ul className="bullet-list">
                <li>
                  <span className="arrow">→</span>Eligibility &amp; jurisdiction review
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
              <h3>2 · Technical integration</h3>
              <p>
                We build the integration into your product: Crypto API, hosted checkout, payment
                links, recurring billing and multi-chain webhooks — tested, monitored and handed
                over clean.
              </p>
              <ul className="bullet-list">
                <li>
                  <span className="arrow">→</span>Crypto API &amp; hosted checkout
                </li>
                <li>
                  <span className="arrow">→</span>Recurring + payment links
                </li>
                <li>
                  <span className="arrow">→</span>Webhooks, retries &amp; reconciliation
                </li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="icon-tile">
                <Pin size={22} />
              </div>
              <h3>3 · Ongoing support</h3>
              <p>
                After go-live we stay on: monitoring, new chains and currencies, upgrades and
                changes as the processor&apos;s API and your product evolve.
              </p>
              <ul className="bullet-list">
                <li>
                  <span className="arrow">→</span>Monitoring &amp; alerting
                </li>
                <li>
                  <span className="arrow">→</span>New chains &amp; currencies
                </li>
                <li>
                  <span className="arrow">→</span>API upgrades &amp; changes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* HOW IT WORKS */}
      <Reveal className="section">
        <div className="panel">
          <div className="panel-head">
            <span className="eyebrow">How it works</span>
            <h2>Four steps from kickoff to scale.</h2>
          </div>
          <div className="steps-grid">
            <div className="step">
              <span className="step-num">01</span>
              <h3>Qualify</h3>
              <p>Free call to map your use case, confirm compliance fit and scope the build.</p>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <h3>Integrate</h3>
              <p>
                We build and test the integration into your product, against your stack and
                flows.
              </p>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <h3>Go live</h3>
              <p>
                Production checkout, payment links and webhooks — monitored, with a clean
                handover.
              </p>
            </div>
            <div className="step accent">
              <span className="step-num">04</span>
              <h3>Scale</h3>
              <p>
                Add chains, currencies and flows as you grow — with support that scales too.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* USE CASES */}
      <Reveal className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Who it&apos;s for</span>
            <h2>Built for crypto-native &amp; Web3 commerce.</h2>
          </div>
          <div className="grid grid-usecase">
            <div className="usecase-card">
              <h3>Exchanges &amp; brokers</h3>
              <p>Fiat on/off-ramp, deposits and withdrawals with compliant settlement.</p>
            </div>
            <div className="usecase-card">
              <h3>NFT &amp; GameFi</h3>
              <p>Mint, marketplace and in-game purchases in crypto or fiat, multi-chain.</p>
            </div>
            <div className="usecase-card">
              <h3>dApps &amp; protocols</h3>
              <p>Accept payments from app users without holding the regulatory burden.</p>
            </div>
            <div className="usecase-card">
              <h3>Crypto SaaS</h3>
              <p>Recurring subscriptions billed in stablecoins or fiat, with retries.</p>
            </div>
            <div className="usecase-card">
              <h3>Web3 marketplaces</h3>
              <p>Split payments and payouts to vendors across chains and currencies.</p>
            </div>
            <div className="usecase-card">
              <h3>Token commerce</h3>
              <p>Sell goods, memberships or access for tokens with compliant settlement.</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* STATS STRIP */}
      <Reveal className="section">
        <div className="stats-strip">
          <div>
            <div className="stat-num accent">5–10</div>
            <div className="stat-label">days to live, typical integration</div>
          </div>
          <div>
            <div className="stat-num">5+</div>
            <div className="stat-label">chains supported (BTC, ETH, SOL, SUI, EGLD)</div>
          </div>
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">MiCA-aligned stablecoins (EURXM, USDXM, RONXM)</div>
          </div>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">done for you — no in-house build required</div>
          </div>
        </div>
      </Reveal>

      {/* CASE STUDY TEASER */}
      <Reveal className="section">
        <div className="teaser-grid">
          <div className="teaser-card">
            <div>
              <span className="eyebrow">Case study</span>
              <h3>NFT marketplace, live in 7 days with multi-chain checkout</h3>
              <p>
                A Web3 marketplace needed compliant fiat + crypto checkout across ETH, SOL and
                SUI with EUR settlement. We scoped, integrated and shipped to production in a
                single sprint.
              </p>
            </div>
            <div className="teaser-stats">
              <div className="teaser-stat">
                <div className="big accent">7 days</div>
                <div className="sub">to production</div>
              </div>
              <div className="teaser-stat">
                <div className="big">3 chains</div>
                <div className="sub">at launch</div>
              </div>
            </div>
          </div>
          <div className="quote-card">
            <p className="quote">
              &quot;They handled the entire payment integration — compliance, API, webhooks. We
              focused on the product and went live in a week.&quot;
            </p>
            <div className="author">
              <div className="avatar" />
              <div>
                <div className="name">Founder (placeholder)</div>
                <div className="role">Web3 marketplace</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <CtaSection edition="crypto" />
      <Footer edition="crypto" />
    </div>
  );
}
