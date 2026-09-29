export type ProductFamily = {
  slug: string;
  name: string;
  number: string;
  eyebrow: string;
  summary: string;
  description: string;
  applications: string[];
  systems: { name: string; detail: string }[];
  image: string;
  alt: string;
  featured?: boolean;
};

export const products: ProductFamily[] = [
  {
    slug: "gymnasium-systems",
    name: "Gymnasium Systems",
    number: "01",
    eyebrow: "Flagship category",
    summary:
      "Integrated court equipment for daily instruction, competition, and flexible facility use.",
    description:
      "Plan the equipment above, around, and across the court as one coordinated package—from overhead backstops to divider curtains and volleyball systems.",
    applications: [
      "School competition gyms",
      "Divisible practice courts",
      "Municipal fieldhouses",
      "Renovation and replacement",
    ],
    systems: [
      {
        name: "Ceiling basketball systems",
        detail:
          "Forward-fold and side-fold concepts coordinated to structure and court use.",
      },
      {
        name: "Divider curtains",
        detail:
          "Space-management systems for concurrent practice and programming.",
      },
      {
        name: "Volleyball systems",
        detail:
          "Floor sleeves, posts, padding, and storage planned as a complete set.",
      },
      {
        name: "Equipment storage",
        detail: "Wall and room layouts that keep changeovers orderly.",
      },
    ],
    image: "/images/products/gymnasium-systems.webp",
    alt: "Unbranded gymnasium with basketball backstops, divider curtain, volleyball net, and bleachers",
    featured: true,
  },
  {
    slug: "strength-conditioning",
    name: "Strength & Conditioning",
    number: "02",
    eyebrow: "Flagship category",
    summary:
      "Institutional training rooms built around supervision, circulation, storage, and long seasons.",
    description:
      "Shape a durable training environment with racks, platforms, storage, and flooring organized around the way coaches and athletes move through the room.",
    applications: [
      "Fieldhouse weight rooms",
      "School performance centers",
      "Team training rooms",
      "Multi-program facilities",
    ],
    systems: [
      {
        name: "Racks and stations",
        detail:
          "Configurable training footprints for supervised group sessions.",
      },
      {
        name: "Platforms",
        detail:
          "Integrated lifting zones with durable wood and rubber surfaces.",
      },
      {
        name: "Storage",
        detail: "Dedicated homes for plates, bars, dumbbells, and accessories.",
      },
      {
        name: "Room planning",
        detail:
          "Sightlines and circulation considered before equipment placement.",
      },
    ],
    image: "/images/products/strength-conditioning.webp",
    alt: "Unbranded institutional weight room with navy racks, platforms, and organized storage",
    featured: true,
  },
  {
    slug: "seating",
    name: "Seating",
    number: "03",
    eyebrow: "Audience systems",
    summary:
      "Retractable and fixed seating concepts that support capacity, access, and changeover.",
    description:
      "Balance sightlines, circulation, storage depth, and room flexibility with seating systems suited to institutional facilities.",
    applications: [
      "Competition gyms",
      "Auxiliary courts",
      "Community centers",
      "Assembly spaces",
    ],
    systems: [
      {
        name: "Retractable bleachers",
        detail: "Telescopic systems designed around room use and access paths.",
      },
      {
        name: "Team seating",
        detail:
          "Courtside benches and player areas coordinated with scorer zones.",
      },
      {
        name: "Guardrails and aisles",
        detail: "Planning concepts for clear circulation and orderly entry.",
      },
    ],
    image: "/images/products/seating.webp",
    alt: "Partly extended wood and steel retractable bleachers in an empty gym",
  },
  {
    slug: "padding-surfaces",
    name: "Padding & Surfaces",
    number: "04",
    eyebrow: "Finish systems",
    summary:
      "Wall padding, protective finishes, and athletic surfaces coordinated into the room palette.",
    description:
      "Bring together impact padding, court-edge protection, and durable finish selections without treating them as afterthoughts.",
    applications: [
      "Court perimeters",
      "Stage fronts",
      "Training rooms",
      "High-contact circulation",
    ],
    systems: [
      {
        name: "Wall padding",
        detail: "Panel concepts for court edges and exposed wall conditions.",
      },
      {
        name: "Column protection",
        detail: "Tailored protective zones for structural elements near play.",
      },
      {
        name: "Training surfaces",
        detail: "Rubber and platform zones composed for institutional use.",
      },
    ],
    image: "/images/products/padding-surfaces.webp",
    alt: "Brick-red wall padding meeting a maple gym floor with navy and cream court lines",
  },
  {
    slug: "scoreboards-controls",
    name: "Scoreboards & Controls",
    number: "05",
    eyebrow: "Game-day systems",
    summary:
      "Display and control concepts that make game information clear without dominating the architecture.",
    description:
      "Coordinate display locations, operator positions, sightlines, and supporting control equipment early in the facility plan.",
    applications: [
      "Competition courts",
      "Multi-court facilities",
      "Municipal arenas",
      "Renovation packages",
    ],
    systems: [
      {
        name: "Display systems",
        detail:
          "Indoor scoreboard concepts sized to viewing distance and room volume.",
      },
      {
        name: "Control stations",
        detail:
          "Operator positions and equipment zones planned around game-day flow.",
      },
      {
        name: "Shot clocks and indicators",
        detail: "Supporting display concepts coordinated across the court.",
      },
    ],
    image: "/images/products/scoreboards-controls.webp",
    alt: "Arena scoreboard and courtside control console in an empty gym",
  },
  {
    slug: "outdoor-equipment",
    name: "Outdoor Equipment",
    number: "06",
    eyebrow: "Field systems",
    summary:
      "Goals, benches, shelters, and field-edge equipment for public athletic sites.",
    description:
      "Carry the same planning discipline outdoors with coordinated equipment packages for fields, sidelines, and shared recreation sites.",
    applications: [
      "School athletic fields",
      "Community parks",
      "Municipal complexes",
      "Multi-sport sites",
    ],
    systems: [
      {
        name: "Soccer goals",
        detail:
          "Institutional goal concepts for shared fields and program use.",
      },
      {
        name: "Benches and shelters",
        detail:
          "Sideline systems arranged for teams, officials, and circulation.",
      },
      {
        name: "Barrier netting",
        detail:
          "Perimeter concepts for field edges and adjacent activity zones.",
      },
    ],
    image: "/images/products/outdoor-equipment.webp",
    alt: "Empty community soccer field with goals, benches, shelters, and barrier netting",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
