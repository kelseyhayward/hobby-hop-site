import { Palette, Package, Sparkles } from "lucide-react"
import Link from "next/link"

const steps = [
  { icon: Palette, title: "Pick your design", description: "Choose a starter kit and add any extra canvases you love." },
  { icon: Package, title: "We pack & ship", description: "We pack your kit by hand and ship it in 3–5 business days in our signature sage box." },
  { icon: Sparkles, title: "Make your first stitch", description: "Follow Your First Stitch and the video walkthrough, and finish your first piece." },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">How It Works</p>
          <h2 className="font-serif text-4xl text-foreground text-balance md:text-5xl">From our table to yours</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20"><Icon aria-hidden="true" className="size-6 text-primary" /></div>
                <span className="font-serif text-5xl text-border transition-colors group-hover:text-primary/20">0{index + 1}</span>
              </div>
              <h3 className="mb-3 font-serif text-xl text-foreground">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">Coming soon: a new hobby delivered every month through the <Link href="/#club" className="underline underline-offset-2 hover:text-foreground">Hobby Hoppers Club</Link>.</p>
      </div>
    </section>
  )
}
