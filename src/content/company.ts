export const company = {
  name: "Fieldhouse Forge",
  location: "Hickory, Indiana",
  descriptor: "Athletic Equipment & Systems",
  disclosure:
    "Fieldhouse Forge is a fictional demonstration company. No products or services are offered for sale.",
  shortDisclosure: "Fictional demonstration company",
} as const;

export const navigation = [
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
] as const;
