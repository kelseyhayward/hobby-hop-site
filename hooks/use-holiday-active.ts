"use client"

import { useEffect, useState } from "react"
import { isHolidayActive } from "@/lib/site-config"

export function useHolidayActive() {
  const [holidayActive, setHolidayActive] = useState(false)

  useEffect(() => {
    const updateHolidayStatus = () => setHolidayActive(isHolidayActive())
    updateHolidayStatus()
    const intervalId = window.setInterval(updateHolidayStatus, 30_000)

    return () => window.clearInterval(intervalId)
  }, [])

  return holidayActive
}
