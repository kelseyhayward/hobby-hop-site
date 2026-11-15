import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return <section className="px-6 pb-20 pt-32 md:pt-36">
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
      <div className="flex flex-col gap-7">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2"><span className="size-2 animate-pulse rounded-full bg-primary" /><span className="text-sm font-semibold text-muted-foreground">Now shipping: Hand-painted needlepoint</span></div>
        <h1 className="font-serif text-5xl leading-tight text-foreground md:text-6xl lg:text-7xl">Your next favorite hobby, in one beautiful box</h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">Our first hobby is here. Beginner-friendly needlepoint kits with a canvas we hand-paint ourselves and everything you need to make your first stitch.</p>
        <div className="flex flex-col items-start gap-3"><Link href="/shop" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">Shop Needlepoint Kits <ArrowRight className="size-4" /></Link><p className="text-sm text-muted-foreground">Ships in 3–5 business days</p><Link href="/#club" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">Want a new hobby every month? Become a founding Hobby Hopper →</Link></div>
        <div className="flex flex-wrap gap-2 pt-1">{["Hand-painted canvases", "Made for first-timers", "Guide + video walkthrough"].map((chip) => <span key={chip} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{chip}</span>)}</div>
      </div>
      <div className="relative px-2 pb-5 md:px-4"><div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-primary/10"><Image src="/images/hero-hobbies.jpg" alt="Colorful hobby supplies including yarn, watercolors, and artisan objects" fill className="object-cover" priority /></div><Link href="/shop" className="absolute -bottom-1 left-0 rounded-2xl border border-border bg-card p-4 shadow-lg transition-transform hover:-translate-y-1 md:-left-2"><p className="text-sm text-muted-foreground">Now shipping</p><p className="font-serif text-lg text-foreground">Needlepoint Starter Kits · $40</p></Link></div>
    </div>
  </section>
}
