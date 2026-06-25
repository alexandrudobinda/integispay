import Link from "next/link";

export function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-band">
        <div className="cta-texture" />
        <div className="cta-inner">
          <span className="eyebrow">Ready when you are</span>
          <h2>
            Accept crypto + fiat the compliant way — integrated for you in days, not months.
          </h2>
          <p>
            Book a free integration call. We&apos;ll map your use case, confirm compliance fit,
            and scope a go-live plan — no commitment.
          </p>
          <div className="btn-row center">
            <Link href="/contact#book" className="btn btn-primary">
              Book a free integration call
            </Link>
            <Link href="/crypto-integrations" className="btn btn-ghost">
              See what&apos;s included
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
