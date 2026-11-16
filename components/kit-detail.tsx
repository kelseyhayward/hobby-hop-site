"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BookOpen, Minus, Paintbrush, Plus, Truck } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useHolidayActive } from "@/hooks/use-holiday-active"
import { HOLIDAY } from "@/lib/site-config"
import { KITS, type KitDesign } from "@/lib/kits"
import type { ProductKey } from "@/lib/products"

type KitOption = "kit" | "canvas"

type KitDetailProps = {
  design: KitDesign
  initialOption: KitOption
  kitPriceInCents: number
  canvasPriceInCents: number
}

function formatPrice(priceInCents: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(priceInCents / 100)
}

function ImageGallery({ design }: { design: KitDesign }) {
  const images = [
    { src: design.images.kit, label: `${design.name} complete starter kit` },
    { src: design.images.canvas, label: `${design.name} hand-painted canvas` },
  ]
  const [selectedImage, setSelectedImage] = useState(0)

  return <div>
    <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card">
      <Image src={images[selectedImage].src} alt={images[selectedImage].label} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
    <div className="mt-4 flex gap-3" aria-label="Product images">
      {images.map((image, index) => (
        <button key={image.src} type="button" onClick={() => setSelectedImage(index)} aria-label={`Show ${image.label}`} aria-pressed={selectedImage === index} className={`relative size-20 overflow-hidden rounded-xl border-2 transition-colors ${selectedImage === index ? "border-primary" : "border-border"}`}>
          <Image src={image.src} alt="" fill className="object-cover" sizes="80px" />
        </button>
      ))}
    </div>
  </div>
}

function OptionCard({ selected, title, price, description, onSelect }: { selected: boolean; title: string; price: number; description: string; onSelect: () => void }) {
  return <button type="button" aria-pressed={selected} onClick={onSelect} className={`flex min-h-28 w-full flex-col gap-2 rounded-2xl border p-4 text-left transition-colors ${selected ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"}`}>
    <span className="flex w-full items-start justify-between gap-3 font-medium text-foreground"><span>{title}</span><span className="shrink-0">{formatPrice(price)}</span></span>
    <span className="text-sm leading-relaxed text-muted-foreground">{description}</span>
  </button>
}

