import Link from "next/link"

const columns = [
  { title: "Shop", links: [{ label: "Needlepoint Kits", href: "/shop" }, { label: "Extra Canvases", href: "/shop#canvases" }] },
  { title: "The Club", links: [{ label: "Join the Waitlist", href: "/#club" }, { label: "How It Works", href: "/#how-it-works" }] },
  { title: "Help", links: [{ label: "FAQ", href: "/#faq" }, { label: "Shipping", href: "/shipping-policy" }, { label: "Returns", href: "/refund-policy" }, { label: "Privacy", href: "/privacy-policy" }, { label: "Terms", href: "/terms" }, { label: "Email us", href: "mailto:TheHobbyHoppersClub@gmail.com" }] },
]

export function Footer() {
  return <footer className="border-t border-border px-6 py-12"><div className="mx-auto max-w-6xl"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><Link href="/" className="flex h-fit items-center gap-2"><span className="grid size-8 place-items-center rounded-full bg-primary font-serif text-lg text-primary-foreground">H</span><span className="font-serif text-xl">The Hobby Hop</span></Link>{columns.map((column) => <nav key={column.title} aria-label={column.title}><h2 className="mb-4 text-sm font-semibold">{column.title}</h2><ul className="flex flex-col gap-3">{column.links.map((link) => <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">{link.label}</Link></li>)}</ul></nav>)}</div><p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">© 2026 AML Strategies LLC d/b/a The Hobby Hop. All rights reserved.</p></div></footer>
}
