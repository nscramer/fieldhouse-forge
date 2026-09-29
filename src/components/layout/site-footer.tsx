import Link from "next/link";
import { company, navigation } from "@/content/company";
import { products } from "@/content/products";
export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="wordmark">
              Fieldhouse Forge<small>Hickory, Indiana</small>
            </div>
            <p style={{ marginTop: "1rem", maxWidth: "30rem" }}>
              A concept manufacturer for the courts, weight rooms, seating, and
              fields that bring public athletic facilities to life.
            </p>
          </div>
          <div>
            <strong>Company</strong>
            <ul className="meta-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Equipment</strong>
            <ul className="meta-list">
              {products.slice(0, 4).map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer-disclosure">
          {company.disclosure} All institutions, projects, product names, and
          claims shown on this site are original fictional content created for
          demonstration purposes.
        </p>
      </div>
    </footer>
  );
}
