"use client"

import { DollarSign, Users, Gift, Star } from "lucide-react"
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation"
import { useEffect, useState } from "react"

const stats = [
  {
    icon: DollarSign,
    value: 2500000,
    prefix: "$",
    suffix: "+",
    label: "Total Paid Out",
    description: "Real money earned by our users",
    format: (n: number) => n >= 1000000 ? `${(n / 1000000).toFixed(1)}M` : n.toLocaleString(),
  },
  {
    icon: Users,
    value: 150000,
    prefix: "",
    suffix: "+",
    label: "Active Members",
    description: "And growing every day",
    format: (n: number) => n >= 1000 ? `${Math.floor(n / 1000)}K` : n.toString(),
  },
  {
    icon: Gift,
    value: 500,
    prefix: "",
    suffix: "+",
    label: "Daily Offers",
    description: "New ways to earn added daily",
    format: (n: number) => n.toString(),
  },
  {
    icon: Star,
    value: 4.9,
    prefix: "",
    suffix: "/5",
    label: "User Rating",
    description: "Based on 50,000+ reviews",
    format: (n: number) => n.toFixed(1),
  },
]

function StatCard({ 
  stat, 
  index,
  isVisible
}: { 
  stat: typeof stats[0]
  index: number
  isVisible: boolean
}) {
  const { count, startAnimation } = useCountUp(stat.value, 2000, 0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      startAnimation()
      setHasAnimated(true)
    }
  }, [isVisible, hasAnimated, startAnimation])

  return (
    <div 
      className={`
        text-center p-6 md:p-8 glass-card rounded-2xl group cursor-pointer
        transition-all duration-500 ease-out
        hover:scale-105
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon with pulse ring */}
      <div className="relative w-16 h-16 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:animate-ping-slow" />
        <div className="relative w-full h-full rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
          <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      
      {/* Value with count-up animation */}
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {stat.prefix}{stat.format(count)}{stat.suffix}
      </div>
      
      <div className="text-foreground font-medium mb-1">{stat.label}</div>
      <div className="text-sm text-muted-foreground">{stat.description}</div>
      
      {/* Decorative line */}
      <div className="mt-4 h-0.5 w-0 mx-auto bg-gradient-to-r from-primary to-accent group-hover:w-16 transition-all duration-500" />
    </div>
  )
}

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-morph" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-morph delay-500" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div 
          className={`
            text-center mb-12
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join our growing community of earners and see why we&apos;re the most trusted rewards platform.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
