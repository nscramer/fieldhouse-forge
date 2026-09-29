import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("home leads to a contextual quote", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Built Where Teams Are Made." }),
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Strength & Conditioning" })
    .first()
    .click();
  await page
    .locator('a[href="/request-quote?category=strength-conditioning"]')
    .click();
  await expect(page.getByLabel("Strength & Conditioning")).toBeChecked();
});
test("quote submission stays local", async ({ page }) => {
  const requests: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET") requests.push(request.url());
  });
  await page.goto("/request-quote");
  await page.getByLabel("Contact name").fill("Nora Ellis");
  await page.getByLabel("Work email").fill("nora@example.com");
  await page.getByLabel("Organization").fill("Demo Studio");
  await page
    .getByLabel("Your role")
    .selectOption({ label: "Architect or specifier" });
  await page
    .getByLabel("Project type")
    .selectOption({ label: "New construction" });
  await page.getByLabel("Project location").fill("Hickory, Indiana");
  await page.getByLabel("Gymnasium Systems").check();
  await page
    .getByLabel("Timeline")
    .selectOption({ label: "Exploring options" });
  await page.getByRole("button", { name: /complete demo/i }).click();
  await expect(
    page.getByRole("heading", { name: /stayed right here/i }),
  ).toBeVisible();
  expect(requests).toEqual([]);
});
test("representative pages have no serious axe violations", async ({
  page,
}) => {
  for (const path of [
    "/",
    "/products/gymnasium-systems",
    "/projects",
    "/resources",
    "/about",
    "/company-profile",
    "/products/catalog/forgefold-920-backstop",
    "/request-quote",
  ]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    expect(
      results.violations.filter(
        ({ impact }) => impact === "serious" || impact === "critical",
      ),
      path,
    ).toEqual([]);
  }
});
test("catalog exposes model-level sourcing details and downloads", async ({ page }) => {
  await page.goto("/products/catalog/forgefold-920-backstop");
  await expect(page.getByRole("heading", { name: "ForgeFold 920 Forward-Fold Backstop" })).toBeVisible();
  await expect(page.getByText("MODEL FF-920")).toBeVisible();
  await expect(page.getByText("11 66 23 - Gymnasium Equipment")).toBeVisible();
  await expect(page.getByRole("link", { name: /Product data sheet/ })).toHaveAttribute("href", "/downloads/ff-920-product-data.pdf");
});
test("company profile exposes extraction-relevant public-sector facts", async ({ page }) => {
  await page.goto("/company-profile");
  await expect(page.getByRole("heading", { name: "Fieldhouse Forge Equipment Company" })).toBeVisible();
  await expect(page.getByText("NAICS 339920")).toBeVisible();
  await expect(page.getByText("Nationwide through fictional qualified dealers")).toBeVisible();
});
