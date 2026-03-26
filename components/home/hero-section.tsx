"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Coins, Gift, Zap, Star, Sparkles, Trophy } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useMouseParallax } from "@/hooks/use-scroll-animation"

function FloatingIcon({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      className={`
        ${className}
        transition-all duration-1000 ease-out
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {children}
    </div>
  )
}

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  
  useEffect(() => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0
    
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = numericValue * easeOut
      
      if (value.includes('M')) {
        setDisplayValue(`$${current.toFixed(1)}M${suffix}`)
      } else if (value.includes('K')) {
        setDisplayValue(`${Math.floor(current * 1000 / 1000)}K${suffix}`)
      } else if (value.includes('.')) {
        setDisplayValue(current.toFixed(1) + suffix)
      } else {
        setDisplayValue(Math.floor(current) + suffix)
      }
      
      if (currentStep >= steps) {
        clearInterval(timer)
        setDisplayValue(value + suffix)
      }
    }, stepDuration)
    
    return () => clearInterval(timer)
  }, [value, suffix])
  
  return <span>{displayValue}</span>
}

export function HeroSection() {
  const mousePosition = useMouseParallax(0.02)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 particles-bg">
      {/* Animated Background Blobs */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-morph"
        style={{ 
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` 
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-morph delay-500"
        style={{ 
          transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)` 
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      
      {/* Floating Elements with Parallax */}
      <FloatingIcon 
        className="absolute top-32 left-[10%] hidden lg:block" 
        delay={300}
      >
        <div 
          className="glass-card p-4 rounded-2xl animate-float-rotate hover-lift cursor-pointer"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        >
          <Coins className="w-8 h-8 text-primary" />
        </div>
      </FloatingIcon>
      
      <FloatingIcon 
        className="absolute top-48 right-[15%] hidden lg:block" 
        delay={500}
      >
        <div 
          className="glass-card p-4 rounded-2xl animate-float hover-lift cursor-pointer"
          style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y}px)` }}
        >
          <Gift className="w-8 h-8 text-accent" />
        </div>
      </FloatingIcon>
      
      <FloatingIcon 
        className="absolute bottom-40 left-[15%] hidden lg:block" 
        delay={700}
      >
        <div 
          className="glass-card p-4 rounded-2xl animate-bounce-subtle hover-lift cursor-pointer"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y * -1}px)` }}
        >
          <Star className="w-8 h-8 text-yellow-500" />
        </div>
      </FloatingIcon>
      
      <FloatingIcon 
        className="absolute bottom-56 right-[10%] hidden lg:block" 
        delay={900}
      >
        <div 
          className="glass-card p-4 rounded-2xl animate-float-rotate hover-lift cursor-pointer"
          style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
        >
          <Zap className="w-8 h-8 text-primary" />
        </div>
      </FloatingIcon>

      <FloatingIcon 
        className="absolute top-64 left-[25%] hidden xl:block" 
        delay={1100}
      >
        <div 
          className="glass-card p-3 rounded-xl animate-wiggle hover-lift cursor-pointer"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        >
          <Sparkles className="w-6 h-6 text-pink-500" />
        </div>
      </FloatingIcon>

      <FloatingIcon 
        className="absolute bottom-32 right-[25%] hidden xl:block" 
        delay={1300}
      >
        <div 
          className="glass-card p-3 rounded-xl animate-bounce-subtle delay-300 hover-lift cursor-pointer"
          style={{ transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)` }}
        >
          <Trophy className="w-6 h-6 text-amber-500" />
        </div>
      </FloatingIcon>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8
              transition-all duration-700 ease-out
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Over 500,000+ rewards claimed</span>
            <Sparkles className="w-4 h-4 text-primary animate-sparkle" />
          </div>

          {/* Heading */}
          <h1 
            className={`
              text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6
              transition-all duration-700 ease-out delay-100
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <span className="text-foreground">Turn Your Time Into</span>
            <br />
            <span className="gradient-text-animated text-glow-green">Real Rewards</span>
          </h1>

          {/* Description */}
          <p 
            className={`
              text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10
              transition-all duration-700 ease-out delay-200
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            Complete simple offers, download apps, and take surveys to earn points. Redeem for gift cards, crypto, PayPal cash, and more. Start earning today!
          </p>

          {/* CTA Buttons */}
          <div 
            className={`
              flex flex-col sm:flex-row items-center justify-center gap-4 mb-16
              transition-all duration-700 ease-out delay-300
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <Link href="/earn">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green-intense px-8 py-6 text-lg group relative overflow-hidden shine"
              >
                <span className="relative z-10 flex items-center">
                  Start Earning Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="/watch-how-it-works">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-secondary hover:border-primary/50 px-8 py-6 text-lg group transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch How It Works
              </Button>
            </Link>
          </div>

          {/* Stats Preview */}
          <div 
            className={`
              grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6
              transition-all duration-700 ease-out delay-400
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            {[
              { value: "2.5", prefix: "$", suffix: "M+", label: "Paid Out" },
              { value: "150", suffix: "K+", label: "Active Users" },
              { value: "500", suffix: "+", label: "Offers Daily" },
              { value: "4.9", suffix: "", label: "App Rating" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-4 md:p-6 hover-lift group"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {mounted && (
                    <>
                      {stat.prefix}
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
    </section>
  )
}
