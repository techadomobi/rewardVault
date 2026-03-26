"use client"

import { useState } from "react"
import { LayoutGrid, CreditCard, Gamepad2, ShoppingBag, Utensils, Film, Bitcoin } from "lucide-react"

const categories = [
  { id: "all", name: "All Rewards", icon: LayoutGrid },
  { id: "cash", name: "Cash Out", icon: CreditCard },
  { id: "gaming", name: "Gaming", icon: Gamepad2 },
  { id: "shopping", name: "Shopping", icon: ShoppingBag },
  { id: "food", name: "Food & Dining", icon: Utensils },
  { id: "entertainment", name: "Entertainment", icon: Film },
  { id: "crypto", name: "Cryptocurrency", icon: Bitcoin },
]

export function RewardCategories() {
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
                  ? "bg-accent text-accent-foreground"
                  : "glass hover:bg-secondary"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
