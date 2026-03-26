import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PartnersSection } from "@/components/home/partners-section"
import { CTASection } from "@/components/home/cta-section"
import { LiveActivityTicker } from "@/components/home/live-activity-ticker"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LiveActivityTicker />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  )
}
