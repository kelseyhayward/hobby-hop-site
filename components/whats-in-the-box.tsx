import { Check, BookOpen, Users, Package, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Package,
    title: "All beginner supplies",
    description: "Quality materials handpicked for your first steps into the hobby.",
  },
  {
    icon: BookOpen,
    title: "Step-by-step instructions",
    description: "Clear, friendly guides that make learning enjoyable and stress-free.",
  },
  {
    icon: Lightbulb,
    title: "A guided introduction",
    description: "Learn the history, techniques, and tips from experts in the field.",
  },
  {
    icon: Users,
    title: "Community access",
    description: "Connect with fellow hobby explorers to share your journey.",
  },
]

export function WhatsInTheBox() {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">What&apos;s Included</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Everything you need in one beautiful box
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Each Hobby Hop box is thoughtfully curated to give you the best possible start. No overwhelm, no guesswork—just pure creative joy.
            </p>
            <div className="space-y-4">
              {["Premium quality supplies", "Beginner-friendly projects", "Expert tips & tricks", "Exclusive community perks"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
