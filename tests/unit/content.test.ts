import { describe, expect, it } from "vitest";
import { products, getProduct } from "@/content/products";
import { projects } from "@/content/projects";
describe("fictional content inventory", () => {
  it("has six unique product routes", () => {
    expect(products).toHaveLength(6);
    expect(new Set(products.map(({ slug }) => slug)).size).toBe(6);
    for (const product of products)
      expect(getProduct(product.slug)).toEqual(product);
  });
  it("marks every project fictional", () => {
    expect(projects.every(({ fictional }) => fictional)).toBe(true);
  });
});
