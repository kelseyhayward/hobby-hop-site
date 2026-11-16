import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { HobbyGrid } from "@/components/hobby-grid"
import { WhatsInTheBox } from "@/components/whats-in-the-box"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { ShopTeaser } from "@/components/shop-teaser"
import { OurStory } from "@/components/our-story"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ShopTeaser />
      <OurStory />
      <WhatsInTheBox />
      <HowItWorks />
      <HobbyGrid />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
