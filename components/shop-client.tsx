"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, ShoppingBag } from "lucide-react"
import { useState } from "react"
import type { ProductKey } from "@/lib/products"

type PricedProduct = { key: ProductKey; name: string; description: string; size: string; image: string; category: "kit" | "canvas"; priceInCents: number | null }

function Quantity({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return <div className="flex items-center gap-3 rounded-full border border-border bg-background px-2 py-1" aria-label="Quantity">
    <button type="button" onClick={() => onChange(Math.max(0, value - 1))} className="grid size-7 place-items-center rounded-full hover:bg-secondary" aria-label="Decrease quantity"><Minus className="size-4" /></button>
    <span className="min-w-4 text-center text-sm font-medium">{value}</span>
    <button type="button" onClick={() => onChange(Math.min(3, value + 1))} className="grid size-7 place-items-center rounded-full hover:bg-secondary" aria-label="Increase quantity"><Plus className="size-4" /></button>
  </div>
}

function ProductCard({ product, quantity, onChange }: { product: PricedProduct; quantity: number; onChange: (value: number) => void }) {
  return <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card">
    <div className="relative aspect-[4/3] bg-secondary/50">
      <Image src={product.image} alt={product.name} fill className="object-cover" onError={(event) => { event.currentTarget.style.display = "none" }} />
      <div className="absolute inset-0 -z-0 grid place-items-center p-8 text-center text-sm text-muted-foreground">The Hobby Hop</div>
    </div>
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div><p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">{product.size}</p><h3 className="font-serif text-2xl leading-tight">{product.name}</h3></div>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
      <div className="flex items-center justify-between gap-4 border-t border-border pt-4"><span className="font-serif text-xl">{product.priceInCents == null ? "Price unavailable" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.priceInCents / 100)}</span><Quantity value={quantity} onChange={onChange} /></div>
    </div>
  </article>
}

export function ShopClient({ products }: { products: PricedProduct[] }) {
  const [quantities, setQuantities] = useState<Partial<Record<ProductKey, number>>>({})
  const selected = products.filter((product) => (quantities[product.key] ?? 0) > 0)
  const subtotal = selected.reduce((total, product) => total + (product.priceInCents ?? 0) * (quantities[product.key] ?? 0), 0)
  const setQuantity = (key: ProductKey, value: number) => setQuantities((current) => ({ ...current, [key]: value }))
  const query = new URLSearchParams(Object.entries(quantities).filter(([, quantity]) => quantity).map(([key, quantity]) => [key, String(quantity)]))

  return <>
    <main className="mx-auto max-w-6xl px-6 pb-48 pt-36 md:pb-20">
      <div className="mx-auto mb-16 max-w-2xl text-center"><p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">The Hobby Hop shop</p><h1 className="font-serif text-5xl md:text-6xl">Shop Needlepoint</h1><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Beginner-friendly kits, designed in-house and packed in our signature sage box. Ships in 3–5 business days.</p></div>
      {(["kit", "canvas"] as const).map((category) => <section key={category} className="mb-16"><div className="mb-7 flex items-end justify-between gap-4"><div><h2 className="font-serif text-3xl">{category === "kit" ? "Starter Kits" : "Canvases Only"}</h2>{category === "canvas" && <p className="mt-2 text-sm text-muted-foreground">Canvas only — threads not included.</p>}</div></div><div className="grid gap-6 md:grid-cols-3">{products.filter((product) => product.category === category).map((product) => <ProductCard key={product.key} product={product} quantity={quantities[product.key] ?? 0} onChange={(value) => setQuantity(product.key, value)} />)}</div></section>)}
    </main>
    <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-4 shadow-2xl backdrop-blur md:sticky md:bottom-6 md:mx-auto md:max-w-6xl md:rounded-2xl md:border md:p-5"><div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div className="min-w-0"><div className="flex items-center gap-2 font-medium"><ShoppingBag className="size-4 text-primary" /> Order summary</div>{selected.length ? <p className="mt-1 truncate text-sm text-muted-foreground">{selected.map((product) => `${quantities[product.key]} × ${product.name.replace(" — Starter Kit", "").replace(" — Canvas Only", "")}`).join(", ")}</p> : <p className="mt-1 text-sm text-muted-foreground">Your basket is waiting for a new hobby.</p>}</div><div className="flex items-center justify-between gap-5 md:justify-end"><div><p className="text-xs text-muted-foreground">Subtotal</p><p className="font-serif text-xl">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(subtotal / 100)}</p></div><Link aria-disabled={!selected.length} className={`rounded-full px-6 py-3 text-center text-sm font-medium transition-opacity ${selected.length ? "bg-primary text-primary-foreground hover:opacity-90" : "pointer-events-none bg-muted text-muted-foreground"}`} href={selected.length ? `/checkout?${query.toString()}` : "#"}>Checkout</Link></div></div><p className="mt-2 text-center text-xs text-muted-foreground md:text-right">Shipping and tax calculated at checkout</p></aside>
  </>
}
