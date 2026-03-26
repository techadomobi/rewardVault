"use client"

import { Smartphone, CreditCard, Shield, Clock, Users, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Smartphone,
    title: "Mobile App Offers",
    description: "Download and try new apps to earn points. Simple tasks like reaching a game level or trying a service.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBg: "group-hover:bg-primary/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
  },
  {
    icon: CreditCard,
    title: "Multiple Cash Out Options",
    description: "Redeem your points for PayPal, gift cards from 100+ brands, Bitcoin, Ethereum, and more.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    hoverBg: "group-hover:bg-accent/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your data is protected with bank-level encryption. We never sell your personal information.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    hoverBg: "group-hover:bg-blue-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  },
  {
    icon: Clock,
    title: "Instant Rewards",
    description: "Most rewards are credited instantly. No waiting weeks for your earnings to show up.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    hoverBg: "group-hover:bg-yellow-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]",
  },
  {
    icon: Users,
    title: "Referral Program",
    description: "Invite friends and earn up to 25% of their earnings. Build passive income with your network.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    hoverBg: "group-hover:bg-pink-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
  },
  {
    icon: TrendingUp,
    title: "Daily Bonuses",
    description: "Login daily to claim bonus points. Complete streaks for multiplied rewards and special offers.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBg: "group-hover:bg-primary/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
  },
]

function FeatureCard({ 
  feature, 
  index 
}: { 
  feature: typeof features[0]
  index: number 
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`
        group glass-card rounded-2xl p-6 md:p-8 cursor-pointer
        transition-all duration-500 ease-out
        ${feature.glow}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`
        w-14 h-14 rounded-xl ${feature.bgColor} ${feature.hoverBg}
        flex items-center justify-center mb-6 
        transition-all duration-300
        group-hover:scale-110 group-hover:rotate-3
      `}>
        <feature.icon className={`w-7 h-7 ${feature.color} transition-transform duration-300 group-hover:scale-110`} />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
      
      {/* Animated underline */}
      <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
    </div>
  )
}

export function FeaturesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`
            text-center mb-16
            transition-all duration-700 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in-blur">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Everything You Need to <span className="gradient-text">Earn</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide the best platform for earning rewards with the most offers, fastest payouts, and best user experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
