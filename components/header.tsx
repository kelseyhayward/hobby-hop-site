"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, X } from "lucide-react"
import { HOLIDAY, isHolidayActive } from "@/lib/site-config"

const standardAnnouncement = "Hand-painted needlepoint kits, now shipping"

const navigation = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Hobby Hoppers Club", href: "/#club", soon: true },
  { label: "FAQ", href: "/#faq" },
]

function AnnouncementBar() {
  const [message, setMessage] = useState(standardAnnouncement)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const nextMessage = isHolidayActive() ? HOLIDAY.message : standardAnnouncement
    setMessage(nextMessage)
    try {
      setVisible(window.localStorage.getItem(`hobby-hop-announcement-dismissed:${nextMessage}`) !== "true")
    } catch {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    try {
      window.localStorage.setItem(`hobby-hop-announcement-dismissed:${message}`, "true")
    } catch {
      // Keep the current dismissal effective when browser storage is unavailable.
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative flex min-h-11 items-center justify-center bg-primary py-2 pl-3 pr-12 text-center text-xs text-primary-foreground sm:px-14 sm:text-sm">
      <p>
        <strong className="font-semibold">{message}</strong>
        <span aria-hidden="true"> · </span>
        <Link href="/shop" className="underline underline-offset-4">Shop now</Link>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-1 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full transition-colors hover:bg-primary-foreground/15 sm:right-2"
      >
        <X className="size-4" aria-hidden="true" />
      </button>
    </div>
  )
}

function ClubBadge() {
  return <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium tracking-wide text-primary">SOON</span>
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <AnnouncementBar />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="The Hobby Hop home">
          <span className="grid size-8 place-items-center rounded-full bg-primary font-serif text-lg text-primary-foreground" aria-hidden="true">H</span>
          <span className="font-serif text-xl text-foreground">The Hobby Hop</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map(({ label, href, soon }) => (
            <Link key={label} href={href} className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground">
              {label}{soon && <ClubBadge />}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link href="/shop" aria-label="Shopping bag — shop kits" title="Shop kits" className="grid size-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary">
            <ShoppingBag className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/shop" className="hidden min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex">
            Shop Needlepoint
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {menuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="max-h-[calc(100dvh-7rem)] overflow-y-auto border-t border-border bg-background px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            <Link href="/shop" onClick={closeMenu} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Shop Needlepoint
            </Link>
            <ul className="flex flex-col">
              {navigation.map(({ label, href, soon }) => (
                <li key={label}>
                  <Link href={href} onClick={closeMenu} className="flex min-h-14 items-center justify-between gap-3 rounded-xl px-3 font-serif text-2xl text-foreground hover:bg-secondary">
                    {label}{soon && <ClubBadge />}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-primary/10 p-5">
              <p className="font-serif text-lg">Want a new hobby every month?</p>
              <Link href="/#club" onClick={closeMenu} className="mt-2 inline-flex min-h-11 items-center font-medium text-primary underline underline-offset-2">
                Become a founding Hobby Hopper →
              </Link>
            </div>
          </div>
      </nav>
    </header>
  )
}
