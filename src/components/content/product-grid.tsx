import Image from "next/image";
import Link from "next/link";
import { products } from "@/content/products";
export function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.slug}>
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="product-card-content">
            <span className="card-number">{product.number}</span>
            <h3>
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
            <p>{product.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
