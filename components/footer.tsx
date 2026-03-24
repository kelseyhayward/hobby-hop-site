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
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>
          <p className="text-sm text-muted-foreground">
            © 2026 The Hobby Hop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
