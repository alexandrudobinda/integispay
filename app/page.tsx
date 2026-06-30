import Link from "next/link";
import { Chevrons, Lines } from "@/components/Icons";

export default function WelcomePage() {
  return (
    <div className="welcome">
      {/* ambient */}
      <div className="welcome-glow teal" />
      <div className="welcome-glow coral" />
      <div className="welcome-texture" />

      {/* minimal brand bar — logo links to Welcome */}
      <header className="welcome-bar">
        <Link href="/" className="logo">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="30" height="30" rx="8" fill="#FFFFFF" stroke="rgba(124,108,240,0.4)" />
            <path
              d="M9 21 L16 7 L23 21"
              stroke="#12B39A"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 16 L20 16" stroke="#E8623C" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span className="welcome-logo-word">
            Integis<span style={{ color: "#12B39A" }}>P</span>
            <span style={{ color: "#E8623C" }}>ay</span>
          </span>
        </Link>
      </header>

      {/* selector */}
      <main className="welcome-main">
        <div className="welcome-head">
          <div className="welcome-badge">
            <span className="dot7" />
            <span>MiCA-compliant · EU-regulated processor · done for you</span>
          </div>
          <h1>Global Merchant Account Solutions</h1>
          <p>
            From startups to enterprise merchants, we help businesses secure the right acquiring
            partner for their industry, risk profile, and growth ambitions. Card payments,
            digital wallets, subscriptions, marketplaces, and alternative payment methods—all
            through a single trusted partner.
          </p>
        </div>

        <div className="welcome-cards">
          {/* CRYPTO (order:2 / right) */}
          <Link href="/crypto" className="welcome-card crypto">
            <div className="welcome-card-top">
              <div className="welcome-icon">
                <Chevrons size={24} color="#12B39A" />
              </div>
              <span className="welcome-edition">Edition A</span>
            </div>
            <h2>Crypto &amp; Web3</h2>
            <p>
              For exchanges, NFT &amp; GameFi, dApps and Web3 marketplaces. Multi-chain
              acceptance, stablecoin settlement and a compliant fiat off-ramp — integrated for
              you.
            </p>
            <div className="welcome-chips">
              <span className="welcome-chip">Multi-chain</span>
              <span className="welcome-chip">Fiat off-ramp</span>
              <span className="welcome-chip">BTC · ETH · SOL · SUI</span>
            </div>
            <span className="welcome-enter">
              Enter Crypto &amp; Web3 <span className="arrow">→</span>
            </span>
          </Link>

          {/* SAAS (order:1 / left) */}
          <Link href="/saas" className="welcome-card saas">
            <div className="welcome-card-top">
              <div className="welcome-icon">
                <Lines size={24} color="#E8623C" />
              </div>
              <span className="welcome-edition">Edition B</span>
            </div>
            <h2>Software &amp; SaaS</h2>
            <p>
              For SaaS, dev tools and subscription platforms. Recurring billing, crypto + fiat
              checkout, dunning and stablecoin settlement — built into your product so failed
              payments stop quietly churning customers.
            </p>
            <div className="welcome-chips">
              <span className="welcome-chip">Recurring billing</span>
              <span className="welcome-chip">Dunning</span>
              <span className="welcome-chip">card · crypto · stablecoin</span>
            </div>
            <span className="welcome-enter">
              Enter Software &amp; SaaS <span className="arrow">→</span>
            </span>
          </Link>
        </div>

        <p className="welcome-help">
          Not sure which fits? Choose a path above to get started — you can switch editions any
          time from the header.
        </p>
      </main>

      {/* footer disclaimer */}
      <footer className="welcome-footer">
        <div className="welcome-footer-inner">
          <p>
            IntegisPay is an independent integration partner — not affiliated with or speaking
            on behalf of any payment processor. Nothing here is financial, legal or regulatory
            advice.
          </p>
          <p>© 2026 IntegisPay</p>
        </div>
      </footer>
    </div>
  );
}
