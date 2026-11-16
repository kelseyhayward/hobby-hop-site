import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopClient } from "@/components/shop-client"
import { getPricedProducts } from "@/lib/products"
import { ShopClubBand } from "@/components/shop-club-band"

export const dynamic = "force-dynamic"

export default async function ShopPage() {
  const products = await getPricedProducts()
  return <><Header /><ShopClient products={products} /><ShopClubBand /><Footer /></>
}
