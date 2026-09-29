import type { MetadataRoute } from "next";
import { products } from "@/content/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fieldhouse-forge.vercel.app";
  return [
    "",
    "/products",
    "/projects",
    "/resources",
    "/about",
    "/request-quote",
    ...products.map(({ slug }) => `/products/${slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
