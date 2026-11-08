"use server"

import { headers } from "next/headers"
import Stripe from "stripe"
import { getProduct, productKeys, type ProductKey } from "@/lib/products"

function getStripe() {
  const secretKey = process.env["sk" + "_test_51US08BAhAeFmnuAl9sNcCdC9VZRNXVX7RYotBJroa0gJfEVtK6UvXaisYXiujXZSf1y3H9N3CqWWMRS9o4yFv2nL001JKEDVRZ"]
  return secretKey ? new Stripe(secretKey) : null
}
const friendlyError = "Something went wrong starting checkout — please try again or email TheHobbyHoppersClub@gmail.com"

export async function createCheckoutSession(selection: Record<string, unknown>) {
  try {
    const quantities = Object.fromEntries(
      Object.entries(selection).filter(([key, value]) => productKeys.has(key as ProductKey) && Number.isInteger(value) && Number(value) >= 0 && Number(value) <= 3),
    ) as Partial<Record<ProductKey, number>>
    const entries = Object.entries(quantities).filter(([, quantity]) => quantity && quantity > 0) as [ProductKey, number][]
    if (!entries.length) return { error: "Please select at least one item." }

    const stripe = getStripe()
    if (!stripe) return { error: friendlyError }

    const line_items = entries.map(([key, quantity]) => {
      const product = getProduct(key)
      const price = product?.priceId
      if (!price) throw new Error(`Missing price for ${key}`)
      return { price, quantity }
    })
    const hasKit = entries.some(([key]) => getProduct(key)?.category === "kit")
    const shippingRate = hasKit ? process.env.shr_1UZdRxAhAeFmnuAl1SGwaTgf : process.env.shr_1UZdTYAhAeFmnuAlilIjT2YO
    if (!shippingRate) throw new Error("Missing shipping rate")
    const requestHeaders = await headers()
    const origin = requestHeaders.get("origin") || "https://thehobbyhop.com"
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      mode: "payment",
      line_items,
      shipping_address_collection: { allowed_countries: ["US"] },
      shipping_options: [{ shipping_rate: shippingRate }],
      billing_address_collection: "auto",
      return_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    })
    return { clientSecret: session.client_secret }
  } catch (error) {
    console.error("[stripe-checkout]", error)
    return { error: friendlyError }
  }
}
