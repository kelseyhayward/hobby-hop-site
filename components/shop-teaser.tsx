import Image from "next/image"
import Link from "next/link"

const kits = [["The Gingham Martini", "/images/kit-martini.jpg"], ["Market Berries", "/images/kit-berries.jpg"], ["The Gingerbread Cottage", "/images/kit-gingerbread.jpg"]]

export function ShopTeaser() {
  return <section className="bg-secondary/50 px-6 py-20"><div className="mx-auto max-w-6xl"><div className="mb-10 text-center"><p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Now shipping</p><h2 className="font-serif text-4xl md:text-5xl">A little something to stitch</h2></div><div className="grid gap-5 md:grid-cols-3">{kits.map(([name, image]) => <Link key={name} href="/shop" className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg"><div className="relative aspect-[4/3]"><Image src={image} alt={name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-5"><p className="font-serif text-xl text-foreground">{name}</p><p className="mt-1 text-sm text-muted-foreground">Starter Kit · $40</p></div></Link>)}</div><div className="mt-9 flex flex-col items-center gap-3"><Link href="/shop" className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">Shop all kits</Link><p className="text-center text-sm text-muted-foreground">Extra canvases sold separately, $20 each (threads not included).</p></div></div></section>
}
