"use client"

import Link from "next/link"
import { HOLIDAY } from "@/lib/site-config"
import { useHolidayActive } from "@/hooks/use-holiday-active"

export function FinalCTA() {
  const holidayActive = useHolidayActive()

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-primary p-10 text-center md:p-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-foreground">For the holidays</p>
          <h2 className="mb-6 font-serif text-4xl text-primary-foreground text-balance md:text-5xl">Give the gift of a new hobby</h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">A hand-painted, beginner-friendly needlepoint kit for the friend who&apos;s always wanted to try something new.</p>
          {holidayActive && <p className="mb-8 font-semibold text-primary-foreground">{HOLIDAY.message}</p>}
          <div className="flex flex-col items-center gap-4">
            <Link href="/shop" className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3 font-medium text-primary transition-opacity hover:opacity-90">Shop Needlepoint Kits</Link>
            <Link href="/#club" className="text-sm text-primary-foreground underline underline-offset-4 hover:opacity-80">Or join the Hobby Hoppers Club waitlist</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
