"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) return

    try {
      setIsLoading(true)

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        throw new Error("Failed to submit")
      }

      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Coming Soon</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
              Try a New Hobby Every Month
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Choose a hobby, receive a starter kit, and discover your next favorite obsession.
            </p>

            {isSubmitted ? (
              <div className="bg-secondary p-6 rounded-2xl max-w-md">
                <p className="text-foreground font-medium">
                  You&apos;re on the list! We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group disabled:opacity-60"
                >
                  {isLoading ? "Joining..." : "Join the Waitlist"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-accent border-2 border-background flex items-center justify-center text-xs font-medium text-accent-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">2,000+</span> hobby explorers already joined
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/hero-hobbies.jpg"
                alt="Colorful hobby supplies including yarn, watercolors, and artisan objects"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border border-border">
              <p className="text-sm text-muted-foreground">This month&apos;s favorite</p>
              <p className="font-serif text-lg text-foreground">Watercolor Painting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
