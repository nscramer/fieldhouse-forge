import type { Metadata } from "next";
import { ProductGrid } from "@/components/content/product-grid";
import { QuoteCta } from "@/components/content/quote-cta";
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
          <ProductGrid />
        </div>
      </section>
      <QuoteCta title="Planning across more than one system?" />
    </>
  );
}