function QuantityPicker({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return <div role="group" className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-2 py-1" aria-label="Quantity">
    <button type="button" onClick={() => onChange(Math.max(1, value - 1))} disabled={value <= 1} className="grid size-8 place-items-center rounded-full hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40" aria-label="Decrease quantity"><Minus aria-hidden="true" className="size-4" /></button>
    <span className="min-w-4 text-center text-sm font-medium" aria-live="polite">{value}</span>
    <button type="button" onClick={() => onChange(Math.min(10, value + 1))} disabled={value >= 10} className="grid size-8 place-items-center rounded-full hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40" aria-label="Increase quantity"><Plus aria-hidden="true" className="size-4" /></button>
  </div>
}

function KitStory({ design }: { design: KitDesign }) {
  return <section className="mx-auto max-w-3xl">
    <h2 className="font-serif text-3xl">The story</h2>
    <div className="mt-5 flex flex-col gap-4 text-base leading-8 text-muted-foreground">
      {design.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {design.founderNote && <blockquote className="border-l-2 border-primary pl-5 italic text-foreground"><p>“{design.founderNote}”</p><footer className="mt-2 not-italic text-muted-foreground">— The Hobby Hop founders</footer></blockquote>}
    </div>
  </section>
}

function ProductSections({ design }: { design: KitDesign }) {
  return <div className="mt-20 flex flex-col gap-20">
    <KitStory design={design} />
    <section aria-labelledby="perfect-for-heading">
      <h2 id="perfect-for-heading" className="font-serif text-3xl">Perfect for</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {design.perfectFor.map((item) => <div key={item} className="rounded-2xl border border-border bg-secondary/40 p-5 leading-relaxed">{item}</div>)}
      </div>
    </section>
    <section aria-labelledby="whats-inside-heading" className="rounded-3xl border border-border bg-card p-6 md:p-8">
      <h2 id="whats-inside-heading" className="font-serif text-3xl">What&apos;s inside</h2>
      <ul className="mt-5 grid gap-3 text-muted-foreground sm:grid-cols-2">
        {[
          `Your hand-painted canvas (${design.canvasSize})`,
          "Every thread color matched by hand",
          "A needle and embroidery scissors",
          "Your First Stitch: a printed step-by-step guide plus a video walkthrough (scan the QR code inside)",
        ].map((item) => <li key={item} className="flex items-start gap-3"><span aria-hidden="true" className="mt-0.5 text-primary">✓</span><span>{item}</span></li>)}
      </ul>
      <p className="mt-5 text-sm text-muted-foreground">Ordering just the canvas? You&apos;ll get the hand-painted canvas only.</p>
    </section>
    <section aria-labelledby="finish-ideas-heading">
      <h2 id="finish-ideas-heading" className="font-serif text-3xl">Finish it as</h2>
      <ul className="mt-5 flex flex-wrap gap-3">
        {design.finishIdeas.map((idea) => <li key={idea} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">{idea}</li>)}
      </ul>
    </section>
    <section aria-labelledby="details-heading">
      <h2 id="details-heading" className="font-serif text-3xl">The details</h2>
      <dl className="mt-5 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 border-y border-border py-5">
        {[
          ["Canvas size", design.canvasSize],
          ["Skill level", "Beginner"],
          ["Stitch time", design.stitchTime],
          ["Made by", "Hand-painted by us"],
          ["Ships", "3–5 business days"],
        ].map(([label, value]) => <div key={label} className="flex flex-col gap-1"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="font-medium">{value}</dd></div>)}
      </dl>
    </section>
    <section aria-labelledby="also-like-heading">
      <h2 id="also-like-heading" className="font-serif text-3xl">You might also like</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {KITS.filter((kit) => kit.slug !== design.slug).map((kit) => <Link key={kit.slug} href={`/shop/${kit.slug}`} className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-3 transition-shadow hover:shadow-md">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-xl"><Image src={kit.images.kit} alt="" fill sizes="80px" className="object-cover transition-transform duration-300 group-hover:scale-105" /></div>
          <div><p className="font-serif text-lg">{kit.name}</p><p className="mt-1 text-sm text-muted-foreground">Starter Kit · $40</p></div>
        </Link>)}
      </div>
    </section>
  </div>
}

export function KitDetail({ design, initialOption, kitPriceInCents, canvasPriceInCents }: KitDetailProps) {
  const { quantities, addItem } = useCart()
  const holidayActive = useHolidayActive()
  const [selectedOption, setSelectedOption] = useState<KitOption>(initialOption)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => setSelectedOption(initialOption), [initialOption])

  const productKey: ProductKey = selectedOption === "kit" ? design.kitProduct.key : design.canvasOnlyProduct.key
  const priceInCents = selectedOption === "kit" ? kitPriceInCents : canvasPriceInCents
  const total = priceInCents * quantity

  function handleAddToBag() {
    const availableQuantity = Math.max(0, 20 - (quantities[productKey] ?? 0))
    if (availableQuantity === 0) return
    addItem(productKey, Math.min(quantity, availableQuantity))
    setAdded(true)
  }

  return <main className="mx-auto max-w-6xl px-6 pb-24 pt-36">
    <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
      <ImageGallery design={design} />
      <div>
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground"><Link href="/shop" className="hover:text-foreground">Shop</Link><span aria-hidden="true" className="px-2">/</span><span aria-current="page" className="text-foreground">{design.name}</span></nav>
        <h1 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{design.name}</h1>
        <p className="mt-3 text-lg italic leading-relaxed text-muted-foreground">{design.tagline}</p>
        {holidayActive && <p className="mt-5 inline-flex rounded-full border border-accent bg-accent/30 px-4 py-2 text-sm text-accent-foreground">{HOLIDAY.message}</p>}
        <fieldset className="mt-7">
          <legend className="mb-3 text-sm font-medium">Choose your option</legend>
          <div className="grid gap-3">
            <OptionCard selected={selectedOption === "kit"} title="Complete Starter Kit" price={kitPriceInCents} description="Hand-painted canvas, every thread color, needle, scissors, and Your First Stitch guide + video" onSelect={() => { setSelectedOption("kit"); setAdded(false) }} />
            <OptionCard selected={selectedOption === "canvas"} title="Canvas only" price={canvasPriceInCents} description="Hand-painted canvas only. Threads, needle, scissors, and guide not included." onSelect={() => { setSelectedOption("canvas"); setAdded(false) }} />
          </div>
        </fieldset>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div><p className="text-sm text-muted-foreground">Quantity</p><QuantityPicker value={quantity} onChange={(nextQuantity) => { setQuantity(nextQuantity); setAdded(false) }} /></div>
          <p className="font-serif text-2xl" aria-live="polite">{formatPrice(total)}</p>
        </div>
        <button type="button" onClick={handleAddToBag} disabled={(quantities[productKey] ?? 0) >= 20} className="mt-5 w-full rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">Add to bag — {formatPrice(total)}</button>
        {(quantities[productKey] ?? 0) >= 20 && <p className="mt-2 text-sm text-muted-foreground">You&apos;ve reached the maximum quantity for this option.</p>}
        {added && <div role="status" aria-live="polite" className="mt-4 rounded-2xl border border-primary/30 bg-primary/5 p-4">
          <p className="font-medium">Added to your bag</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <button type="button" onClick={() => setAdded(false)} className="text-primary underline underline-offset-2">Keep shopping</button>
            <Link href="/shop#order-summary" className="font-medium text-primary underline underline-offset-2">View bag &amp; checkout →</Link>
          </div>
        </div>}
        <ul className="mt-7 flex flex-col gap-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-3"><Paintbrush aria-hidden="true" className="size-4 text-primary" />Hand-painted by us in Texas</li>
          <li className="flex items-center gap-3"><Truck aria-hidden="true" className="size-4 text-primary" />Ships in 3–5 business days</li>
          {selectedOption === "kit" && <li className="flex items-center gap-3"><BookOpen aria-hidden="true" className="size-4 text-primary" />Guide + video walkthrough included</li>}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">Contains a sharp needle and scissors. Not a toy. For adults.</p>
      </div>
    </div>
    <ProductSections design={design} />
  </main>
}
