"use client"

import { Gift, CreditCard, Coins, Sparkles } from "lucide-react"

const quickStats = [
  {
    icon: Gift,
    value: "100+",
    label: "Gift Card Brands",
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
  {
    icon: CreditCard,
    value: "$5",
    label: "Min. Cashout",
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    icon: Coins,
    value: "Instant",
    label: "Delivery",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
  },
]

export function RewardsHero() {
  const mounted = true

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-morph" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-morph delay-500" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span 
            className={`
              inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-wider uppercase mb-4
              transition-all duration-500 ease-out
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <Sparkles className="w-4 h-4 animate-sparkle" />
            Redeem Points
            <Sparkles className="w-4 h-4 animate-sparkle delay-300" />
          </span>
          
          <h1 
            className={`
              text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance
              transition-all duration-500 ease-out delay-100
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            Turn Points Into{" "}
            <span className="bg-linear-to-r from-accent to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_100%]">
              Real Rewards
            </span>
          </h1>
          
          <p 
            className={`
              text-lg text-muted-foreground mb-10 max-w-2xl mx-auto
              transition-all duration-500 ease-out delay-200
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            Cash out your hard-earned points for gift cards, PayPal, cryptocurrency, and more. Over 100+ reward options available with instant delivery.
          </p>

          {/* Quick Stats */}
          <div 
            className={`
              grid grid-cols-1 md:grid-cols-3 gap-4
              transition-all duration-500 ease-out delay-300
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            {quickStats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-4 flex items-center justify-center gap-3 group cursor-pointer hover:scale-105 transition-transform"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 right-[10%] hidden lg:block animate-float opacity-30">
        <div className="w-4 h-4 rounded-full bg-accent" />
      </div>
      <div className="absolute top-48 left-[15%] hidden lg:block animate-float-delayed opacity-30">
        <div className="w-3 h-3 rounded-full bg-primary" />
      </div>
      <div className="absolute bottom-32 right-[20%] hidden lg:block animate-bounce-subtle opacity-30">
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
      </div>
    </section>
  )
}
