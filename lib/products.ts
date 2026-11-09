import "server-only"

import { getStripe } from "@/lib/stripe"


export type ProductKey =
  | "kit_martini"
  | "kit_berries"
  | "kit_gingerbread"
  | "canvas_martini"
  | "canvas_berries"
  | "canvas_gingerbread"

export type Product = {
  key: ProductKey
  name: string
  description: string
  size: string
  image: string
  priceId: string
  category: "kit" | "canvas"
}

export const PRODUCTS: Product[] = [
  { key: "kit_martini", name: "The Gingham Martini — Starter Kit", description: "A strawberry-garnished coupe on pink gingham. Includes your canvas, every thread color for the design, a needle, rose-gold embroidery scissors, and Your First Stitch, our beginner's guide.", size: "7\" × 7\" canvas", image: "/images/kit-martini.jpg", priceId: process.env["price_1UZcvGAhAeFmnuAlSWbQ4gcJ"] ?? "", category: "kit" },
  { key: "kit_berries", name: "Market Berries — Starter Kit", description: "A heaping basket of ripe strawberries. Includes your canvas, every thread color for the design, a needle, rose-gold embroidery scissors, and Your First Stitch, our beginner's guide.", size: "6\" × 5.5\" canvas", image: "/images/kit-berries.jpg", priceId: process.env["price_1UZczGAhAeFmnuAlXb9jKksL"] ?? "", category: "kit" },
  { key: "kit_gingerbread", name: "The Gingerbread Cottage — Starter Kit", description: "A frosted gingerbread cottage with a red bow and candy-cane trim. Includes your canvas, every thread color for the design, a needle, rose-gold embroidery scissors, and Your First Stitch, our beginner's guide.", size: "7\" × 7\" canvas", image: "/images/kit-gingerbread.jpg", priceId: process.env["price_1UZd0XAhAeFmnuAlGoqlY2DD"] ?? "", category: "kit" },
  { key: "canvas_martini", name: "The Gingham Martini — Canvas Only", description: "The canvas only — threads, needle, scissors, and guide are not included.", size: "7\" × 7\"", image: "/images/canvas-martini.jpg", priceId: process.env["price_1UZd1fAhAeFmnuAlTUFtbIWX"] ?? "", category: "canvas" },
  { key: "canvas_berries", name: "Market Berries — Canvas Only", description: "The canvas only — threads, needle, scissors, and guide are not included.", size: "6\" × 5.5\"", image: "/images/canvas-berries.jpg", priceId: process.env["price_1UZd3VAhAeFmnuAl0nMFpFWZ"] ?? "", category: "canvas" },
  { key: "canvas_gingerbread", name: "The Gingerbread Cottage — Canvas Only", description: "The canvas only — threads, needle, scissors, and guide are not included.", size: "7\" × 7\"", image: "/images/canvas-gingerbread.jpg", priceId: process.env["price_1UZd4oAhAeFmnuAluMM3dsyp"] ?? "", category: "canvas" },
]


export async function getPricedProducts() {
  const stripe = getStripe()
  if (!stripe) return PRODUCTS.map((product) => ({ ...product, priceInCents: null }))
  return Promise.all(PRODUCTS.map(async (product) => {
    try {
      const price = await stripe.prices.retrieve(product.priceId)
      return { ...product, priceInCents: price.unit_amount }
    } catch (error) {
      const stripeError = error as { type?: string; code?: string }
      console.error("[stripe-price]", product.key, { type: stripeError.type, code: stripeError.code })
      return { ...product, priceInCents: null }
    }
  }))
}

export function getProduct(key: string) {
  return PRODUCTS.find((product) => product.key === key)
}

export const productKeys = new Set<ProductKey>(PRODUCTS.map((product) => product.key))
