import type { Metadata } from "next";
import { ProductGrid } from "@/components/content/product-grid";
import { QuoteCta } from "@/components/content/quote-cta";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Athletic Equipment",
  description:
    "Explore six fictional Fieldhouse Forge athletic equipment families for institutional facilities.",
};
export default function ProductsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Complete facility packages</span>
          <h1>Equipment</h1>
          <p className="lede">
            Plan the court, training room, stands, protective finishes,
            controls, and field edge as connected parts of one facility.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="section-heading-row">
            <div><span className="eyebrow">Product families</span><h2>Start with the system.</h2></div>
            <Link className="button" href="/products/catalog">Browse model catalog</Link>
          </div>
          <ProductGrid />
        </div>
      </section>
      <QuoteCta title="Planning across more than one system?" />
    </>
  );
}
