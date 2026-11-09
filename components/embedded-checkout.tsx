"use client"

import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useMemo } from "react"
import { createCheckoutSession } from "@/app/actions/stripe"

export function EmbeddedCheckoutPanel({ selection, publishableKey }: { selection: Record<string, number>; publishableKey: string }) {
  const stripePromise = loadStripe(publishableKey)
  const options = useMemo(() => ({ fetchClientSecret: async () => { const result = await createCheckoutSession(selection); if (result.error || !result.clientSecret) throw new Error(result.error ?? "Unable to start checkout"); return result.clientSecret } }), [selection])
  return <EmbeddedCheckoutProvider stripe={stripePromise} options={options}><EmbeddedCheckout /></EmbeddedCheckoutProvider>
}
