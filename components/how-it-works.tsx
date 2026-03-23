import { Palette, Package, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Palette,
    title: "Pick Your Hobby",
    description: "Browse our curated selection of hobbies and choose the one that sparks your curiosity.",
  },
  {
    icon: Package,
    title: "Get Your Starter Kit",
    description: "Receive a beautifully packaged box with everything you need to begin your new adventure.",
  },
  {
    icon: Sparkles,
    title: "Discover Something New",
    description: "Follow our guided instructions and unlock a new skill that could become your next passion.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">How It Works</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Your journey to new hobbies starts here
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-card p-8 rounded-3xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-serif text-5xl text-border group-hover:text-primary/20 transition-colors">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
