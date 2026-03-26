"use client"

import { useState } from "react"
import { Smartphone, FileText, Video, ShoppingBag, Gamepad2, Gift, LayoutGrid } from "lucide-react"

const categories = [
  { id: "all", name: "All Offers", icon: LayoutGrid, count: 523 },
  { id: "apps", name: "App Downloads", icon: Smartphone, count: 156 },
  { id: "surveys", name: "Surveys", icon: FileText, count: 89 },
  { id: "videos", name: "Watch Videos", icon: Video, count: 45 },
  { id: "shopping", name: "Shopping", icon: ShoppingBag, count: 78 },
  { id: "games", name: "Games", icon: Gamepad2, count: 112 },
  { id: "signup", name: "Sign Up Offers", icon: Gift, count: 43 },
]

export function OfferCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-8 border-b border-border sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "glass hover:bg-secondary"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === category.id
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
