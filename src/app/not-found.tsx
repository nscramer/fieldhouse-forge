import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Out of bounds</span>
        <h1>Page not found.</h1>
        <p className="lede">
          The page you requested is not part of this fictional equipment
          catalog.
        </p>
        <Link className="button" href="/">
          Return Home
        </Link>
      </div>
    </section>
  );
}
