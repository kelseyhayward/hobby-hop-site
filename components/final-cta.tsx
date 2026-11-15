"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { HOLIDAY, isHolidayActive } from "@/lib/site-config"

export function FinalCTA() {
  const [holidayActive, setHolidayActive] = useState(false)
  useEffect(() => setHolidayActive(isHolidayActive()), [])
  return <section className="px-6 py-20"><div className="mx-auto max-w-5xl rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-14 md:py-16"><p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-foreground/80">For the holidays</p><h2 className="font-serif text-4xl md:text-5xl">Give the gift of a new hobby</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">A hand-painted, beginner-friendly needlepoint kit for the friend who&apos;s always wanted to try something new.</p>{holidayActive && <p className="mt-4 font-semibold">{HOLIDAY.message}</p>}<div className="mt-8 flex flex-col items-center gap-5"><Link href="/shop" className="inline-flex min-h-12 items-center justify-center rounded-full bg-background px-7 py-3 font-medium text-primary transition-opacity hover:opacity-90">Shop Needlepoint Kits</Link><Link href="/#club" className="text-sm text-primary-foreground underline underline-offset-4">Or join the Hobby Hoppers Club waitlist</Link></div></div></section>
}
