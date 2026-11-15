import { Brush, Heart, Package } from "lucide-react"

const promises = [
  { icon: Brush, text: "Hand-painted canvases" },
  { icon: Heart, text: "Hand-curated kits" },
  { icon: Package, text: "Hand-packed boxes" },
]

export function OurStory() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div role="img" aria-label="The Hobby Hop founders" className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-secondary/70">
          <span className="sr-only">The Hobby Hop founders</span>
        </div>
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Our Story</p>
          <h2 className="mb-6 font-serif text-4xl text-foreground md:text-5xl">Made by hand, by us</h2>
          <p className="leading-relaxed text-muted-foreground">
            We&apos;re the two founders of The Hobby Hop, and every canvas we sell is hand-painted by us — not printed in a factory. We match every thread color by hand and pack every box ourselves in Texas. No two canvases are exactly alike, and that&apos;s the point.
          </p>
          <div className="mt-8 space-y-4">
            {promises.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-foreground">
                <Icon aria-hidden="true" className="size-4 text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
