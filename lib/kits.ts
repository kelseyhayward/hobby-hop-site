import type { ProductKey } from "@/lib/products"

export type KitDesign = {
  slug: string
  name: string
  tagline: string
  canvasSize: string
  kitProduct: { key: ProductKey; priceInCents: number }
  canvasOnlyProduct: { key: ProductKey; priceInCents: number }
  images: { kit: string; canvas: string }
  story: string[]
  perfectFor: string[]
  finishIdeas: string[]
  stitchTime: string
  founderNote?: string
}

export const KITS: KitDesign[] = [
  {
    slug: "gingham-martini",
    name: "The Gingham Martini",
    tagline: "For the friend who orders the martini and is home by ten.",
    canvasSize: "7\" × 7\"",
    kitProduct: { key: "kit_martini", priceInCents: 4000 },
    canvasOnlyProduct: { key: "canvas_martini", priceInCents: 2000 },
    images: { kit: "/images/kit-martini.jpg", canvas: "/images/canvas-martini.jpg" },
    story: [
      "A strawberry-garnished coupe on pink gingham, the kind of thing you'd save to your \"someday\" board. We painted it for every woman who loves a good night out and an even better night in.",
      "Pour something cold, put your phone in the other room, and stitch your way through a season of your favorite show. Every canvas is painted by hand, so your martini will be a little different from anyone else's. Consider it your signature pour.",
    ],
    perfectFor: [
      "A cozy night in instead of scrolling",
      "A girls' night stitch-along where everyone picks a design",
      "A birthday, bridesmaid, or \"just because\" gift",
    ],
    finishIdeas: ["Bar-cart coaster", "Framed kitchen art", "Zip-pouch patch", "Holiday ornament"],
    stitchTime: "3–5 hours",
  },
  {
    slug: "market-berries",
    name: "Market Berries",
    tagline: "Saturday-morning farmers' market, in thread.",
    canvasSize: "6\" × 5.5\"",
    kitProduct: { key: "kit_berries", priceInCents: 4000 },
    canvasOnlyProduct: { key: "canvas_berries", priceInCents: 2000 },
    images: { kit: "/images/kit-berries.jpg", canvas: "/images/canvas-berries.jpg" },
    story: [
      "A heaping basket of ripe strawberries: the sweetest part of a slow weekend morning. We painted Market Berries for the woman who buys herself flowers, lingers over a second coffee, and wants a hobby that feels as good as it looks.",
      "It's our smallest canvas, which makes it the perfect first project. It's big enough to learn every stitch and small enough to actually finish, which is exactly the feeling we want your first piece to give you.",
    ],
    perfectFor: [
      "Your very first needlepoint project",
      "Slow Sunday mornings with coffee",
      "A hostess, teacher, or Mother's Day gift",
    ],
    finishIdeas: ["Framed kitchen art", "Coaster", "Mini pillow", "Tote-bag patch"],
    stitchTime: "3–5 hours",
  },
  {
    slug: "gingerbread-cottage",
    name: "The Gingerbread Cottage",
    tagline: "Stitch it this December. Hang it every December after.",
    canvasSize: "7\" × 7\"",
    kitProduct: { key: "kit_gingerbread", priceInCents: 4000 },
    canvasOnlyProduct: { key: "canvas_gingerbread", priceInCents: 2000 },
    images: { kit: "/images/kit-gingerbread.jpg", canvas: "/images/canvas-gingerbread.jpg" },
    story: [
      "A frosted gingerbread cottage with a red bow and candy-cane trim, painted for the woman who starts the Christmas music a little early and isn't sorry about it.",
      "Stitch it by the tree this season, and it becomes the ornament you unbox every year after: the one you made yourself. Or give one to your sister, your best friend, or your mom, and start a stitch-together tradition of your own.",
    ],
    perfectFor: [
      "Starting a new holiday tradition",
      "A gift for mom, a sister, or Secret Santa",
      "A calm project between holiday parties",
    ],
    finishIdeas: ["Tree ornament", "Framed holiday art", "Mini pillow", "Gift for someone you love"],
    stitchTime: "3–5 hours",
  },
]

export const PRODUCT_KEYS = KITS.flatMap((kit) => [kit.kitProduct.key, kit.canvasOnlyProduct.key])

export function getKitBySlug(slug: string) {
  return KITS.find((kit) => kit.slug === slug)
}

export function getKitForProductKey(key: ProductKey) {
  return KITS.find((kit) => kit.kitProduct.key === key || kit.canvasOnlyProduct.key === key)
}
