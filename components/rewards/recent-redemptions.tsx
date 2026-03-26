"use client"

import { CheckCircle } from "lucide-react"

const recentRedemptions = [
  { user: "Alex K.", reward: "PayPal $25", time: "2 minutes ago", location: "USA" },
  { user: "Maria S.", reward: "Amazon $10", time: "5 minutes ago", location: "Canada" },
  { user: "James L.", reward: "Steam $20", time: "8 minutes ago", location: "UK" },
  { user: "Sophie T.", reward: "Bitcoin $50", time: "12 minutes ago", location: "Germany" },
  { user: "David R.", reward: "Netflix $15", time: "15 minutes ago", location: "Australia" },
  { user: "Emma W.", reward: "PayPal $50", time: "18 minutes ago", location: "USA" },
  { user: "Michael B.", reward: "Xbox $25", time: "22 minutes ago", location: "Canada" },
  { user: "Lisa M.", reward: "Uber Eats $10", time: "25 minutes ago", location: "UK" },
]

export function RecentRedemptions() {
  return (
    <section className="py-12 md:py-16 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Recent Redemptions</h2>
              <p className="text-muted-foreground text-sm">See what others are cashing out</p>
            </div>
          </div>

          {/* Redemption List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentRedemptions.map((redemption, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-background/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {redemption.user.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground text-sm truncate">
                      {redemption.user}
                    </span>
                    <span className="text-xs text-muted-foreground">{redemption.location}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {redemption.reward} - {redemption.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
