import type { MetadataRoute } from "next";
import { catalogProducts } from "@/content/catalog";
import { products } from "@/content/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fieldhouse-forge.vercel.app";
  return [
    "",
    "/products",
    "/products/catalog",
    "/projects",
    "/resources",
    "/about",
    "/company-profile",
    "/request-quote",
    ...products.map(({ slug }) => `/products/${slug}`),
    ...catalogProducts.map(({ slug }) => `/products/catalog/${slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
