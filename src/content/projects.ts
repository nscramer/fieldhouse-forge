export type Project = {
  slug: string;
  name: string;
  facility: string;
  image: string;
  alt: string;
  situation: string;
  scope: string;
  systems: string[];
  designNotes: string;
};

export const projects: Project[] = [
  {
    slug: "hickory-central-fieldhouse",
    name: "Hickory Central Fieldhouse",
    facility: "School renovation",
    image: "/images/projects/hickory-central.webp",
    alt: "Renovated brick fieldhouse with basketball systems and retractable seating",
    situation:
      "A well-used brick fieldhouse needed a clearer, more flexible equipment plan while keeping its familiar sense of place.",
    scope:
      "A coordinated interior concept covering the court, overhead systems, seating, and perimeter protection.",
    systems: [
      "Ceiling backstops",
      "Retractable seating",
      "Wall padding",
      "Volleyball systems",
    ],
    designNotes:
      "Warm maple and brick remain visually primary while navy equipment creates one quiet, consistent layer.",
  },
  {
    slug: "mill-county-recreation-center",
    name: "Mill County Recreation Center",
    facility: "Municipal recreation facility",
    image: "/images/projects/mill-county-rec.webp",
    alt: "Two-court recreation center with divider curtain and compact bleachers",
    situation:
      "A community-use facility needed to shift between open play, divided programming, and modest spectator events.",
    scope:
      "A flexible two-court concept with coordinated division, seating, and protective systems.",
    systems: [
      "Divider curtain",
      "Basketball systems",
      "Compact bleachers",
      "Wall protection",
    ],
    designNotes:
      "Clear circulation around both courts keeps the equipment package from competing with everyday community use.",
  },
  {
    slug: "north-foundry-training-center",
    name: "North Foundry Training Center",
    facility: "Athletic performance facility",
    image: "/images/projects/north-foundry-training.webp",
    alt: "Strength room with navy racks, wood platforms, storage, and a short turf lane",
    situation:
      "A fieldhouse addition called for one room that could serve several supervised teams without feeling improvised.",
    scope:
      "A zoned strength and conditioning concept organized around coaching sightlines and efficient storage.",
    systems: [
      "Power racks",
      "Lifting platforms",
      "Integrated storage",
      "Turf training lane",
    ],
    designNotes:
      "The open center aisle creates a readable room while equipment stays consolidated at the perimeter.",
  },
];
