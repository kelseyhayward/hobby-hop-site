"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useHolidayActive } from "@/hooks/use-holiday-active"
import { HOLIDAY } from "@/lib/site-config"

const STANDARD_MESSAGE = "Hand-painted needlepoint kits, now shipping"

export function AnnouncementBar() {
  const holidayActive = useHolidayActive()
  const message = holidayActive ? HOLIDAY.message : STANDARD_MESSAGE
  const storageKey = `hobby-hop-announcement-dismissed:${message}`
  const [dismissedMessage, setDismissedMessage] = useState<string | null>(null)

  useEffect(() => {
    try {
      setDismissedMessage(window.localStorage.getItem(storageKey) === "true" ? message : null)
    } catch {
      setDismissedMessage(null)
    }
  }, [message, storageKey])

  const dismiss = () => {
    setDismissedMessage(message)
    try {
      window.localStorage.setItem(storageKey, "true")
    } catch {
      // Dismissal remains active for the current page view when storage is unavailable.
    }
  }

  if (dismissedMessage === message) return null

  return (
    <div className="relative flex min-h-11 items-center justify-center bg-primary px-12 py-2 text-center text-xs text-background sm:text-sm">
      <p>
        {holidayActive ? <span className="font-semibold">{message}</span> : message}
        <span aria-hidden="true"> · </span>
        <Link href="/shop" className="font-medium underline-offset-2 hover:underline">
          Shop now <span aria-hidden="true">→</span>
        </Link>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-0 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center text-lg hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
      >
        ×
      </button>
    </div>
  )
}
