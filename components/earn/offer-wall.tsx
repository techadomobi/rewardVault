"use client"

import { Button } from "@/components/ui/button"
import { Star, Clock, Smartphone, FileText, Video, ShoppingBag, Gamepad2, Gift } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Coin Master",
    category: "games",
    icon: Gamepad2,
    description: "Reach Village Level 7",
    points: 2500,
    time: "5 days",
    rating: 4.7,
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Consumer Survey",
    category: "surveys",
    icon: FileText,
    description: "Share your opinions on daily products",
    points: 150,
    time: "8 min",
    rating: 4.3,
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "TikTok",
    category: "apps",
    icon: Smartphone,
    description: "Download and watch 5 videos",
    points: 800,
    time: "15 min",
    rating: 4.9,
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Amazon Shopping",
    category: "shopping",
    icon: ShoppingBag,
    description: "Make a purchase of $25+",
    points: 1200,
    time: "Varies",
    rating: 4.8,
    difficulty: "Medium",
  },
  {
    id: 5,
    title: "Video Rewards",
    category: "videos",
    icon: Video,
    description: "Watch 10 promotional videos",
    points: 100,
    time: "20 min",
    rating: 4.0,
    difficulty: "Easy",
  },
  {
    id: 6,
    title: "ExpressVPN Trial",
    category: "signup",
    icon: Gift,
    description: "Start a 7-day free trial",
    points: 2000,
    time: "5 min",
    rating: 4.6,
    difficulty: "Easy",
  },
  {
    id: 7,
    title: "State of Survival",
    category: "games",
    icon: Gamepad2,
    description: "Reach HQ Level 20",
    points: 4500,
    time: "14 days",
    rating: 4.5,
    difficulty: "Hard",
  },
  {
    id: 8,
    title: "Market Research",
    category: "surveys",
    icon: FileText,
    description: "Complete a detailed market research survey",
    points: 500,
    time: "25 min",
    rating: 4.4,
    difficulty: "Medium",
  },
  {
    id: 9,
    title: "Uber Eats",
    category: "apps",
    icon: Smartphone,
    description: "Place your first order",
    points: 1500,
    time: "1 day",
    rating: 4.8,
    difficulty: "Easy",
  },
  {
    id: 10,
    title: "Walmart Cashback",
    category: "shopping",
    icon: ShoppingBag,
    description: "Shop $50+ and earn cashback",
    points: 2000,
    time: "Varies",
    rating: 4.7,
    difficulty: "Medium",
  },
  {
    id: 11,
    title: "Discovery Survey",
    category: "surveys",
    icon: FileText,
    description: "Quick lifestyle questions",
    points: 75,
    time: "5 min",
    rating: 4.2,
    difficulty: "Easy",
  },
  {
    id: 12,
    title: "NordVPN",
    category: "signup",
    icon: Gift,
    description: "Subscribe to any plan",
    points: 5500,
    time: "10 min",
    rating: 4.9,
    difficulty: "Easy",
  },
]

const difficultyColors: Record<string, string> = {
  Easy: "text-primary bg-primary/10",
  Medium: "text-yellow-500 bg-yellow-500/10",
  Hard: "text-accent bg-accent/10",
}

export function OfferWall() {
  return (
    <section className="py-12 md:py-16 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">All Offers</h2>
            <p className="text-muted-foreground">Browse all available offers and start earning</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="bg-secondary text-foreground px-3 py-2 rounded-lg text-sm border border-border">
              <option>Highest Points</option>
              <option>Easiest First</option>
              <option>Newest</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="glass rounded-xl p-4 hover:bg-secondary/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <offer.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{offer.description}</p>
                  
                  {/* Meta */}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {offer.time}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      {offer.rating}
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColors[offer.difficulty]}`}>
                      {offer.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div className="text-lg font-bold text-primary">{offer.points.toLocaleString()} pts</div>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity">
                  Start
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="px-8">
            Load More Offers
          </Button>
        </div>
      </div>
    </section>
  )
}
