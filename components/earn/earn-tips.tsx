"use client"

import { Lightbulb, CheckCircle } from "lucide-react"

const tips = [
  "Complete your profile to unlock exclusive high-paying offers",
  "Check back daily - new offers are added every 24 hours",
  "Focus on offers marked as \"Easy\" to quickly build up points",
  "Read offer requirements carefully before starting",
  "Use a dedicated email for offer signups to stay organized",
  "Complete offers on WiFi for faster credit verification",
]

export function EarnTips() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Pro Tips for Earning More</h2>
              <p className="text-muted-foreground text-sm">Maximize your earnings with these strategies</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
