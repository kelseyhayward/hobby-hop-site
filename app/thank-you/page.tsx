import Link from "next/link"
import { redirect } from "next/navigation"
import Stripe from "stripe"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function getStripe() {
   const secretKey = process.env.STRIPE_SECRET_KEY
  return secretKey ? new Stripe(secretKey) : null
}

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams
  if (!session_id) return <SimpleMessage />
  try {
    const stripe = getStripe()
    if (!stripe) return <SimpleMessage />
    const session = await stripe.checkout.sessions.retrieve(session_id, { expand: ["line_items.data.price.product"] })
    if (session.status === "open") redirect("/shop")
    if (session.status !== "complete") return <SimpleMessage />
    const email = session.customer_details?.email ?? "your email address"
    const lineItems = session.line_items?.data ?? []
    return <><Header /><main className="mx-auto max-w-2xl px-6 pb-20 pt-40"><div className="rounded-3xl border border-border bg-card p-8 text-center md:p-12"><p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Order confirmed</p><h1 className="font-serif text-5xl">Thank you for your order!</h1><p className="mt-5 leading-relaxed text-muted-foreground">A receipt is on its way to {email}. Your order ships within 3–5 business days.</p><div className="my-8 border-y border-border py-6 text-left">{lineItems.map((item) => <div key={item.id} className="flex justify-between gap-4 py-2 text-sm"><span>{item.description ?? "Needlepoint"}</span><span>× {item.quantity}</span></div>)}</div><Link href="/" className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">Back to The Hobby Hop</Link><p className="mt-6 text-sm text-muted-foreground">Want a nudge toward your next hobby? <a href="/#waitlist" className="text-primary underline">Join the waitlist</a>.</p></div></main><Footer /></>
  } catch { return <SimpleMessage /> }
}
function SimpleMessage() { return <><Header /><main className="mx-auto max-w-2xl px-6 pb-20 pt-40 text-center"><h1 className="font-serif text-5xl">We couldn&apos;t find that order</h1><p className="mt-5 text-muted-foreground">Please return to the shop to start a new order.</p><Link href="/shop" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Back to shop</Link></main><Footer /></> }
