import Image from "next/image"
import Link from "next/link"

const kits = [
  ["The Gingham Martini", "/images/kit-martini.jpg"],
  ["Market Berries", "/images/kit-berries.jpg"],
  ["The Gingerbread Cottage", "/images/kit-gingerbread.jpg"],
]

export function ShopTeaser() {
  return <section className="bg-secondary/50 px-6 py-24"><div className="mx-auto max-w-6xl"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Now shipping</p><h2 className="font-serif text-4xl md:text-5xl">A little something to stitch</h2></div><Link href="/shop" className="w-fit rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">Shop the kits</Link></div><div className="grid gap-4 md:grid-cols-3">{kits.map(([name, image]) => <div key={name} className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src={image} alt={name} fill className="object-cover transition-transform duration-500 hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-5 pt-14"><p className="font-serif text-xl text-card">{name}</p></div></div>)}</div></div></section>
}
