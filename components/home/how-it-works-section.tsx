"use client"

import { UserPlus, Search, CheckCircle, Wallet, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description: "Sign up for free in under 30 seconds. No credit card required.",
    color: "from-primary to-emerald-400",
  },
  {
    icon: Search,
    step: "02",
    title: "Browse Offers",
    description: "Explore hundreds of offers from surveys to app downloads.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Complete Tasks",
    description: "Finish simple tasks and watch your points balance grow.",
    color: "from-accent to-amber-400",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Get Rewarded",
    description: "Cash out via PayPal, gift cards, or cryptocurrency.",
    color: "from-pink-500 to-rose-400",
  },
]

function StepCard({ 
  step, 
  index, 
  isLast,
  isVisible
}: { 
  step: typeof steps[0]
  index: number
  isLast: boolean
  isVisible: boolean
}) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-0.5">
          <div 
            className={`
              h-full bg-gradient-to-r from-border via-primary/50 to-border
              transition-all duration-1000 ease-out
              ${isVisible ? 'scale-x-100' : 'scale-x-0'}
            `}
            style={{ transitionDelay: `${index * 200 + 500}ms`, transformOrigin: 'left' }}
          />
          <ArrowRight 
            className={`
              absolute -right-3 -top-2 w-5 h-5 text-primary
              transition-all duration-500
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ transitionDelay: `${index * 200 + 800}ms` }}
          />
        </div>
      )}
      
      {/* Card */}
      <div 
        className={`
          relative group cursor-pointer
          transition-all duration-500 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Step Number */}
        <div 
          className={`
            absolute -top-4 -right-4 w-10 h-10 rounded-full
            bg-gradient-to-r ${step.color}
            flex items-center justify-center text-sm font-bold text-white
            shadow-lg z-10
            group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300
          `}
        >
          {step.step}
        </div>
        
        {/* Icon Container */}
        <div 
          className={`
            w-24 h-24 rounded-2xl glass-card mx-auto mb-6
            flex items-center justify-center
            group-hover:scale-110 transition-all duration-300
            relative overflow-hidden
          `}
        >
          {/* Gradient background on hover */}
          <div 
            className={`
              absolute inset-0 bg-gradient-to-br ${step.color} opacity-0
              group-hover:opacity-20 transition-opacity duration-300
            `}
          />
          <step.icon className="w-10 h-10 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
        </div>
        
        {/* Content */}
        <div className="text-center max-w-[200px]">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {step.title}
          </h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </div>
      </div>
    </div>
  )
}

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`
            text-center mb-16
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start earning in minutes with our simple 4-step process. No experience required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              step={step} 
              index={index} 
              isLast={index === steps.length - 1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
