"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Join the RewardVault Community
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start earning real rewards today. Join 150,000+ members who are already turning their time into money.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/earn">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green px-8">
                  Start Earning Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
