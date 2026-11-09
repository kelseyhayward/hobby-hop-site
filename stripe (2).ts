import "server-only"

import Stripe from "stripe"

export function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY
  return secretKey ? new Stripe(secretKey) : null
}

export function getPublishableKey() {
  return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
}
