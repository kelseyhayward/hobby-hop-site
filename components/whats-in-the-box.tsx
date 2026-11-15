import { Check, BookOpen, Scissors, Palette, CircleDot } from "lucide-react"

const features = [
  { icon: Palette, title: "Your hand-painted canvas", description: "Your choice of design." },
  { icon: CircleDot, title: "Every thread color", description: "Matched by hand to your design." },
  { icon: Scissors, title: "Needle & embroidery scissors", description: "Ready to go." },
  { icon: BookOpen, title: "Your First Stitch", description: "A printed step-by-step guide, plus a video walkthrough you open by scanning the QR code inside.", featured: true },
]
const bullets = ["Hand-painted by us", "Beginner-friendly", "Ships in 3–5 days", "Packed by hand"]

export function WhatsInTheBox() {
  return <section className="px-6 py-20"><div className="mx-auto max-w-6xl"><div className="mb-12 text-center"><p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">What&apos;s Included</p><h2 className="font-serif text-4xl md:text-5xl">Everything you need to make your first stitch</h2></div><div className="grid gap-4 sm:grid-cols-2">{features.map(({ icon: Icon, title, description, featured }) => <article key={title} className={`rounded-2xl border p-6 transition-all ${featured ? "border-primary/40 bg-primary/10 md:col-span-2" : "border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"}`}><div className="mb-4 flex items-center justify-between"><span className="grid size-12 place-items-center rounded-xl bg-primary/10"><Icon className="size-5 text-primary" aria-hidden="true" /></span>{featured && <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-primary">Guide + video</span>}</div><h3 className="mb-2 font-serif text-xl">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{description}</p></article>)}</div><ul className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">{bullets.map((item) => <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="size-4 text-primary" aria-hidden="true" />{item}</li>)}</ul></div></section>
}
