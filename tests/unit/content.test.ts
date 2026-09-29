import { describe, expect, it } from "vitest";
import { products, getProduct } from "@/content/products";
import { projects } from "@/content/projects";
import { catalogProducts } from "@/content/catalog";
import { companyProfile } from "@/content/profile";
describe("content inventory", () => {
  it("has six unique product routes", () => {
    expect(products).toHaveLength(6);
    expect(new Set(products.map(({ slug }) => slug)).size).toBe(6);
    for (const product of products)
      expect(getProduct(product.slug)).toEqual(product);
  });
  it("provides project case studies", () => {
    expect(projects.every(({ facility }) => facility.length > 0)).toBe(true);
  });
  it("provides model-level sourcing data for every catalog product", () => {
    expect(catalogProducts).toHaveLength(8);
    for (const product of catalogProducts) {
      expect(product.model).toMatch(/^[A-Z]{1,2}-\d{1,3}$/);
      expect(product.csiSection).toMatch(/^11 /);
      expect(product.specifications.length).toBeGreaterThanOrEqual(4);
      expect(product.documents.length).toBeGreaterThan(0);
    }
  });
  it("publishes a complete sourcing profile", () => {
    expect(companyProfile.classificationCodes.map(({ code }) => code)).toContain("339920");
    expect(companyProfile.serviceTerritory).toContain("Indiana");
    expect(companyProfile.procurement.length).toBeGreaterThanOrEqual(2);
  });
});
