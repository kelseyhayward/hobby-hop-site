import Link from "next/link"

export function ShopClubBand() {
  return (
    <aside className="mx-auto mb-12 flex max-w-6xl flex-col items-start justify-between gap-2 rounded-2xl bg-primary/10 px-6 py-5 sm:flex-row sm:items-center">
      <p className="text-sm text-foreground">Want a new hobby every month? The Hobby Hoppers Club is coming soon.</p>
      <Link href="/#club" className="shrink-0 text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80">Become a founding member →</Link>
    </aside>
  )
}
