import { AreaChart, TrendingUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const conversionTrend = [34, 42, 47, 53, 58, 62, 67, 71]

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AreaChart className="h-5 w-5 text-primary" />
            Growth Analytics
          </CardTitle>
          <CardDescription>Topline performance metrics across user and offer funnels.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-5 flex h-40 items-end gap-2">
            {conversionTrend.map((value, index) => (
              <div key={value + index} className="flex flex-1 flex-col items-center gap-1">
                <div className="w-full rounded-t-sm bg-linear-to-t from-primary/20 to-primary" style={{ height: `${value}%` }} />
                <span className="text-[10px] text-muted-foreground">W{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "Offer conversion", value: 72 },
              { label: "Payout success", value: 98 },
              { label: "7-day retention", value: 61 },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2" />
              </div>
            ))}
          </div>
          <p className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
            <TrendingUp className="h-4 w-4" />
            Weekly blended growth: +8.7%
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
