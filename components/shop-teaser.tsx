import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { KITS } from "@/lib/kits"

export function ShopTeaser() {
  return (
    <section className="bg-secondary/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Now shipping</p>
          <h2 className="font-serif text-4xl md:text-5xl">A little something to stitch</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {KITS.map((kit) => (
            <Link href={`/shop/${kit.slug}`} key={kit.slug} className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={kit.images.kit} alt={kit.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="font-serif text-xl text-foreground">{kit.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">Starter Kit · $40</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">
            Shop all kits <ArrowRight className="size-4" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">Extra canvases sold separately, $20 each (threads not included).</p>
        </div>
      </div>
    </section>
  )
}
