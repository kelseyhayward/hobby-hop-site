import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { EarlyAccess } from "@/components/early-access"

const hobbies = [
  { name: "Crochet", image: "/images/crochet.jpg" },
  { name: "Sourdough", image: "/images/sourdough.jpg" },
  { name: "Watercolor", image: "/images/watercolor.jpg" },
  { name: "Candle Making", image: "/images/candle-making.jpg" },
  { name: "Tea Tasting", image: "/images/tea-tasting.jpg" },
  { name: "Puzzling", image: "/images/puzzles.jpg" },
  { name: "Calligraphy", image: "/images/calligraphy.jpg" },
  { name: "Reading", image: "/images/reading.jpg" },
]

export function HobbyGrid() {
  return (
    <section id="club" aria-labelledby="club-heading" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div id="hobbies" className="mb-16 scroll-mt-32 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Coming Soon</p>
          <h2 id="club-heading" className="mb-4 font-serif text-4xl text-foreground text-balance md:text-5xl">The Hobby Hoppers Club</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">A new beginner kit at your door every month. We&apos;re opening the Club to founding members first.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border-2 border-primary bg-card">
            <Link href="/shop" className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/kit-martini.jpg" alt="The Gingham Martini needlepoint starter kit" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Available now</span>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <h3 className="font-serif text-lg text-foreground">Needlepoint</h3>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">Shop <ArrowRight aria-hidden="true" className="size-3" /></span>
              </div>
            </Link>
          </article>
          {hobbies.map((hobby) => (
            <article key={hobby.name} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-square overflow-hidden">
                <Image src={hobby.image} alt={hobby.name} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-xs font-medium text-foreground">Coming soon</span>
              </div>
              <div className="p-4"><h3 className="font-serif text-lg text-foreground">{hobby.name}</h3></div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">And many more to come...</p>
        <div id="waitlist" className="mt-16 scroll-mt-32 rounded-3xl bg-primary/10 p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="font-serif text-3xl text-foreground md:text-4xl">Become a founding Hobby Hopper</h3>
              <ul className="mt-6 space-y-3">
                {["First access when the Club opens", "Founding-member early-bird pricing", "Help choose the hobbies that come next"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground"><span aria-hidden="true" className="mt-0.5 text-primary">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <EarlyAccess />
          </div>
        </div>
      </div>
    </section>
  )
}
