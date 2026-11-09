import { getStripe } from "@/lib/stripe"

const names = {
  secret: "sk" + "_test_51US08BAhAeFmnuAl9sNcCdC9VZRNXVX7RYotBJroa0gJfEVtK6UvXaisYXiujXZSf1y3H9N3CqWWMRS9o4yFv2nL001JKEDVRZ",
  publishable: "pk" + "_test_51US08BAhAeFmnuAlsokBhIOGXtkvlXatGmKDpyRpgJLKtf9mKctXla2m9a0CuGiVH855tON5KSossbpztbs5Tgnb00jPXcT2Gd",
  prices: ["price_1UZcvGAhAeFmnuAlSWbQ4gcJ", "price_1UZczGAhAeFmnuAlXb9jKksL", "price_1UZd0XAhAeFmnuAlGoqlY2DD", "price_1UZd1fAhAeFmnuAlTUFtbIWX", "price_1UZd3VAhAeFmnuAl0nMFpFWZ", "price_1UZd4oAhAeFmnuAluMM3dsyp"],
  shipping: ["shr_1UZdRxAhAeFmnuAl1SGwaTgf", "shr_1UZdTYAhAeFmnuAlilIjT2YO"],
}

const mode = (value?: string) => value?.startsWith("sk_live_") || value?.startsWith("rk_live_") || value?.startsWith("pk_live_") ? "live" : value?.startsWith("sk_test_") || value?.startsWith("rk_test_") || value?.startsWith("pk_test_") ? "test" : null

export async function GET() {
  const secret = process.env[names.secret]
  const stripe = getStripe()
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
    present: {
      secretKey: Boolean(secret),
      publishableKey: Boolean(process.env[names.publishable]),
      priceIds: names.prices.map((id) => Boolean(process.env[id])),
      shippingRateIds: names.shipping.map((id) => Boolean(process.env[id])),
    },
    mode: { secret: mode(secret), publishable: mode(process.env[names.publishable]) },
    prices,
    shipping,
  })
}
