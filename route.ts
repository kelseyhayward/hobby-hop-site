import { getStripe } from "@/lib/stripe"

export const dynamic = "force-dynamic"

// TEMPORARY diagnostic — delete this file before launch. Never returns key or ID values.
const priceVars = ["STRIPE_PRICE_KIT_MARTINI", "STRIPE_PRICE_KIT_BERRIES", "STRIPE_PRICE_KIT_GINGERBREAD", "STRIPE_PRICE_CANVAS_MARTINI", "STRIPE_PRICE_CANVAS_BERRIES", "STRIPE_PRICE_CANVAS_GINGERBREAD"]
const shippingVars = ["STRIPE_SHIPPING_RATE_KIT", "STRIPE_SHIPPING_RATE_CANVAS"]

const mode = (value?: string) =>
  /^(sk|rk|pk)_live_/.test(value ?? "") ? "live" : /^(sk|rk|pk)_test_/.test(value ?? "") ? "test" : value ? "unrecognized" : null

export async function GET() {
  const stripe = getStripe()
  const check = async (name: string, kind: "price" | "shipping") => {
    const id = process.env[name]
    if (!id) return "missing variable"
    if (!stripe) return "no secret key"
    try {
      if (kind === "price") await stripe.prices.retrieve(id)
      else await stripe.shippingRates.retrieve(id)
      return "ok"
    } catch (error) {
      return (error as { code?: string }).code ?? "error"
    }
  }
  const prices = Object.fromEntries(await Promise.all(priceVars.map(async (n) => [n, await check(n, "price")])))
  const shipping = Object.fromEntries(await Promise.all(shippingVars.map(async (n) => [n, await check(n, "shipping")])))
  return Response.json({
    STRIPE_SECRET_KEY: mode(process.env.STRIPE_SECRET_KEY),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: mode(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY),
    prices,
    shipping,
  })
}
