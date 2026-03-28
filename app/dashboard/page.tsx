import { ArrowUpRight, Coins, Rocket, Target, Trophy } from "lucide-react"

import { StatCard } from "@/components/dashboard/stat-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const monthlyEarnings = [48, 55, 62, 58, 70, 84, 96]

const goals = [
  { title: "Complete 3 premium offers", progress: 66, reward: "$36.00" },
  { title: "Finish daily streak", progress: 80, reward: "$5.00" },
  { title: "Invite two friends", progress: 50, reward: "$20.00" },
]

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Wallet Balance" value="$482.75" delta="+$84.90 this week" icon={Coins} />
        <StatCard
          label="Offers Completed"
          value="126"
          delta="8 new completions today"
          icon={Target}
          tone="sky"
          className="delay-100"
        />
        <StatCard
          label="Current Streak"
          value="14 days"
          delta="Keep streak for +15% bonus"
          icon={Rocket}
          className="delay-150"
        />
        <StatCard
          label="Reward Tier"
          value="Gold"
          delta="92% to Platinum"
          icon={Trophy}
          tone="orange"
          className="delay-200"
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-150">
          <CardHeader>
            <CardTitle>Weekly Earnings Pulse</CardTitle>
            <CardDescription>Fast Freecash-like snapshot of your earning trend.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex h-44 items-end gap-3">
              {monthlyEarnings.map((value, index) => (
                <div key={value + index} className="group flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-md bg-linear-to-t from-primary/20 via-primary/60 to-primary transition-all duration-300 group-hover:scale-y-105 group-hover:from-primary/40"
                    style={{ height: `${value}%` }}
                  />
                  <span className="text-[10px] text-muted-foreground">D{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 p-3">
              <div>
                <p className="text-xs text-muted-foreground">Projected week total</p>
                <p className="text-xl font-semibold">$126.40</p>
              </div>
              <Badge className="bg-primary/90 text-primary-foreground">+19.3% vs last week</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-200">
          <CardHeader>
            <CardTitle>Goal Radar</CardTitle>
            <CardDescription>Finish these to unlock instant bonus payouts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.title} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium">{goal.title}</p>
                  <span className="text-xs text-primary">{goal.reward}</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="mt-2 text-xs text-muted-foreground">{goal.progress}% complete</p>
              </div>
            ))}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Continue goals
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-300">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump into your highest-value tasks.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {[
              "Claim daily chest",
              "Start premium survey",
              "Complete mobile install",
              "Redeem to PayPal",
            ].map((action) => (
              <Button
                key={action}
                variant="outline"
                className="h-12 justify-between border-white/15 bg-white/5 text-left hover:bg-white/10"
              >
                {action}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-400">
          <CardHeader>
            <CardTitle>Offer Heatmap</CardTitle>
            <CardDescription>Where your next earnings are likely to come from.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "Gaming", weight: 88 },
              { label: "Finance", weight: 71 },
              { label: "Shopping", weight: 56 },
              { label: "Streaming", weight: 39 },
            ].map((segment) => (
              <div key={segment.label} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>{segment.label}</span>
                  <span className="text-muted-foreground">{segment.weight}% match</span>
                </div>
                <Progress value={segment.weight} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
