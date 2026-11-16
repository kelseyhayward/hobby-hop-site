import { Check, BookOpen, Scissors, Palette, Sparkles } from "lucide-react"

const features = [
  { icon: Palette, title: "Your hand-painted canvas", description: "Your choice of design." },
  { icon: Sparkles, title: "Every thread color", description: "Matched by hand to your design." },
  { icon: Scissors, title: "Needle & embroidery scissors", description: "Ready to go." },
  { icon: BookOpen, title: "Your First Stitch", description: "A printed step-by-step guide, plus a video walkthrough you open by scanning the QR code inside.", prominent: true },
]

const highlights = ["Hand-painted by us", "Beginner-friendly", "Ships in 3–5 days", "Packed by hand"]

export function WhatsInTheBox() {
  return (
    <section className="bg-secondary/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">What&apos;s Included</p>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl text-foreground text-balance md:text-5xl">Everything you need to make your first stitch</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className={`rounded-2xl border border-border p-6 transition-all duration-300 ${feature.prominent ? "bg-primary/10 ring-1 ring-primary/20" : "bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"}`}>
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon aria-hidden="true" className="size-5 text-primary" />
              </div>
              {feature.prominent && <span className="mb-3 inline-flex rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">Guide + video</span>}
              <h3 className="mb-2 font-serif text-lg text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex size-5 items-center justify-center rounded-full bg-primary/10"><Check aria-hidden="true" className="size-3 text-primary" /></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
