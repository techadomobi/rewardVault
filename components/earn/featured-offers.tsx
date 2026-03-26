"use client"

import { Button } from "@/components/ui/button"
import { Star, Clock, Zap, ArrowRight, Flame } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const featuredOffers = [
  {
    id: 1,
    title: "Raid: Shadow Legends",
    category: "Mobile Game",
    description: "Download and reach level 15 to earn massive points!",
    points: 5000,
    time: "7 days",
    rating: 4.8,
    featured: true,
    hot: true,
    gradient: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 2,
    title: "Swagbucks Survey",
    category: "Survey",
    description: "Complete a 10-minute survey about your shopping habits.",
    points: 250,
    time: "10 min",
    rating: 4.5,
    featured: true,
    hot: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Cash App",
    category: "Finance App",
    description: "Sign up and make your first transaction to earn.",
    points: 3500,
    time: "1 day",
    rating: 4.9,
    featured: true,
    hot: true,
    gradient: "from-accent/20 to-amber-500/20",
  },
]

function OfferCard({ 
  offer, 
  index,
  isVisible 
}: { 
  offer: typeof featuredOffers[0]
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`
        group glass-card rounded-2xl p-6 relative overflow-hidden cursor-pointer
        transition-all duration-500 ease-out
        hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Hot Badge */}
      {offer.hot && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent to-orange-500 text-white text-xs font-bold z-10 animate-pulse-glow">
          <Flame className="w-3 h-3" />
          HOT
        </div>
      )}

      <div className="relative z-10">
        {/* Category */}
        <span className="inline-block text-xs text-primary font-semibold uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
          {offer.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
          {offer.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4">{offer.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {offer.time}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            {offer.rating}
          </div>
        </div>

        {/* Points & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">Earn</span>
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform origin-left">
              {offer.points.toLocaleString()} <span className="text-sm font-normal">pts</span>
            </div>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group/btn relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Start
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl border border-primary/30" />
      </div>
    </div>
  )
}

export function FeaturedOffers() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          className={`
            flex items-center justify-between mb-8
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
              Featured Offers
              <Zap className="w-6 h-6 text-primary animate-pulse" />
            </h2>
            <p className="text-muted-foreground">Hand-picked high-value offers just for you</p>
          </div>
          <Button 
            variant="ghost" 
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 group"
          >
            View All 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredOffers.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
