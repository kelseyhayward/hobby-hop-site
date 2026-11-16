"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function EarlyAccess() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const emailInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  useEffect(() => {
    let timeoutId: number | undefined
    const focusWaitlist = () => {
      if (window.location.pathname !== "/" || !["#club", "#waitlist"].includes(window.location.hash)) return
      timeoutId = window.setTimeout(() => {
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth", block: "center" })
        if (window.matchMedia("(min-width: 1024px)").matches) {
          emailInputRef.current?.focus({ preventScroll: true })
        }
      }, 80)
    }
    const focusFromAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest("a[href]")
      if (!anchor) return
      const target = new URL(anchor.getAttribute("href") ?? "", window.location.href)
      if (target.origin === window.location.origin && target.pathname === "/" && ["#club", "#waitlist"].includes(target.hash)) focusWaitlist()
    }
    focusWaitlist()
    window.addEventListener("hashchange", focusWaitlist)
    document.addEventListener("click", focusFromAnchorClick)
    return () => {
      window.removeEventListener("hashchange", focusWaitlist)
      document.removeEventListener("click", focusFromAnchorClick)
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="w-full">
      {isSubmitted ? (
        <p className="rounded-2xl bg-background/70 p-6 leading-relaxed text-foreground" role="status">
          Welcome, founding Hobby Hopper! You&apos;ll be the first to hear when the Club opens. <Link href="/shop" className="font-medium text-primary underline underline-offset-4">While you wait → Shop needlepoint kits</Link>
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-3">
          <label htmlFor="waitlist-email" className="text-sm font-medium text-foreground">Email address</label>
          <input
            ref={emailInputRef}
            id="waitlist-email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-border bg-card px-5 py-4 text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            required
          />
          <button type="submit" className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-opacity hover:opacity-90 group">
            Join the Waitlist
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      )}
    </div>
  )
}
