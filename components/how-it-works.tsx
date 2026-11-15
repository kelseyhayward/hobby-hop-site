import { Package, Palette, Sparkles } from "lucide-react"
import Link from "next/link"

const steps = [
  { icon: Palette, title: "Pick your design", description: "Choose a starter kit and add any extra canvases you love." },
  { icon: Package, title: "We pack & ship", description: "We pack your kit by hand and ship it in 3–5 business days in our signature sage box." },
  { icon: Sparkles, title: "Make your first stitch", description: "Follow Your First Stitch and the video walkthrough, and finish your first piece." },
]

export function HowItWorks() {
  return <section id="how-it-works" className="scroll-mt-32 bg-secondary/50 px-6 py-20"><div className="mx-auto max-w-6xl"><div className="mb-12 text-center"><p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">How It Works</p><h2 className="font-serif text-4xl md:text-5xl">From our table to yours</h2></div><div className="grid gap-6 md:grid-cols-3">{steps.map(({ icon: Icon, title, description }, index) => <article key={title} className="group rounded-3xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"><div className="mb-5 flex items-center gap-4"><span className="grid size-14 place-items-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20"><Icon className="size-6 text-primary" /></span><span className="font-serif text-5xl text-border transition-colors group-hover:text-primary/20">0{index + 1}</span></div><h3 className="mb-3 font-serif text-xl">{title}</h3><p className="leading-relaxed text-muted-foreground">{description}</p></article>)}</div><p className="mt-8 text-center text-sm text-muted-foreground">Coming soon: a new hobby delivered every month through the <Link href="/#club" className="underline underline-offset-2">Hobby Hoppers Club</Link>.</p></div></section>
}
