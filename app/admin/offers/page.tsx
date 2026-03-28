import { CheckCircle2, Clock3, Megaphone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AdminOffersPage() {
  return (
    <div className="space-y-6">
      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone className="h-5 w-5 text-primary" />
            Offer Management
          </CardTitle>
          <CardDescription>Campaign health, completion rates, and moderation state.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { name: "Finance App Tiered Bonus", status: "Active", conversion: 74, payout: "$28" },
            { name: "Streaming Trial Funnel", status: "Review", conversion: 51, payout: "$9" },
            { name: "MMO Level-Up Quest", status: "Active", conversion: 68, payout: "$16.5" },
          ].map((offer) => (
            <div key={offer.name} className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="font-medium">{offer.name}</p>
                <Badge variant={offer.status === "Active" ? "default" : "secondary"}>{offer.status}</Badge>
              </div>
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" />Conversion {offer.conversion}%</span>
                <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" />Payout {offer.payout}</span>
              </div>
              <Progress value={offer.conversion} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
