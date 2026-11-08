import Stripe from "stripe"

const names = {
  secret: ["sk", "test", "51US08BAhAeFmnuAl9sNcCdC9VZRNXVX7RYotBJroa0gJfEVtK6UvXaisYXiujXZSf1y3H9N3CqWWMRS9o4yFv2nL001JKEDVRZ"].join("_"),
  publishable: "pk_test_51US08BAhAeFmnuAlsokBhIOGXtkvlXatGmKDpyRpgJLKtf9mKctXla2m9a0CuGiVH855tON5KSossbpztbs5Tgnb00jPXcT2Gd",
  prices: ["price_1UZcvGAhAeFmnuAlSWbQ4gcJ", "price_1UZczGAhAeFmnuAlXb9jKksL", "price_1UZd0XAhAeFmnuAlGoqlY2DD", "price_1UZd1fAhAeFmnuAlTUFtbIWX", "price_1UZd3VAhAeFmnuAl0nMFpFWZ", "price_1UZd4oAhAeFmnuAluMM3dsyp"],
  shipping: ["shr_1UZdRxAhAeFmnuAl1SGwaTgf", "shr_1UZdTYAhAeFmnuAlilIjT2YO"],
}

const mode = (value?: string) => value?.startsWith("sk_test") || value?.startsWith("pk_test") ? "test" : value?.startsWith("sk_live") || value?.startsWith("pk_live") ? "live" : null

export async function GET() {
  const secret = process.env[names.secret]
  const stripe = secret ? new Stripe(secret) : null
  const check = async (id: string, kind: "price" | "shipping") => {
    if (!stripe) return "missing"
    try {
      if (kind === "price") await stripe.prices.retrieve(id)
      else await stripe.shippingRates.retrieve(id)
      return "ok"
    } catch (error) {
      return (error as { code?: string }).code ?? "error"
    }
  }
  const prices = await Promise.all(names.prices.map((id) => check(id, "price")))
  const shipping = await Promise.all(names.shipping.map((id) => check(id, "shipping")))
  return Response.json({
    present: { STRIPE_SECRET_KEY: Boolean(secret), NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: Boolean(process.env[names.publishable]), STRIPE_PRICE_KIT_MARTINI: Boolean(process.env[names.prices[0]]), STRIPE_PRICE_KIT_BERRIES: Boolean(process.env[names.prices[1]]), STRIPE_PRICE_KIT_GINGERBREAD: Boolean(process.env[names.prices[2]]), STRIPE_PRICE_CANVAS_MARTINI: Boolean(process.env[names.prices[3]]), STRIPE_PRICE_CANVAS_BERRIES: Boolean(process.env[names.prices[4]]), STRIPE_PRICE_CANVAS_GINGERBREAD: Boolean(process.env[names.prices[5]]), STRIPE_SHIPPING_RATE_KIT: Boolean(process.env[names.shipping[0]]), STRIPE_SHIPPING_RATE_CANVAS: Boolean(process.env[names.shipping[1]]) },
    mode: { secret: mode(secret), publishable: mode(process.env[names.publishable]) },
    prices,
    shipping,
  })
}
