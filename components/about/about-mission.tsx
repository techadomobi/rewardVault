"use client"

import { Target, Eye } from "lucide-react"

export function AboutMission() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glass rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To democratize earning opportunities by connecting people with legitimate ways to earn rewards for their time and attention. We believe everyone deserves access to fair, transparent, and rewarding opportunities regardless of their background or location.
            </p>
          </div>

          {/* Vision */}
          <div className="glass rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the world&apos;s most trusted platform for earning rewards, where millions of people can supplement their income, achieve their financial goals, and turn their spare time into meaningful value. We envision a future where earning is accessible to all.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
