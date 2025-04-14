import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturesSection from "@/components/features-section"
import OfferSection from "@/components/offer-section"
import SafeguardSection from "@/components/safeguard-section"
import ApplicationSection from "@/components/application-section"
import TokenomicsSection from "@/components/tokenomics-section"
import RoadmapSection from "@/components/roadmap-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[1200px] px-4">
        <Header />
        <Hero />
      </div>
      <FeaturesSection />
      <OfferSection />
      <SafeguardSection />
      <ApplicationSection />
      <TokenomicsSection />
      <RoadmapSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
