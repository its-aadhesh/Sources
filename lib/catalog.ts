export type Audience = "Men" | "Women" | "Children" | "Shades" | "Sportswear";
export type ProductType = "Eyeglasses" | "Sunglasses" | "Sports";
export type Collection = "Ultem" | "Unbreakable" | "Fiber" | "Metal" | "Coolers";
export type Role = "customer" | "business";

export type Product = {
  id: string;
  slug: string;
  name: string;
  type: ProductType;
  audience: Audience[];
  collection: Collection;
  material: string;
  colorName: string;
  image: string;
  /** Retail unit price in integer paise (tax-inclusive). */
  pricePaise: number;
  stock: number;
  limit: number;
  dimensions: string;
  description: string;
  tag?: string;
  rating?: number; // 0-5
  reviews?: number;
  featured?: boolean;
};

export const products: Product[] = [
  /* ————— MEN · EYEGLASSES ————— */
  {
    id: "SO-001",
    slug: "deep-navy",
    name: "Deep Navy",
    type: "Eyeglasses",
    audience: ["Men"],
    collection: "Ultem",
    material: "Premium ULTEM",
    colorName: "Deep navy",
    image: "/images/navy-hero.png",
    pricePaise: 499000,
    stock: 44,
    limit: 5,
    dimensions: "51 · 20 · 145 mm",
    description:
      "A rich navy frame in premium simulated ULTEM. Dark enough to anchor, tough enough for every day.",
    tag: "Signature",
    rating: 4.8,
    reviews: 54,
    featured: true
  },
  {
    id: "SO-002",
    slug: "matte-black-rectangular",
    name: "Matte Black Rectangular",
    type: "Eyeglasses",
    audience: ["Men"],
    collection: "Ultem",
    material: "Premium ULTEM",
    colorName: "Matte black",
    image: "/images/matte-black-rect.png",
    pricePaise: 349000,
    stock: 60,
    limit: 5,
    dimensions: "52 · 19 · 145 mm",
    description:
      "A clean rectangular profile in a flat matte finish. Precise, understated, and easy to wear every day.",
    rating: 4.5,
    reviews: 32
  },
  {
    id: "SO-003",
    slug: "olive-green-acetate",
    name: "Olive Green Acetate",
    type: "Eyeglasses",
    audience: ["Men"],
    collection: "Fiber",
    material: "Acetate",
    colorName: "Olive green",
    image: "/images/olive-green.png",
    pricePaise: 329000,
    stock: 40,
    limit: 5,
    dimensions: "51 · 19 · 143 mm",
    description:
      "A muted olive acetate frame with a slightly rounded rectangle silhouette. Quiet colour, clear edges."
  },
  {
    id: "SO-004",
    slug: "classic-tortoise-shell",
    name: "Classic Tortoise Shell",
    type: "Eyeglasses",
    audience: ["Men"],
    collection: "Fiber",
    material: "Acetate",
    colorName: "Tortoise",
    image: "/images/tortoise-shell.png",
    pricePaise: 379000,
    stock: 45,
    limit: 5,
    dimensions: "50 · 19 · 140 mm",
    description:
      "Warm tortoise patterning on a versatile everyday shape. A familiar choice with a considered finish."
  },
  {
    id: "SO-005",
    slug: "silver-wire-aviator",
    name: "Silver Wire Aviator",
    type: "Eyeglasses",
    audience: ["Men"],
    collection: "Metal",
    material: "Metal",
    colorName: "Silver",
    image: "/images/silver-wire-aviator.png",
    pricePaise: 279000,
    stock: 46,
    limit: 5,
    dimensions: "53 · 18 · 140 mm",
    description:
      "A finer, lighter wire aviator. Minimal metal, maximum comfort."
  },

  /* ————— WOMEN · EYEGLASSES ————— */
  {
    id: "SO-006",
    slug: "matte-black-bold",
    name: "Matte Black Bold",
    type: "Eyeglasses",
    audience: ["Women"],
    collection: "Ultem",
    material: "Premium ULTEM",
    colorName: "Matte black",
    image: "/images/prism-01.png",
    pricePaise: 499000,
    stock: 48,
    limit: 5,
    dimensions: "51 · 20 · 145 mm",
    description:
      "A bold, softly squared frame in matte black. Substantial edges and an everyday presence.",
    tag: "Signature",
    rating: 4.7,
    reviews: 42,
    featured: true
  },
  {
    id: "SO-007",
    slug: "tortoise-round",
    name: "Tortoise Shell Round",
    type: "Eyeglasses",
    audience: ["Women"],
    collection: "Fiber",
    material: "Acetate",
    colorName: "Tortoise",
    image: "/images/tortoise-round.png",
    pricePaise: 299000,
    stock: 38,
    limit: 5,
    dimensions: "48 · 21 · 140 mm",
    description:
      "A rounded lens shape in classic tortoise. Soft, expressive, and comfortable for long wear."
  },
  {
    id: "SO-008",
    slug: "champagne-square",
    name: "Translucent Champagne Square",
    type: "Eyeglasses",
    audience: ["Women"],
    collection: "Fiber",
    material: "Acetate",
    colorName: "Champagne",
    image: "/images/champagne-square.png",
    pricePaise: 319000,
    stock: 42,
    limit: 5,
    dimensions: "50 · 19 · 140 mm",
    description:
      "A translucent champagne frame with softened corners. Light in hand, understated on the face."
  },
  {
    id: "SO-009",
    slug: "polished-teal-cateye",
    name: "Polished Teal Cat-Eye",
    type: "Eyeglasses",
    audience: ["Women"],
    collection: "Fiber",
    material: "Acetate",
    colorName: "Teal",
    image: "/images/teal-cateye.png",
    pricePaise: 429000,
    stock: 36,
    limit: 5,
    dimensions: "52 · 18 · 140 mm",
    description:
      "A polished teal cat-eye with a lifted corner. A little expression, still entirely wearable.",
    featured: true
  },
  {
    id: "SO-010",
    slug: "matte-rose-gold-aviator",
    name: "Matte Rose Gold Aviator",
    type: "Eyeglasses",
    audience: ["Women"],
    collection: "Metal",
    material: "Metal",
    colorName: "Rose gold",
    image: "/images/rosegold-aviator.png",
    pricePaise: 449000,
    stock: 38,
    limit: 5,
    dimensions: "54 · 18 · 143 mm",
    description:
      "A matte rose gold aviator that reads as polished without being shiny. Soft metal, strong shape.",
    featured: true
  },

  /* ————— CHILDREN · EYEGLASSES (flexible) ————— */
  {
    id: "SO-011",
    slug: "flexible-blue-square",
    name: "Flexible Blue Square",
    type: "Eyeglasses",
    audience: ["Children"],
    collection: "Unbreakable",
    material: "Flexible polymer",
    colorName: "Transparent blue",
    image: "/images/kid-blue-square.png",
    pricePaise: 199000,
    stock: 58,
    limit: 5,
    dimensions: "44 · 17 · 125 mm",
    description:
      "A flexible transparent-blue frame for children. Tough, forgiving material for active days.",
    tag: "Flexible",
    featured: true
  },
  {
    id: "SO-012",
    slug: "kids-round-flex",
    name: "Kids Round Flex",
    type: "Eyeglasses",
    audience: ["Children"],
    collection: "Unbreakable",
    material: "Flexible polymer",
    colorName: "Multi",
    image: "/images/kid-round.png",
    pricePaise: 179000,
    stock: 62,
    limit: 5,
    dimensions: "43 · 16 · 122 mm",
    description:
      "A rounded flexible frame for younger faces. Comfortable fit with forgiving, durable arms.",
    tag: "Flexible"
  },
  {
    id: "SO-013",
    slug: "clear-glitter-pink",
    name: "Clear Glitter Pink",
    type: "Eyeglasses",
    audience: ["Children"],
    collection: "Unbreakable",
    material: "Flexible polymer",
    colorName: "Clear pink glitter",
    image: "/images/clear-pink.png",
    pricePaise: 199000,
    stock: 40,
    limit: 5,
    dimensions: "45 · 16 · 125 mm",
    description:
      "A clear frame with a soft pink glitter. Playful detail without overwhelming the shape.",
    tag: "Flexible"
  },
  {
    id: "SO-014",
    slug: "matte-purple-round",
    name: "Matte Purple Round",
    type: "Eyeglasses",
    audience: ["Children"],
    collection: "Unbreakable",
    material: "Flexible polymer",
    colorName: "Matte purple",
    image: "/images/purple-round.png",
    pricePaise: 199000,
    stock: 44,
    limit: 5,
    dimensions: "45 · 16 · 124 mm",
    description:
      "A soft round frame in matte purple. Gentle colour with a clear, wearable silhouette.",
    tag: "Flexible"
  },
  {
    id: "SO-015",
    slug: "teal-lime-two-tone",
    name: "Teal & Lime Two-Tone",
    type: "Eyeglasses",
    audience: ["Children"],
    collection: "Unbreakable",
    material: "Flexible polymer",
    colorName: "Teal / lime",
    image: "/images/teal-lime-square.png",
    pricePaise: 199000,
    stock: 46,
    limit: 5,
    dimensions: "45 · 17 · 125 mm",
    description:
      "A two-tone teal and lime square for kids who like a little colour. Flexible, light, and fun.",
    tag: "Flexible"
  },

  /* ————— SHADES · SUNGLASSES ————— */
  {
    id: "SO-016",
    slug: "classic-gold-aviator",
    name: "Classic Gold Aviator",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Metal",
    material: "Metal",
    colorName: "Gold",
    image: "/images/gold-aviator.png",
    pricePaise: 499000,
    stock: 44,
    limit: 5,
    dimensions: "55 · 18 · 145 mm",
    description:
      "The classic aviator in a warm gold finish. A timeless shape that never really goes out of style.",
    tag: "Polarised",
    featured: true
  },
  {
    id: "SO-017",
    slug: "silver-metal-clubmaster",
    name: "Silver Metal Clubmaster",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Metal",
    material: "Metal",
    colorName: "Silver",
    image: "/images/axis-titanium.png",
    pricePaise: 749000,
    stock: 22,
    limit: 3,
    dimensions: "52 · 19 · 145 mm",
    description:
      "A clubmaster silhouette in a slim silver frame. Light, precise, and quietly confident.",
    tag: "Premium",
    rating: 4.8,
    reviews: 31,
    featured: true
  },
  {
    id: "SO-018",
    slug: "silver-round",
    name: "Silver Round",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Metal",
    material: "Metal",
    colorName: "Silver",
    image: "/images/silver-round.png",
    pricePaise: 199000,
    stock: 52,
    limit: 5,
    dimensions: "47 · 20 · 138 mm",
    description:
      "A simple round metal frame with a sun lens. An easy, entry-level choice that still looks deliberate."
  },
  {
    id: "SO-019",
    slug: "matte-black-square",
    name: "Matte Black Square",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Coolers",
    material: "Acetate",
    colorName: "Matte black",
    image: "/images/matte-black-square.png",
    pricePaise: 399000,
    stock: 42,
    limit: 5,
    dimensions: "54 · 20 · 145 mm",
    description:
      "A bold square sunglass in matte black with a polarised sun lens. Sharp, simple, and sun-ready.",
    tag: "Polarised"
  },
  {
    id: "SO-020",
    slug: "milky-amber-cateye",
    name: "Milky Amber Cat-Eye",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Coolers",
    material: "Acetate",
    colorName: "Milky amber",
    image: "/images/amber-cateye.png",
    pricePaise: 449000,
    stock: 40,
    limit: 5,
    dimensions: "52 · 18 · 142 mm",
    description:
      "A bold cat-eye in milky amber with a polarised sun lens. A stronger lift for a deliberate profile.",
    tag: "Polarised"
  },
  {
    id: "SO-021",
    slug: "polished-black-rectangle",
    name: "Polished Black Rectangle",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Coolers",
    material: "Acetate",
    colorName: "Polished black",
    image: "/images/polished-black-rect.png",
    pricePaise: 299000,
    stock: 55,
    limit: 5,
    dimensions: "50 · 18 · 140 mm",
    description:
      "A modern rectangle with a glossy finish and a polarised sun lens. Straightforward and sun-ready.",
    tag: "Polarised"
  },
  {
    id: "SO-022",
    slug: "rose-gold-geometric",
    name: "Rose Gold Geometric",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Metal",
    material: "Metal",
    colorName: "Rose gold",
    image: "/images/rosegold-geometric.png",
    pricePaise: 369000,
    stock: 33,
    limit: 5,
    dimensions: "50 · 19 · 140 mm",
    description:
      "A geometric metal frame in rose gold. Clean angles and a softer metallic tone."
  },
  {
    id: "SO-023",
    slug: "tortoise-oversized-round",
    name: "Tortoise Oversized Round",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Coolers",
    material: "Acetate",
    colorName: "Tortoise",
    image: "/images/tortoise-70s.png",
    pricePaise: 379000,
    stock: 28,
    limit: 5,
    dimensions: "54 · 20 · 145 mm",
    description:
      "An oversized seventies-inspired round in tortoise. A statement silhouette with a warm finish.",
    tag: "Polarised"
  },
  {
    id: "SO-024",
    slug: "teal-rimless-shield",
    name: "Translucent Teal Shield",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Coolers",
    material: "Acetate",
    colorName: "Translucent teal",
    image: "/images/teal-shield.png",
    pricePaise: 499000,
    stock: 26,
    limit: 5,
    dimensions: "53 · 18 · 140 mm",
    description:
      "A rimless-style shield in translucent teal. A modern, minimal profile with a hint of colour.",
    tag: "Polarised"
  },
  {
    id: "SO-025",
    slug: "clear-gold-glitter-cateye",
    name: "Clear Gold Glitter Cat-Eye",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Coolers",
    material: "Flexible polymer",
    colorName: "Clear gold glitter",
    image: "/images/gold-cateye.png",
    pricePaise: 199000,
    stock: 38,
    limit: 5,
    dimensions: "45 · 16 · 125 mm",
    description:
      "A lifted cat-eye silhouette in clear acetate with gold glitter and a polarised sun lens.",
    tag: "Polarised"
  },
  {
    id: "SO-026",
    slug: "sky-blue-wayfarer",
    name: "Sky Blue Wayfarer",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Coolers",
    material: "Flexible polymer",
    colorName: "Sky blue",
    image: "/images/sky-blue-wayfarer.png",
    pricePaise: 199000,
    stock: 42,
    limit: 5,
    dimensions: "44 · 16 · 124 mm",
    description:
      "A wayfarer in sky blue with a polarised sun lens. Everyday sun protection with a fresh finish.",
    tag: "Polarised"
  },
  {
    id: "SO-027",
    slug: "orange-round",
    name: "Orange Round",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Coolers",
    material: "Flexible polymer",
    colorName: "Orange",
    image: "/images/orange-round.png",
    pricePaise: 189000,
    stock: 40,
    limit: 5,
    dimensions: "44 · 16 · 122 mm",
    description:
      "A vivid round frame for kids who want a little more presence. Warm, confident colour.",
    tag: "Polarised"
  },
  {
    id: "SO-028",
    slug: "silver-metal-aviator",
    name: "Silver Metal Aviator",
    type: "Sunglasses",
    audience: ["Shades"],
    collection: "Metal",
    material: "Metal",
    colorName: "Silver",
    image: "/images/silver-aviator.png",
    pricePaise: 199000,
    stock: 44,
    limit: 5,
    dimensions: "44 · 16 · 123 mm",
    description:
      "A cool silver aviator sized for younger faces. Light, durable, and easy to pair with anything."
  },

  /* ————— SPORTSWEAR · SPORTS ————— */
  {
    id: "SO-029",
    slug: "blue-sport-wrap",
    name: "Blue Sport Wrap",
    type: "Sports",
    audience: ["Sportswear"],
    collection: "Coolers",
    material: "Polymer",
    colorName: "Blue",
    image: "/images/blue-sport-wrap.png",
    pricePaise: 549000,
    stock: 34,
    limit: 5,
    dimensions: "56 · 20 · 150 mm",
    description:
      "A wrap-around sports frame with a polarised lens. Built for outdoor days and active use.",
    tag: "Polarised",
    featured: true
  },
  {
    id: "SO-030",
    slug: "neon-lime-sports-wrap",
    name: "Neon Lime Sports Wrap",
    type: "Sports",
    audience: ["Sportswear"],
    collection: "Coolers",
    material: "Polymer",
    colorName: "Neon lime",
    image: "/images/neon-wrap.png",
    pricePaise: 479000,
    stock: 40,
    limit: 5,
    dimensions: "55 · 20 · 148 mm",
    description:
      "A high-energy sports wrap in neon lime with a polarised shield lens. Impossible to miss.",
    tag: "Polarised"
  },
  {
    id: "SO-031",
    slug: "red-black-sports-goggle",
    name: "Red & Black Sports Goggle",
    type: "Sports",
    audience: ["Sportswear"],
    collection: "Coolers",
    material: "Polymer",
    colorName: "Red / black",
    image: "/images/sports-goggle.png",
    pricePaise: 499000,
    stock: 36,
    limit: 5,
    dimensions: "55 · 20 · 148 mm",
    description:
      "A wrap-around sports goggle with a polarised lens. Built for outdoor days and active use.",
    tag: "Polarised"
  }
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Wholesale (business) price = 40% of retail, per the approved brief. */
export function wholesalePricePaise(retailPaise: number) {
  return Math.round(retailPaise * 0.4);
}

/** Minimum order quantity per line: 1 for retail, 20 for business. */
export function getMOQ(role: Role | null) {
  return role === "business" ? 20 : 1;
}

export function getUnitPrice(product: Product, role: Role | null) {
  return role === "business"
    ? wholesalePricePaise(product.pricePaise)
    : product.pricePaise;
}

export function formatMoney(paise: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(paise / 100);
}

export function getShipping(subtotalPaise: number) {
  if (subtotalPaise === 0 || subtotalPaise >= 300000) return 0;
  return 9900;
}

/** The five merchandising "classes" found inside each category. */
export const collections: { key: Collection; title: string }[] = [
  { key: "Ultem", title: "Premium ULTEM" },
  { key: "Unbreakable", title: "Unbreakable" },
  { key: "Fiber", title: "Fiber" },
  { key: "Metal", title: "Metal" },
  { key: "Coolers", title: "Coolers" }
];

export function productsByCollection(key: Collection) {
  return products.filter((p) => p.collection === key);
}
