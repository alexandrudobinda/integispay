import Link from "next/link";
import { EDITIONS, type Edition } from "@/lib/editions";

export function CtaSection({ edition }: { edition: Edition }) {
  const cfg = EDITIONS[edition];
  const heading =
    edition === "saas"
      ? "Recurring billing in crypto + fiat — integrated for your SaaS in days, not months."
      : "Accept crypto + fiat the compliant way — integrated for you in days, not months.";

  return (
    <section className="cta-section">
      <div className="cta-band">
        <div className="cta-texture" />
        <div className="cta-inner">
          <span className="eyebrow">Ready when you are</span>
          <h2>{heading}</h2>
          <p>
            Book a free integration call. We&apos;ll map your use case, confirm compliance fit,
            and scope a go-live plan — no commitment.
          </p>
          <div className="btn-row center">
            <Link href={cfg.bookHref} className="btn btn-primary">
              Book a free integration call
            </Link>
            <Link href={cfg.integrationsHref} className="btn btn-ghost">
              See what&apos;s included
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
