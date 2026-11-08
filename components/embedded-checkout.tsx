"use client"

import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useMemo } from "react"
import { createCheckoutSession } from "@/app/actions/stripe"

const stripePromise = loadStripe(process.env.pk_test_51US08BAhAeFmnuAlsokBhIOGXtkvlXatGmKDpyRpgJLKtf9mKctXla2m9a0CuGiVH855tON5KSossbpztbs5Tgnb00jPXcT2Gd ?? "")

export function EmbeddedCheckoutPanel({ selection }: { selection: Record<string, number> }) {
  const options = useMemo(() => ({ fetchClientSecret: async () => { const result = await createCheckoutSession(selection); if (result.error || !result.clientSecret) throw new Error(result.error ?? "Unable to start checkout"); return result.clientSecret } }), [selection])
  return <EmbeddedCheckoutProvider stripe={stripePromise} options={options}><EmbeddedCheckout /></EmbeddedCheckoutProvider>
}
