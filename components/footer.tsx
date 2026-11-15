import Link from "next/link"

const footerLinkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:underline focus-visible:underline-offset-2"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex items-center gap-2 self-start">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary">
            <span className="font-serif text-lg text-primary-foreground">H</span>
          </div>
          <span className="font-serif text-xl text-foreground">The Hobby Hop</span>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          <nav aria-label="Shop" className="flex flex-col items-start gap-3">
            <h2 className="text-sm font-medium text-foreground">Shop</h2>
            <Link href="/shop" className={footerLinkClass}>Needlepoint Kits</Link>
            <Link href="/shop#canvases" className={footerLinkClass}>Extra Canvases</Link>
          </nav>
          <nav aria-label="The Club" className="flex flex-col items-start gap-3">
            <h2 className="text-sm font-medium text-foreground">The Club</h2>
            <Link href="/#club" className={footerLinkClass}>Join the Waitlist</Link>
            <Link href="/#how-it-works" className={footerLinkClass}>How It Works</Link>
          </nav>
          <nav aria-label="Help" className="flex flex-col items-start gap-3">
            <h2 className="text-sm font-medium text-foreground">Help</h2>
            <Link href="/#faq" className={footerLinkClass}>FAQ</Link>
            <Link href="/shipping-policy" className={footerLinkClass}>Shipping</Link>
            <Link href="/refund-policy" className={footerLinkClass}>Returns</Link>
            <Link href="/privacy-policy" className={footerLinkClass}>Privacy</Link>
            <Link href="/terms" className={footerLinkClass}>Terms</Link>
            <a href="mailto:TheHobbyHoppersClub@gmail.com" className={footerLinkClass}>Email us</a>
          </nav>
          <div className="flex flex-col items-start gap-3 text-primary">
            <h2 className="text-sm font-medium text-foreground">Follow us</h2>
            <nav aria-label="Follow The Hobby Hop" className="-ml-2 flex items-center">
              <a href="https://www.instagram.com/thehobbyhopclub" target="_blank" rel="noopener noreferrer" aria-label="The Hobby Hop on Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.8" r=".8" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.tiktok.com/@thehobbyhopclub" target="_blank" rel="noopener noreferrer" aria-label="The Hobby Hop on TikTok" className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M14 4v10.2a4.2 4.2 0 1 1-3.4-4.1"/><path d="M14 4c.5 3 2.4 4.8 5.5 5"/></svg>
              </a>
              <a href="https://www.youtube.com/@TheHobbyHop" target="_blank" rel="noopener noreferrer" aria-label="The Hobby Hop on YouTube" className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="3" y="5" width="18" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/></svg>
              </a>
              <a href="https://www.pinterest.com/TheHobbyHop" target="_blank" rel="noopener noreferrer" aria-label="The Hobby Hop on Pinterest" className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 21a9 9 0 1 0-4.2-1l1.4-5.4"/><path d="M9.2 14.6c.6 1.1 1.6 1.6 2.9 1.6 2.6 0 4.3-2 4.3-4.7 0-2.2-1.8-4-4.5-4-3.2 0-4.9 2.1-4.9 4.5 0 1.1.4 2.1 1.3 2.5"/><path d="m10.6 17.2 1.1-4.2"/></svg>
              </a>
            </nav>
          </div>
        </div>
        <p className="border-t border-border pt-6 text-sm text-muted-foreground">© 2026 AML Strategies LLC d/b/a The Hobby Hop. All rights reserved.</p>
      </div>
    </footer>
  )
}
