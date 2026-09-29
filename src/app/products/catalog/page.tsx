import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { catalogProducts } from "@/content/catalog";

export const metadata: Metadata = {
  title: "Equipment Catalog",
  description: "Fictional model-level athletic equipment catalog for specification and sourcing demonstrations.",
};

export default function CatalogPage() {
  return (
    <>
      <header className="page-hero"><div className="container">
        <span className="eyebrow">Model-level equipment</span><h1>Equipment Catalog</h1>
        <p className="lede">Representative product records with model numbers, applications, specification sections, lead times, and demonstration documents.</p>
      </div></header>
      <section className="section"><div className="container catalog-grid">
        {catalogProducts.map((product) => (
          <article className="catalog-card" key={product.slug}>
            <Link className="catalog-card-image" href={`/products/catalog/${product.slug}`}>
              <Image src={product.image} alt={product.alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
            </Link>
            <div className="catalog-card-copy">
              <span className="model-number">MODEL {product.model}</span>
              <h2><Link href={`/products/catalog/${product.slug}`}>{product.name}</Link></h2>
              <p>{product.summary}</p>
              <dl className="catalog-meta">
                <div><dt>Category</dt><dd>{product.family}</dd></div>
                <div><dt>CSI</dt><dd>{product.csiSection}</dd></div>
                <div><dt>Lead time</dt><dd>{product.leadTime}</dd></div>
              </dl>
              <Link className="text-link" href={`/products/catalog/${product.slug}`}>View product data →</Link>
            </div>
          </article>
        ))}
      </div></section>
    </>
  );
}

