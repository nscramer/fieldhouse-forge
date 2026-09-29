import Image from "next/image";
import Link from "next/link";
export function QuoteCta({
  title = "Bring the whole facility into one conversation.",
}: {
  title?: string;
}) {
  return (
    <section className="quote-band">
      <Image src="/images/shared/quote-banner.webp" alt="" fill sizes="100vw" />
      <div className="container quote-band-inner">
        <span className="eyebrow">Start with the project</span>
        <h2>{title}</h2>
        <p className="lede">
          Tell us what the room needs to do, which systems matter, and where
          the project stands today.
        </p>
        <Link className="button button-light" href="/request-quote">
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
