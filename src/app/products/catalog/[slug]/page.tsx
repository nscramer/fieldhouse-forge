import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteCta } from "@/components/content/quote-cta";
import { catalogProducts, getCatalogProduct } from "@/content/catalog";

export function generateStaticParams() { return catalogProducts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = getCatalogProduct((await params).slug);
  return product ? { title: `${product.model} ${product.name}`, description: product.summary } : {};
}

export default async function CatalogProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getCatalogProduct((await params).slug);
  if (!product) notFound();
  const productSchema = { "@context": "https://schema.org", "@type": "Product", name: product.name, model: product.model, category: product.family, description: product.summary, manufacturer: { "@type": "Organization", name: "Fieldhouse Forge Equipment Company" } };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <section className="product-detail-hero">
        <div className="product-detail-image"><Image src={product.image} alt={product.alt} fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div>
        <div className="product-detail-copy">
          <Link className="eyebrow" href={`/products/${product.familySlug}`}>{product.family}</Link>
          <span className="model-number">MODEL {product.model}</span><h1>{product.name}</h1>
          <p className="lede">{product.summary}</p><p>{product.description}</p>
          <div className="actions"><Link className="button button-light" href={`/request-quote?category=${product.familySlug}&model=${product.model}`}>Request project pricing</Link></div>
        </div>
      </section>
      <section className="section"><div className="container product-detail-grid">
        <div><span className="eyebrow">Representative product data</span><h2>Project planning information.</h2>
          <table className="spec-table"><tbody>
            {product.specifications.map((spec) => <tr key={spec.label}><th>{spec.label}</th><td>{spec.value}</td></tr>)}
            <tr><th>CSI section</th><td>{product.csiSection}</td></tr><tr><th>Typical lead time</th><td>{product.leadTime}</td></tr><tr><th>Manufacturing location</th><td>{product.madeIn}</td></tr>
          </tbody></table>
        </div>
        <div className="product-side-stack">
          <article className="system-card"><h3>Standard features</h3><ul>{product.features.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="system-card"><h3>Common options</h3><ul>{product.options.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="system-card"><h3>Typical applications</h3><ul>{product.applications.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
      </div></section>
      <section className="section brick-band"><div className="container">
        <span className="eyebrow">Technical library</span><h2>Downloads for early coordination.</h2>
        <div className="download-list">{product.documents.map((document) => (
          <a href={document.href} className="download-row" key={document.href} download><span><strong>{document.label}</strong><small>{product.model} · technical document</small></span><span>{document.type} ↓</span></a>
        ))}</div>
        <p className="muted"><small>Confirm final selections, dimensions, structural requirements, and installation conditions through project-specific submittals.</small></p>
      </div></section>
      <QuoteCta title={`Discuss a ${product.model} project configuration.`} />
    </>
  );
}
