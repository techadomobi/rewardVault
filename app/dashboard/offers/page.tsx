import { Flame, Star, Timer } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const offers = [
  {
    title: "Fintech onboarding challenge",
    payout: "$28.00",
    category: "Finance",
    completion: 72,
    eta: "12 min",
    featured: true,
  },
  {
    title: "Strategy mobile game tutorial",
    payout: "$16.50",
    category: "Gaming",
    completion: 45,
    eta: "18 min",
    featured: false,
  },
  {
    title: "Streaming app 7-day trial",
    payout: "$9.00",
    category: "Entertainment",
    completion: 88,
    eta: "5 min",
    featured: false,
  },
]

export default function DashboardOffersPage() {
  return (
    <div className="space-y-6">
      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5">
        <CardHeader>
          <CardTitle>Offer Wall</CardTitle>
          <CardDescription>High-conversion offers prioritized by payout and completion speed.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 xl:grid-cols-3">
          {offers.map((offer, index) => (
            <Card
              key={offer.title}
              className="rounded-xl border border-white/10 bg-black/20 py-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <CardHeader className="space-y-3 pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant={offer.featured ? "default" : "secondary"}>
                    {offer.featured ? "Trending" : offer.category}
                  </Badge>
                  <p className="text-lg font-semibold text-primary">{offer.payout}</p>
                </div>
                <CardTitle className="text-base leading-5">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Completion</span>
                    <span>{offer.completion}%</span>
                  </div>
                  <Progress value={offer.completion} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Timer className="h-3.5 w-3.5" />
                    {offer.eta}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    {index === 0 ? <Flame className="h-3.5 w-3.5 text-accent" /> : <Star className="h-3.5 w-3.5" />}
                    {index === 0 ? "Hot" : "Recommended"}
                  </span>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Continue offer</Button>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
