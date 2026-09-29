import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteCta } from "@/components/content/quote-cta";
import { getProduct, products } from "@/content/products";
import { resources, resourceDisclaimer } from "@/content/resources";
export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: product.summary } : {};
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const resource = resources[Number(product.number) % resources.length];
  return (
    <>
      <section className="category-hero">
        <div className="category-copy">
          <span className="eyebrow">{product.eyebrow}</span>
          <h1>{product.name}</h1>
          <p className="lede">{product.description}</p>
          <div className="actions">
            <Link
              className="button button-light"
              href={`/request-quote?category=${product.slug}`}
            >
              Request a Quote
            </Link>
          </div>
        </div>
        <div className="category-image">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
      </section>
      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Where it works</span>
            <h2>Made around the room.</h2>
            <ul className="meta-list">
              {product.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Representative systems</span>
            <div className="grid-2">
              {product.systems.map((system) => (
                <article className="system-card" key={system.name}>
                  <h3>{system.name}</h3>
                  <p>{system.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section brick-band">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Finish direction</span>
            <h2>One visual language.</h2>
            <p className="lede">
              Foundry Navy, Banner Brick, Maple Gold, and Canvas Cream form a
              fictional palette for early design conversations.
            </p>
          </div>
          <div className="notice">
            <strong>Demonstration content</strong>
            <p>
              Colors, configurations, and descriptions shown here are fictional
              design material—not specifications, product data, or construction
              guidance.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Planning resource</span>
          <article className="resource-card">
            <span className="demo-tag">{resource.category}</span>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <p className="muted">
              <strong>{resourceDisclaimer}</strong>
            </p>
          </article>
        </div>
      </section>
      <QuoteCta title={`Plan your ${product.name.toLowerCase()} package.`} />
    </>
  );
}
