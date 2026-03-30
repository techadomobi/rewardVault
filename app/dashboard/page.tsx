import { ArrowUpRight, Coins, Rocket, Target, Trophy, TrendingUp, DollarSign, Users, Zap } from "lucide-react"

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

const quickActions = [
  { title: "Claim daily chest", icon: DollarSign, color: "from-green-400 to-emerald-500", reward: "+$2.50" },
  { title: "Start premium survey", icon: TrendingUp, color: "from-blue-400 to-cyan-500", reward: "+$15.00" },
  { title: "Complete mobile install", icon: Zap, color: "from-purple-400 to-pink-500", reward: "+$8.00" },
  { title: "Redeem to PayPal", icon: Users, color: "from-orange-400 to-amber-500", reward: "Instant" },
]

const offerCategories = [
  { label: "Gaming", weight: 88, color: "from-green-400 to-emerald-500" },
  { label: "Finance", weight: 71, color: "from-blue-400 to-cyan-500" },
  { label: "Shopping", weight: 56, color: "from-purple-400 to-pink-500" },
  { label: "Streaming", weight: 39, color: "from-orange-400 to-amber-500" },
]

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Hero Stats Section */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard 
          label="Wallet Balance" 
          value="$482.75" 
          delta="+$84.90 this week" 
          icon={Coins} 
          className="animate-slide-up"
        />
        <StatCard
          label="Offers Completed"
          value="126"
          delta="8 new completions today"
          icon={Target}
          tone="sky"
          className="animate-slide-up delay-100"
        />
        <StatCard
          label="Current Streak"
          value="14 days"
          delta="Keep streak for +15% bonus"
          icon={Rocket}
          className="animate-slide-up delay-150"
        />
        <StatCard
          label="Reward Tier"
          value="Gold"
          delta="92% to Platinum"
          icon={Trophy}
          tone="orange"
          className="animate-slide-up delay-200"
        />
      </section>

      {/* Main Content Grid */}
      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Earnings Chart */}
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-150">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/60 p-1.5">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              Weekly Earnings Pulse
            </CardTitle>
            <CardDescription>Fast Freecash-like snapshot of your earning trend.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex h-44 items-end gap-3">
              {monthlyEarnings.map((value, index) => (
                <div key={value + index} className="group flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-primary/20 via-primary/60 to-primary transition-all duration-300 group-hover:scale-y-105 group-hover:from-primary/40"
                    style={{ height: `${value}%` }}
                  />
                  <span className="text-[10px] text-muted-foreground">D{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-primary/5 to-transparent p-4">
              <div>
                <p className="text-xs text-muted-foreground">Projected week total</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  $126.40
                </p>
              </div>
              <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg">
                <TrendingUp className="mr-1 h-3 w-3" />
                +19.3% vs last week
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Goals Section */}
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-400/20 to-orange-500/60 p-1.5">
                <Target className="h-5 w-5 text-orange-500" />
              </div>
              Goal Radar
            </CardTitle>
            <CardDescription>Finish these to unlock instant bonus payouts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.title} className="group rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{goal.title}</p>
                    <p className="text-xs text-muted-foreground">Earn {goal.reward}</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white">
                    {goal.reward}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <Progress value={goal.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">{goal.progress}% complete</p>
                </div>
              </div>
            ))}
            <Button className="w-full bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
              <Target className="mr-2 h-4 w-4" />
              Continue goals
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Quick Actions & Heatmap */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* Quick Actions */}
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-500/60 p-1.5">
                <Zap className="h-5 w-5 text-emerald-500" />
              </div>
              Quick Actions
            </CardTitle>
            <CardDescription>Jump into your highest-value tasks.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {quickActions.map((action) => (
              <Button
                key={action.title}
                variant="outline"
                className={`group h-16 justify-between border-white/15 bg-gradient-to-r from-white/5 to-transparent text-left hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${action.color} p-1.5 shadow-lg`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground">{action.title}</p>
                    <p className="text-xs text-muted-foreground">{action.reward}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Offer Heatmap */}
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-500/60 p-1.5">
                <Users className="h-5 w-5 text-cyan-500" />
              </div>
              Offer Heatmap
            </CardTitle>
            <CardDescription>Where your next earnings are likely to come from.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {offerCategories.map((category) => (
              <div key={category.label} className="group rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-3 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{category.label}</span>
                  <span className={`text-xs font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.weight}% match
                  </span>
                </div>
                <div className="space-y-2">
                  <Progress value={category.weight} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Low match</span>
                    <span>High match</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Featured Offers Section */}
      <section className="animate-slide-up delay-500">
        <Card className="glass-card rounded-2xl border-white/10 py-5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-500/60 p-1.5">
                <Coins className="h-5 w-5 text-pink-500" />
              </div>
              Featured High-Paying Offers
            </CardTitle>
            <CardDescription>Top offers with the best payouts right now.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "Mobile Game Survey", reward: "$25.00", time: "5 min", color: "from-green-400 to-emerald-500" },
                { title: "Finance App Install", reward: "$18.00", time: "3 min", color: "from-blue-400 to-cyan-500" },
                { title: "E-commerce Sign Up", reward: "$12.00", time: "2 min", color: "from-purple-400 to-pink-500" },
              ].map((offer) => (
                <div key={offer.title} className="group rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${offer.color} p-2 shadow-lg`}>
                      <Coins className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={`bg-gradient-to-r ${offer.color} text-white shadow-lg`}>
                      {offer.reward}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{offer.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{offer.time} to complete</p>
                  <Button className={`w-full bg-gradient-to-r ${offer.color} text-white hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1`}>
                    Start Now
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
