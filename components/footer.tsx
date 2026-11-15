import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg">H</span>
            </div>
            <span className="font-serif text-xl text-foreground">The Hobby Hop</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#hobbies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Hobbies
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shop</Link>
          </nav>
          <div className="flex items-center gap-4 text-sm text-muted-foreground"><Link href="/shipping-policy" className="hover:text-foreground">Shipping</Link><Link href="/refund-policy" className="hover:text-foreground">Returns</Link><Link href="/privacy-policy" className="hover:text-foreground">Privacy</Link><Link href="/terms" className="hover:text-foreground">Terms</Link><a href="mailto:TheHobbyHoppersClub@gmail.com" className="hover:text-foreground">Email</a></div>
          <div className="flex flex-col items-center gap-2 text-primary">
            <span className="text-sm text-muted-foreground">Follow us</span>
            <nav aria-label="Follow The Hobby Hop" className="flex items-center">
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
          <p className="text-sm text-muted-foreground">© 2026 AML Strategies LLC d/b/a The Hobby Hop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
