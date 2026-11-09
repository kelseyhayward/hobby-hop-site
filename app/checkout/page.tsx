import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmbeddedCheckoutPanel } from "@/components/embedded-checkout"
import { PRODUCTS } from "@/lib/products"
import { getPublishableKey } from "@/lib/stripe"

export default async function CheckoutPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams
  const selection = Object.fromEntries(PRODUCTS.map((product) => { const value = Number(params[product.key]); return [product.key, Number.isInteger(value) && value > 0 && value <= 3 ? value : 0] }).filter(([, value]) => value)) as Record<string, number>
  const items = PRODUCTS.filter((product) => selection[product.key])
  return <><Header /><main className="mx-auto max-w-4xl px-6 pb-20 pt-36"><Link href="/shop" className="text-sm text-primary hover:underline">← Edit order</Link><div className="mb-8 mt-8"><p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Almost there</p><h1 className="font-serif text-5xl">Complete your order</h1><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">{items.length ? items.map((item) => <span key={item.key}>{selection[item.key]} × {item.name}</span>) : <span>Your order is empty. <Link className="text-primary underline" href="/shop">Return to the shop</Link></span>}</div></div>{items.length > 0 && <div className="rounded-2xl border border-border bg-card p-3"><EmbeddedCheckoutPanel selection={selection} publishableKey={getPublishableKey()} /></div>}</main><Footer /></>
}
