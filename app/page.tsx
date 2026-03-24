import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { HobbyGrid } from "@/components/hobby-grid"
import { WhatsInTheBox } from "@/components/whats-in-the-box"
import { EarlyAccess } from "@/components/early-access"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      <HobbyGrid />
      <WhatsInTheBox />
      <EarlyAccess />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
