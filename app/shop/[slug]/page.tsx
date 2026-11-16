import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { KitDetail } from "@/components/kit-detail"
import { getPricedProducts } from "@/lib/products"
import { getKitBySlug, KITS } from "@/lib/kits"

export const dynamic = "force-dynamic"

export function generateStaticParams() {
  return KITS.map(({ slug }) => ({ slug }))
}

function getMetaDescription(story: string) {
  const firstSentence = story.match(/.*?[.!?](?:\s|$)/)?.[0]?.trim() ?? story
  return `${firstSentence}`
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const design = getKitBySlug(slug)
  if (!design) return {}

  return {
    title: `${design.name} Needlepoint Kit | The Hobby Hop`,
    description: `${design.tagline} ${getMetaDescription(design.story[0])}`,
    openGraph: {
      title: `${design.name} Needlepoint Kit | The Hobby Hop`,
      description: `${design.tagline} ${getMetaDescription(design.story[0])}`,
      images: [{ url: design.images.kit, alt: `${design.name} starter kit` }],
    },
  }
}

type KitPageProps = {
  params: Promise<{ slug: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function KitPage({ params, searchParams }: KitPageProps) {
  const [{ slug }, query] = await Promise.all([params, searchParams])
  const design = getKitBySlug(slug)
  if (!design) notFound()

  const products = await getPricedProducts()
  const priceByKey = new Map(products.map((product) => [product.key, product.priceInCents]))
  const requestedOption = Array.isArray(query.option) ? query.option[0] : query.option

  return <><Header /><KitDetail
    design={design}
    initialOption={requestedOption === "canvas" ? "canvas" : "kit"}
    kitPriceInCents={priceByKey.get(design.kitProduct.key) ?? design.kitProduct.priceInCents}
    canvasPriceInCents={priceByKey.get(design.canvasOnlyProduct.key) ?? design.canvasOnlyProduct.priceInCents}
  /><Footer /></>
}
