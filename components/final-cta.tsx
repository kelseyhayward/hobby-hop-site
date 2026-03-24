"use client"

import { useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-primary rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-foreground blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary-foreground blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground font-medium">Limited Spots</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6 text-balance">
              Ready to discover your next obsession?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-lg mx-auto">
              Join thousands of curious minds already on the waitlist. Your next favorite hobby is waiting.
            </p>
            {isSubmitted ? (
              <div className="bg-primary-foreground/20 p-6 rounded-2xl max-w-md mx-auto">
                <p className="text-primary-foreground font-medium">
                  Welcome to the club! Check your inbox for confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 rounded-full bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                >
                  Join Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
