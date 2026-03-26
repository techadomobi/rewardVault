"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Coins, Sparkles, Star, Zap } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-morph" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-morph delay-500" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-[10%] hidden lg:block animate-float">
        <div className="glass p-3 rounded-xl">
          <Star className="w-5 h-5 text-yellow-500" />
        </div>
      </div>
      <div className="absolute bottom-20 right-[10%] hidden lg:block animate-float-delayed">
        <div className="glass p-3 rounded-xl">
          <Zap className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="absolute top-1/2 left-[5%] hidden lg:block animate-bounce-subtle">
        <div className="glass p-3 rounded-xl">
          <Sparkles className="w-5 h-5 text-pink-500" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon with pulse ring */}
          <div 
            className={`
              relative w-24 h-24 mx-auto mb-8
              transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
            `}
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping-slow" />
            <div className="relative w-full h-full rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
              <Coins className="w-12 h-12 text-primary animate-bounce-subtle" />
            </div>
          </div>

          {/* Content */}
          <h2 
            className={`
              text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance
              transition-all duration-700 ease-out delay-100
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            Ready to Start <span className="gradient-text-animated">Earning</span>?
          </h2>
          <p 
            className={`
              text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto
              transition-all duration-700 ease-out delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            Join over 150,000 members who are already earning real rewards. Sign up now and get a 500 point welcome bonus!
          </p>

          {/* CTA Buttons */}
          <div 
            className={`
              flex flex-col sm:flex-row items-center justify-center gap-4
              transition-all duration-700 ease-out delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <Link href="/earn">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green-intense px-8 py-6 text-lg group relative overflow-hidden shine"
              >
                <span className="relative z-10 flex items-center">
                  Create Free Account
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="/faq">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-secondary hover:border-primary/50 px-8 py-6 text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div 
            className={`
              mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground
              transition-all duration-700 ease-out delay-400
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              256-bit encryption
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
