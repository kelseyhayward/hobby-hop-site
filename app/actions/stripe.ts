"use server"

import { headers } from "next/headers"
import { getProduct, productKeys, type ProductKey } from "@/lib/products"

import { getStripe } from "@/lib/stripe"
const friendlyError = "Something went wrong starting checkout — please try again or email TheHobbyHoppersClub@gmail.com"

export async function createCheckoutSession(selection: Record<string, unknown>) {
  try {
    const quantities = Object.fromEntries(
      Object.entries(selection).filter(([key, value]) => productKeys.has(key as ProductKey) && Number.isInteger(value) && Number(value) >= 0 && Number(value) <= 20),
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
    const kitCount = entries.filter(([key]) => getProduct(key)?.category === "kit").reduce((total, [, quantity]) => total + quantity, 0)
    const hasKit = kitCount > 0
    const hasCanvasOnly = entries.some(([key]) => getProduct(key)?.category === "canvas")
    const kitRateId = process.env["shr_1UZdRxAhAeFmnuAl1SGwaTgf"]
    const canvasRateId = process.env["shr_1UZdTYAhAeFmnuAlilIjT2YO"]
    const rateId = hasKit ? kitRateId : canvasRateId
    if (!rateId) throw new Error("Missing shipping rate")
    const rate = await stripe.shippingRates.retrieve(rateId)
    const shippingAmount = hasKit ? (rate.fixed_amount?.amount ?? 0) * kitCount : hasCanvasOnly ? (rate.fixed_amount?.amount ?? 0) : 0
    const requestHeaders = await headers()
    const origin = requestHeaders.get("origin") || "https://thehobbyhop.com"
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      mode: "payment",
      line_items,
      shipping_address_collection: { allowed_countries: ["US"] },
      shipping_options: shippingAmount > 0 ? [{ shipping_rate_data: { type: "fixed_amount", fixed_amount: { amount: shippingAmount, currency: "usd" }, display_name: "Standard Shipping (ships in 3–5 business days)", tax_behavior: "exclusive", tax_code: "txcd_92010001" } }] : [],
      billing_address_collection: "auto",
      automatic_tax: { enabled: true },
      return_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    })
    return { clientSecret: session.client_secret }
  } catch (error) {
    console.error("[stripe-checkout]", error)
    return { error: friendlyError }
  }
}
