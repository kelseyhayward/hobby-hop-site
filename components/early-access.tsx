"use client"

import { useState } from "react"
import { ArrowRight, Heart } from "lucide-react"

export function EarlyAccess() {
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
    <section id="waitlist" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
          <Heart className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Early Access</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
          We&apos;re building the ultimate hobby club
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Join the waitlist to get early access and help shape the first boxes. Be among the first to discover something new.
        </p>
        {isSubmitted ? (
          <div className="bg-secondary p-8 rounded-2xl max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-2">You&apos;re in!</h3>
            <p className="text-muted-foreground">
              Thanks for joining! We&apos;ll send you updates and exclusive early access.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              required
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
            >
              Reserve My Spot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
