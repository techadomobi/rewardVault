"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, DollarSign, Gift, Zap, Star, Trophy, Sparkles } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: 1,
    title: "Create Your Account",
    description: "Sign up in seconds and get instant access to our platform",
    icon: Users,
    color: "text-primary"
  },
  {
    number: 2,
    title: "Complete Offers",
    description: "Browse our daily offers and complete simple tasks",
    icon: DollarSign,
    color: "text-accent"
  },
  {
    number: 3,
    title: "Earn Points",
    description: "Get rewarded for every completed offer and activity",
    icon: Gift,
    color: "text-yellow-500"
  },
  {
    number: 4,
    title: "Redeem Rewards",
    description: "Exchange your points for gift cards, crypto, and more",
    icon: Zap,
    color: "text-green-500"
  }
]

const rewards = [
  { name: "Amazon Gift Card", value: "$25", points: "2,500", icon: Gift, description: "Shop for anything on Amazon" },
  { name: "PayPal Cash", value: "$50", points: "5,000", icon: DollarSign, description: "Instant cash to your PayPal" },
  { name: "Crypto (BTC)", value: "0.001", points: "3,000", icon: Sparkles, description: "Bitcoin to your wallet" },
  { name: "Steam Wallet", value: "$10", points: "1,000", icon: Trophy, description: "Games and in-game items" }
]

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text-animated mb-6">
              Start Earning Today
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Join thousands of users who are turning their time into real rewards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signin">
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

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to start earning</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card 
                  key={index}
                  className="glass-card border-border hover-lift group cursor-pointer"
                  onClick={() => setCurrentStep(step.number)}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className={`w-8 h-8 ${step.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                      currentStep === step.number 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      Step {step.number}
                      {currentStep === step.number && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rewards Showcase */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You Can Earn</h2>
            <p className="text-xl text-muted-foreground">Redeem your points for amazing rewards</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rewards.map((reward, index) => {
              const Icon = reward.icon
              return (
                <Card key={index} className="glass-card border-border hover-lift group">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{reward.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{reward.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{reward.value}</div>
                    <div className="text-sm text-muted-foreground">{reward.points} points</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">Real stories from real earners</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                earnings: "$250",
                quote: "I earned enough for a month of groceries just by trying new apps and taking surveys!",
                rating: 5
              },
              {
                name: "Mike R.",
                earnings: "$1,200",
                quote: "This platform has been a game-changer for my side income. Easy and reliable!",
                rating: 5
              },
              {
                name: "Emily T.",
                earnings: "$75",
                quote: "Perfect for students! I earn while studying and browsing the web.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card border-border hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-primary font-semibold">{testimonial.earnings} earned</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-linear-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-animated mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of earners and turn your everyday activities into real rewards. 
            No hidden fees, no complicated processes - just simple, honest earning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signin">
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