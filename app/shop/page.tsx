import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopClient } from "@/components/shop-client"
import { getPricedProducts } from "@/lib/products"

export const revalidate = 600

export default async function ShopPage() {
  const products = await getPricedProducts()
  return <><Header /><ShopClient products={products} /><Footer /></>
}
