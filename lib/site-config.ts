export const HOLIDAY = {
  enabled: true,
  cutoff: "2026-12-10T23:59:59-06:00",
  message: "Order by Thu, Dec 10 for Christmas delivery",
}

export function isHolidayActive() {
  return HOLIDAY.enabled && Date.now() < new Date(HOLIDAY.cutoff).getTime()
}
