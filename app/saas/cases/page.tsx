import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "SaaS Case Studies — IntegisPay",
  description:
    "A sample of done-for-you billing integrations across SaaS and software companies. Names withheld; metrics representative.",
};

type CaseStudy = {
  category: string;
  days: string;
  title: string;
  body: string;
  stat1: string;
  stat1Label: string;
  stat2: string;
  stat2Label: string;
};

const CASES: CaseStudy[] = [
  {
    category: "B2B SaaS",
    days: "8 days",
    title: "Smart dunning cut involuntary churn",
    body: "Failed card payments were silently cancelling customers. We added retries, dunning and a crypto/stablecoin fallback — recovering revenue that used to vanish.",
    stat1: "+11%",
    stat1Label: "revenue recovered",
    stat2: "auto",
    stat2Label: "retry & dunning",
  },
  {
    category: "Dev Tool",
    days: "9 days",
    title: "Usage-based metered billing",
    body: "An API platform needed to bill per request with accurate aggregation and invoicing. We integrated metering and usage-based invoices without an in-house billing engine.",
    stat1: "metered",
    stat1Label: "per-request billing",
    stat2: "0",
    stat2Label: "billing engine built",
  },
  {
    category: "Global SaaS",
    days: "7 days",
    title: "Multi-currency + stablecoin checkout",
    body: "Cross-border customers wanted to pay in their currency or stablecoins. We added multi-currency charging with settlement to EURXM, removing FX friction.",
    stat1: "EURXM",
    stat1Label: "settlement",
    stat2: "+14%",
    stat2Label: "intl. conversion",
  },
  {
    category: "High-ticket SaaS",
    days: "10 days",
    title: "Annual contracts with crypto option",
    body: "An enterprise platform offered high-value annual plans and wanted a crypto payment option for certain customers. We wired invoicing, approvals and settlement.",
    stat1: "annual",
    stat1Label: "high-ticket plans",
    stat2: "card+crypto",
    stat2Label: "payment options",
  },
  {
    category: "SaaS Marketplace",
    days: "9 days",
    title: "Subscriptions + split vendor payouts",
    body: "A platform billed customers on subscriptions and split payouts to third-party vendors. We handled recurring billing plus reconciliation finance could trust.",
    stat1: "split",
    stat1Label: "vendor payouts",
    stat2: "recurring",
    stat2Label: "billing",
  },
  {
    category: "Early-stage SaaS",
    days: "5 days",
    title: "Launch-ready subscriptions in a week",
    body: "A seed-stage startup needed subscriptions, trials and a checkout fast. We shipped a launch-ready billing layer with card + crypto in under a week.",
    stat1: "<1wk",
    stat1Label: "to live",
    stat2: "trials",
    stat2Label: "+ proration",
  },
];

export default function SaasCasesPage() {
  return (
    <div className="ed-saas">
      <Header edition="saas" active="cases" />

      {/* HERO */}
      <section className="page-hero" style={{ padding: "72px 24px 48px" }}>
        <div className="page-hero-inner">
          <span className="eyebrow">Selected work</span>
          <h1>Billing shipped. Revenue recovered.</h1>
          <p className="page-hero-sub no-btn wide">
            A sample of done-for-you billing integrations across SaaS and software companies.
            Company names are withheld; metrics are representative of typical engagements.
          </p>
        </div>
      </section>

      {/* CASE GRID */}
      <Reveal className="section tight-top">
        <div className="case-grid">
          {CASES.map((c) => (
            <div className="case-card" key={c.category}>
              <div className="case-top">
                <span className="case-chip">{c.category}</span>
                <span className="case-days">{c.days}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="big accent">{c.stat1}</div>
                  <div className="sub">{c.stat1Label}</div>
                </div>
                <div className="case-stat">
                  <div className="big">{c.stat2}</div>
                  <div className="sub">{c.stat2Label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* DISCLAIMER STRIP */}
      <Reveal className="section tight-top">
        <div className="disclaimer-strip">
          <p>
            Case studies use anonymized, representative figures for illustration. Specific
            results depend on your product, volume and jurisdiction. IntegisPay is an
            independent integration partner and is not affiliated with any payment processor.
          </p>
        </div>
      </Reveal>

      <CtaSection edition="saas" />
      <Footer edition="saas" />
    </div>
  );
}
