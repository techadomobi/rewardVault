"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Users, DollarSign, Gift, Zap, Star, Trophy, Sparkles, Video, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: 1,
    title: "Sign Up & Get Started",
    description: "Create your free account in seconds and get instant access to our platform",
    icon: Users,
    color: "text-primary",
    duration: "30 seconds"
  },
  {
    number: 2,
    title: "Browse Offers",
    description: "Explore our daily selection of offers, surveys, and tasks",
    icon: DollarSign,
    color: "text-accent",
    duration: "2-5 minutes"
  },
  {
    number: 3,
    title: "Complete Simple Tasks",
    description: "Download apps, take surveys, or complete easy tasks",
    icon: Gift,
    color: "text-yellow-500",
    duration: "5-15 minutes"
  },
  {
    number: 4,
    title: "Earn Points Instantly",
    description: "Get rewarded immediately for every completed task",
    icon: Zap,
    color: "text-green-500",
    duration: "Instant"
  },
  {
    number: 5,
    title: "Redeem Your Rewards",
    description: "Exchange points for gift cards, crypto, PayPal cash, and more",
    icon: Trophy,
    color: "text-purple-500",
    duration: "Instant"
  }
]

const testimonials = [
  {
    name: "Sarah M.",
    earnings: "$250",
    quote: "I earned enough for a month of groceries just by trying new apps and taking surveys!",
    rating: 5,
    video: true
  },
  {
    name: "Mike R.",
    earnings: "$1,200",
    quote: "This platform has been a game-changer for my side income. Easy and reliable!",
    rating: 5,
    video: true
  },
  {
    name: "Emily T.",
    earnings: "$75",
    quote: "Perfect for students! I earn while studying and browsing the web.",
    rating: 4,
    video: false
  }
]

export default function WatchHowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text-animated mb-6">
              Watch How It Works
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              See how thousands of users are turning their everyday activities into real rewards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green-intense px-8 py-6 text-lg group">
                  <span className="flex items-center">
                    Get Started Free
                    <Sparkles className="ml-2 h-5 w-5 group-hover:scale-125 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/earn">
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary/50 px-8 py-6 text-lg">
                  Browse Offers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-border hover-lift">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold mb-4">Our Story in 60 Seconds</CardTitle>
                <CardDescription className="text-xl text-muted-foreground">
                  Watch this quick video to see how easy it is to start earning
                </CardDescription>
              </CardHeader>
              <CardContent className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-10 h-10 text-white fill-white" />
                  </div>
                  <p className="text-white font-semibold text-lg">Watch Video</p>
                  <p className="text-white/80 text-sm mt-2">60 seconds • No sign-up required</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works: Step by Step</h2>
            <p className="text-xl text-muted-foreground">Simple steps to start earning real rewards</p>
          </div>
          
          <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={index} className="glass-card border-border hover-lift group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/20 text-primary mb-2">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                    <div className="flex justify-center">
                      <CheckCircle className={`w-5 h-5 ${step.color} fill-current`} />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* User Testimonials with Videos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real Users, Real Results</h2>
            <p className="text-xl text-muted-foreground">Hear from our community members</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-border hover-lift group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  {testimonial.video && (
                    <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center cursor-pointer group-hover:scale-[1.02] transition-transform">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                        <p className="text-white font-semibold text-sm">Watch Video</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  {testimonial.video && (
                    <div className="mt-4 text-xs text-muted-foreground flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      Video testimonial available
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Visualization */}
      <section className="py-20 bg-linear-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">From Zero to Rewards</h2>
            <p className="text-xl text-muted-foreground">See the complete journey</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isLeft = index % 2 === 0
                
                return (
                  <div key={index} className={`flex ${isLeft ? 'md:justify-end' : 'md:justify-start'} md:pr-8 md:pl-8`}>
                    <Card className="glass-card border-border hover-lift w-full max-w-md">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-semibold">Step {step.number}</CardTitle>
                            <CardDescription>{step.title}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{step.description}</p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                          <Clock className="w-4 h-4" />
                          Takes: {step.duration}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-animated mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are turning their everyday activities into real rewards. 
            No hidden fees, no complicated processes - just simple, honest earning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green-intense px-10 py-6 text-lg group">
                <span className="flex items-center">
                  Start Earning Now
                  <Trophy className="ml-3 h-5 w-5 group-hover:scale-125 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="/earn">
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary/50 px-10 py-6 text-lg">
                See All Offers
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            100% Free to Join • Instant Payouts • Secure & Trusted
          </p>
        </div>
      </section>
    </div>
  )
}