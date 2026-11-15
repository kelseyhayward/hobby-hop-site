import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { HobbyGrid } from "@/components/hobby-grid"
import { WhatsInTheBox } from "@/components/whats-in-the-box"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { ShopTeaser } from "@/components/shop-teaser"
import { Header } from "@/components/header"
import { MadeByHand } from "@/components/made-by-hand"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ShopTeaser />
        <MadeByHand />
        <WhatsInTheBox />
        <HowItWorks />
        <HobbyGrid />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
