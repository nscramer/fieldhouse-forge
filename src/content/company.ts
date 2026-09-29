export const company = {
  name: "Fieldhouse Forge",
  location: "Hickory, Indiana",
  descriptor: "Athletic Equipment & Systems",
  disclosure: "Fieldhouse Forge is a fictional company created for demonstration purposes.",
} as const;

export const navigation = [
  { href: "/products", label: "Products" },
  { href: "/products/catalog", label: "Catalog" },
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/company-profile", label: "Company" },
] as const;
