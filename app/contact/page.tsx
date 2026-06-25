import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About & Contact — IntegisPay",
  description:
    "A payments-integration studio for crypto-native teams. Book a free integration call to map your use case and scope a go-live plan.",
};

export default function ContactPage() {
  return (
    <>
      <Header active="about" />

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-inner">
          <span className="eyebrow">About IntegisPay</span>
          <h1>A payments-integration studio for crypto-native teams.</h1>
          <p>
            We&apos;re engineers who specialize in one thing: connecting crypto-native and Web3
            businesses to a MiCA-compliant, EU-regulated payment stack — and doing the
            integration for you. We&apos;ve shipped multi-chain checkout, stablecoin settlement,
            recurring billing and fiat off-ramps into exchanges, marketplaces, dApps and SaaS.
            We move fast because this is all we do.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-left">
            <div id="book" className="book-card">
              <h2>Book a free integration call</h2>
              <p>
                A 30-minute call to map your use case, confirm compliance fit and scope a
                go-live plan. No commitment, no sales pressure — just a clear picture of what
                your integration looks like.
              </p>
              <Link href="#contact-form" className="btn btn-primary">
                Request a call
              </Link>
            </div>

            <div className="expect-card">
              <h3>What to expect</h3>
              <div className="expect-list">
                <div className="expect-row">
                  <span className="num">01</span>
                  <div className="text">
                    <strong>Reply within 1 business day</strong> with next steps.
                  </div>
                </div>
                <div className="expect-row">
                  <span className="num">02</span>
                  <div className="text">
                    <strong>Compliance &amp; fit check</strong> for your model and region.
                  </div>
                </div>
                <div className="expect-row">
                  <span className="num">03</span>
                  <div className="text">
                    <strong>A scoped go-live plan</strong> with timeline and what&apos;s
                    included.
                  </div>
                </div>
              </div>
              <div className="expect-email">
                <a href="mailto:hello@integispay.com">hello@integispay.com</a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
