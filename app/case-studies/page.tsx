import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies — IntegisPay",
  description:
    "A sample of done-for-you payment integrations across crypto-native and Web3 businesses. Names withheld; metrics representative.",
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
    category: "NFT Marketplace",
    days: "7 days",
    title: "Multi-chain checkout with EUR settlement",
    body: "Needed crypto + fiat checkout across ETH, SOL and SUI with stable settlement. We scoped, integrated and shipped to production in one sprint.",
    stat1: "3",
    stat1Label: "chains at launch",
    stat2: "EURXM",
    stat2Label: "settlement",
  },
  {
    category: "Exchange",
    days: "10 days",
    title: "Compliant fiat on/off-ramp",
    body: "A small exchange needed regulated deposits and withdrawals without standing up its own licensing. We onboarded them to the processor and wired the full ramp.",
    stat1: "EUR·USD",
    stat1Label: "payouts",
    stat2: "0",
    stat2Label: "licenses to hold",
  },
  {
    category: "GameFi",
    days: "8 days",
    title: "In-game purchases, crypto or card",
    body: "A GameFi title wanted players to buy items in crypto or fiat without leaving the game. We embedded checkout and handled the multi-chain webhooks.",
    stat1: "+19%",
    stat1Label: "checkout completion",
    stat2: "embedded",
    stat2Label: "in-app flow",
  },
  {
    category: "Crypto SaaS",
    days: "6 days",
    title: "Stablecoin subscriptions with retries",
    body: "Recurring billing in stablecoins with dunning and retry logic, so failed payments recover automatically instead of churning the customer.",
    stat1: "USDXM",
    stat1Label: "billing currency",
    stat2: "auto",
    stat2Label: "retry & dunning",
  },
  {
    category: "Web3 Marketplace",
    days: "9 days",
    title: "Split payouts to vendors",
    body: "Marketplace needed to collect in crypto and split payouts to vendors across chains and currencies, with clean reconciliation for finance.",
    stat1: "split",
    stat1Label: "payouts",
    stat2: "4 chains",
    stat2Label: "supported",
  },
  {
    category: "Token Commerce",
    days: "5 days",
    title: "Payment links for memberships",
    body: "A token project sold memberships and access via shareable payment links — no heavy integration, live in under a week with compliant settlement.",
    stat1: "links",
    stat1Label: "no-code checkout",
    stat2: "<1wk",
    stat2Label: "to live",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header active="cases" />

      {/* HERO */}
      <section className="page-hero" style={{ padding: "72px 24px 48px" }}>
        <div className="page-hero-inner">
          <span className="eyebrow">Selected work</span>
          <h1>Integrations shipped. Outcomes measured.</h1>
          <p className="page-hero-sub no-btn">
            A sample of done-for-you payment integrations across crypto-native and Web3
            businesses. Company names are withheld; metrics are representative of typical
            engagements.
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
                  <div className="big teal">{c.stat1}</div>
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

      <CtaSection />
      <Footer />
    </>
  );
}
