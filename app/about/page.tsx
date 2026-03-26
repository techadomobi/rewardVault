import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutStats } from "@/components/about/about-stats"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Us - RewardVault",
  description: "Learn about RewardVault, our mission to help people earn real rewards, and the team behind the platform.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </>
  )
}
