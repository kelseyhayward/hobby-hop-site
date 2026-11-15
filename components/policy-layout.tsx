import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function PolicyLayout({ title, children }: { title: string; children: ReactNode }) {
  return <><Header /><main className="mx-auto w-full max-w-[720px] px-6 pb-24 pt-36"><h1 className="font-serif text-4xl md:text-5xl">{title}</h1><p className="mt-3 text-sm text-muted-foreground">Effective November 14, 2026</p><div className="mt-8 flex flex-col gap-5 leading-8 text-foreground">{children}</div></main><Footer /></>
}

export function PolicyEmail() {
  return <a className="underline underline-offset-4" href="mailto:TheHobbyHoppersClub@gmail.com">TheHobbyHoppersClub@gmail.com</a>
}
