import { Metadata } from "next"
import { EarnHero } from "@/components/earn/earn-hero"
import { OfferCategories } from "@/components/earn/offer-categories"
import { FeaturedOffers } from "@/components/earn/featured-offers"
import { OfferWall } from "@/components/earn/offer-wall"
import { EarnTips } from "@/components/earn/earn-tips"

export const metadata: Metadata = {
  title: "Earn Points - RewardVault",
  description: "Browse and complete offers to earn points. Download apps, take surveys, watch videos, and more to earn real rewards.",
}

export default function EarnPage() {
  return (
    <>
      <EarnHero />
      <OfferCategories />
      <FeaturedOffers />
      <OfferWall />
      <EarnTips />
    </>
  )
}
