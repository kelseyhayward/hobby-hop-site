"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const hobbies = [
  { name: "Crochet", image: "/images/crochet.jpg" },
  { name: "Sourdough", image: "/images/sourdough.jpg" },
  { name: "Watercolor", image: "/images/watercolor.jpg" },
  { name: "Candle Making", image: "/images/candle-making.jpg" },
  { name: "Tea Tasting", image: "/images/tea-tasting.jpg" },
  { name: "Puzzling", image: "/images/puzzles.jpg" },
  { name: "Calligraphy", image: "/images/calligraphy.jpg" },
  { name: "Reading", image: "/images/reading.jpg" },
]

const foundingBenefits = [
  "First access when the Club opens",
  "Founding-member early-bird pricing",
  "Help choose the hobbies that come next",
]

export function HobbyGrid() {
  const emailRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const focusForHash = () => {
      if (window.location.hash !== "#club" && window.location.hash !== "#waitlist") return
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      panelRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" })
      if (window.matchMedia("(min-width: 768px)").matches) {
        window.requestAnimationFrame(() => emailRef.current?.focus({ preventScroll: true }))
      }
    }
    focusForHash()
    window.addEventListener("hashchange", focusForHash)
    return () => window.removeEventListener("hashchange", focusForHash)
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    try {
      setLoading(true)
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) throw new Error("Waitlist submission failed")
      setSubmitted(true)
      setEmail("")
    } catch {
      setError("We couldn’t add you just yet. Please try again in a moment.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="club" className="scroll-mt-32 bg-secondary/50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Coming Soon</p>
          <h2 className="font-serif text-4xl md:text-5xl">The Hobby Hoppers Club</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A new beginner kit at your door every month. We&apos;re opening the Club to founding members first.
          </p>
        </div>

        <div id="hobbies" className="scroll-mt-32 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {[{ name: "Needlepoint", image: "/images/kit-martini.jpg", available: true }, ...hobbies.map((hobby) => ({ ...hobby, available: false }))].map(({ name, image, available }) => (
            <article key={name} className={`overflow-hidden rounded-2xl border-2 bg-card ${available ? "border-primary" : "border-transparent"}`}>
              <div className="relative aspect-[4/3]">
                <Image src={image} alt={name} fill className="object-cover" />
                {available ? (
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Available now</span>
                ) : (
                  <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-xs text-muted-foreground">Coming soon</span>
                )}
              </div>
              <div className="flex items-center justify-between gap-2 p-4">
                <h3 className="font-serif text-lg md:text-xl">{name}</h3>
                {available && <Link href="/shop" className="shrink-0 text-sm font-medium text-primary underline underline-offset-2">Shop →</Link>}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">And many more to come…</p>

        <div ref={panelRef} id="waitlist" className="scroll-mt-32 mt-12 grid gap-8 rounded-3xl bg-primary/10 p-6 md:grid-cols-2 md:p-10">
          <div>
            <h3 className="font-serif text-3xl">Become a founding Hobby Hopper</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {foundingBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            {submitted ? (
              <div className="rounded-2xl bg-background/70 p-6" role="status">
                <p className="font-serif text-xl text-foreground">Welcome, founding Hobby Hopper!</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">You&apos;ll be the first to hear when the Club opens.</p>
                <Link href="/shop" className="mt-4 inline-flex min-h-11 items-center gap-2 font-medium text-primary underline underline-offset-2">
                  While you wait → Shop needlepoint kits
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="waitlist-email" className="text-sm font-medium">Email address</label>
                <input
                  ref={emailRef}
                  id="waitlist-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-12 w-full rounded-full border border-border bg-background px-5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "waitlist-error" : undefined}
                />
                {error && <p id="waitlist-error" role="alert" className="text-sm text-destructive">{error}</p>}
                <button type="submit" disabled={loading} aria-busy={loading} className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70">
                  Join the Waitlist
                </button>
                <p className="text-center text-xs text-muted-foreground">No spam, just the occasional hobby hop.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
