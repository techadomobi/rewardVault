import { Metadata } from "next"
import { RewardsHero } from "@/components/rewards/rewards-hero"
import { RewardCategories } from "@/components/rewards/reward-categories"
import { RewardCatalog } from "@/components/rewards/reward-catalog"
import { RecentRedemptions } from "@/components/rewards/recent-redemptions"

export const metadata: Metadata = {
  title: "Rewards - RewardVault",
  description: "Redeem your points for gift cards, PayPal cash, crypto, and more. Browse our catalog of 100+ reward options.",
}

export default function RewardsPage() {
  return (
    <>
      <RewardsHero />
      <RewardCategories />
      <RewardCatalog />
      <RecentRedemptions />
    </>
  )
}
