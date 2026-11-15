"use client"

import Link from "next/link"
import { Menu, ShoppingBag } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const primaryLinkClass = "rounded-sm font-serif text-2xl text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"

function ClubLabel() {
  return (
    <span className="inline-flex items-center gap-2">
      Hobby Hoppers Club
      <span className="rounded-full bg-secondary px-2 py-0.5 font-sans text-[11px] font-medium leading-none text-primary">SOON</span>
    </span>
  )
}

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex size-8 items-center justify-center rounded-full bg-primary">
        <span className="font-serif text-lg text-primary-foreground">H</span>
      </div>
      <span className="font-serif text-xl text-foreground">The Hobby Hop</span>
    </Link>
  )
}

function ShopBagLink() {
  return (
    <Link href="/shop" aria-label="Shop" className="inline-flex size-11 items-center justify-center rounded-full text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
      <ShoppingBag aria-hidden="true" className="size-5" />
    </Link>
  )
}

export function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar />
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Brand />
          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            <Link href="/#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</Link>
            <Link href="/#club" className="text-sm text-muted-foreground transition-colors hover:text-foreground"><ClubLabel /></Link>
            <Link href="/#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">FAQ</Link>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <ShopBagLink />
            <Link href="/shop" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">Shop Needlepoint</Link>
          </div>
          <div className="flex items-center gap-1 lg:hidden">
            <ShopBagLink />
            <Sheet>
              <SheetTrigger asChild>
                <button type="button" aria-label="Open menu" className="inline-flex size-11 items-center justify-center rounded-full text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                  <Menu aria-hidden="true" className="size-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[88%] border-border bg-background p-6 sm:max-w-sm">
                <SheetHeader className="p-0">
                  <SheetTitle className="sr-only">Site menu</SheetTitle>
                  <SheetDescription className="sr-only">Shop and explore The Hobby Hop.</SheetDescription>
                </SheetHeader>
                <nav aria-label="Mobile navigation" className="flex flex-1 flex-col gap-8 pt-10">
                  <SheetClose asChild>
                    <Link href="/shop" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">Shop Needlepoint</Link>
                  </SheetClose>
                  <div className="flex flex-col gap-6">
                    <SheetClose asChild><Link href="/#how-it-works" className={primaryLinkClass}>How It Works</Link></SheetClose>
                    <SheetClose asChild><Link href="/#club" className={primaryLinkClass}><ClubLabel /></Link></SheetClose>
                    <SheetClose asChild><Link href="/#faq" className={primaryLinkClass}>FAQ</Link></SheetClose>
                  </div>
                  <div className="mt-auto rounded-2xl bg-primary/10 p-5">
                    <p className="font-serif text-xl text-foreground">Want a new hobby every month?</p>
                    <SheetClose asChild>
                      <Link href="/#club" className="mt-3 inline-flex text-sm font-medium text-primary hover:underline">Become a founding Hobby Hopper <span aria-hidden="true" className="ml-1">→</span></Link>
                    </SheetClose>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}
