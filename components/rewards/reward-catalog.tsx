"use client"

import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

const rewards = [
  {
    id: 1,
    name: "PayPal Cash",
    category: "cash",
    description: "Get cash sent directly to your PayPal account",
    points: [5000, 10000, 25000, 50000],
    values: ["$5", "$10", "$25", "$50"],
    popular: true,
    instant: true,
  },
  {
    id: 2,
    name: "Amazon Gift Card",
    category: "shopping",
    description: "Shop millions of items on Amazon",
    points: [5000, 10000, 25000],
    values: ["$5", "$10", "$25"],
    popular: true,
    instant: true,
  },
  {
    id: 3,
    name: "Steam Wallet",
    category: "gaming",
    description: "Add funds to your Steam account",
    points: [5000, 10000, 20000, 50000],
    values: ["$5", "$10", "$20", "$50"],
    popular: true,
    instant: true,
  },
  {
    id: 4,
    name: "Bitcoin",
    category: "crypto",
    description: "Receive BTC to your wallet",
    points: [10000, 25000, 50000],
    values: ["$10", "$25", "$50"],
    popular: false,
    instant: true,
  },
  {
    id: 5,
    name: "Netflix Gift Card",
    category: "entertainment",
    description: "Stream your favorite shows and movies",
    points: [15000, 30000],
    values: ["$15", "$30"],
    popular: true,
    instant: true,
  },
  {
    id: 6,
    name: "Uber Eats",
    category: "food",
    description: "Order food from local restaurants",
    points: [10000, 25000],
    values: ["$10", "$25"],
    popular: false,
    instant: true,
  },
  {
    id: 7,
    name: "Xbox Gift Card",
    category: "gaming",
    description: "Buy games and content on Xbox",
    points: [10000, 25000, 50000],
    values: ["$10", "$25", "$50"],
    popular: true,
    instant: true,
  },
  {
    id: 8,
    name: "Spotify Premium",
    category: "entertainment",
    description: "Listen to ad-free music",
    points: [10000, 30000],
    values: ["$10", "$30"],
    popular: false,
    instant: true,
  },
  {
    id: 9,
    name: "Visa Prepaid Card",
    category: "cash",
    description: "Use anywhere Visa is accepted",
    points: [10000, 25000, 50000],
    values: ["$10", "$25", "$50"],
    popular: true,
    instant: false,
  },
  {
    id: 10,
    name: "DoorDash",
    category: "food",
    description: "Get food delivered to your door",
    points: [10000, 25000],
    values: ["$10", "$25"],
    popular: false,
    instant: true,
  },
  {
    id: 11,
    name: "Ethereum",
    category: "crypto",
    description: "Receive ETH to your wallet",
    points: [10000, 25000, 50000],
    values: ["$10", "$25", "$50"],
    popular: false,
    instant: true,
  },
  {
    id: 12,
    name: "PlayStation Store",
    category: "gaming",
    description: "Buy games on PlayStation",
    points: [10000, 25000, 50000],
    values: ["$10", "$25", "$50"],
    popular: true,
    instant: true,
  },
]

export function RewardCatalog() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Reward Catalog</h2>
            <p className="text-muted-foreground">Choose from our wide selection of rewards</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="bg-secondary text-foreground px-3 py-2 rounded-lg text-sm border border-border">
              <option>Most Popular</option>
              <option>Lowest Points</option>
              <option>A-Z</option>
            </select>
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform group relative"
            >
              {/* Badges */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                {reward.popular && (
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                    Popular
                  </span>
                )}
                {reward.instant && (
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-medium flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Instant
                  </span>
                )}
              </div>

              {/* Icon Placeholder */}
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-muted-foreground">
                  {reward.name.charAt(0)}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-1">{reward.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>

              {/* Value Options */}
              <div className="flex flex-wrap gap-2 mb-4">
                {reward.values.map((value, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 rounded-lg bg-secondary text-foreground"
                  >
                    {value}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  From <span className="text-primary font-bold">{reward.points[0].toLocaleString()} pts</span>
                </span>
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Redeem
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
