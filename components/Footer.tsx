import Link from "next/link";
import { Logo } from "./Logo";
import { EDITIONS, type Edition } from "@/lib/editions";

export function Footer({ edition }: { edition: Edition }) {
  const cfg = EDITIONS[edition];
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Logo size={26} fontSize={17} />
            </Link>
            <p>{cfg.footerBlurb}</p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <div className="footer-links">
              {cfg.footerLinks.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Get started</h4>
            <div className="footer-links">
              <Link href={cfg.bookHref}>Book a free integration call</Link>
              <a href="mailto:hello@integispay.com">hello@integispay.com</a>
            </div>
            <div className="footer-tags">
              <span className="footer-tag">MiCA-aligned</span>
              <span className="footer-tag">EU-regulated</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="disclaimer">
            IntegisPay is an independent integration partner. We are not affiliated with,
            endorsed by, or speaking on behalf of xMoney or any payment processor. Nothing on
            this site constitutes financial, legal, regulatory, or tax advice. Always confirm
            licensing and compliance requirements with qualified counsel.
          </p>
          <p className="copy">© 2026 IntegisPay</p>
        </div>
      </div>
    </footer>
  );
}
