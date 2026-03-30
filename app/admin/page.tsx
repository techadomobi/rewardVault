import { Activity, AlertTriangle, Shield, Users, TrendingUp, DollarSign, BarChart3, Settings } from "lucide-react"

import { StatCard } from "@/components/dashboard/stat-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AdminOverviewPage() {
  const pipelineMetrics = [
    { name: "Payout approvals", queued: 63, total: 247, status: "on-track" },
    { name: "Offer quality checks", queued: 21, total: 156, status: "needs-attention" },
    { name: "Account verification", queued: 38, total: 189, status: "on-track" },
    { name: "Chargeback disputes", queued: 6, total: 42, status: "low" },
  ]

  const fraudSignals = [
    { 
      message: "Duplicate device clusters detected in LATAM offer wall", 
      severity: "medium",
      time: "2 min ago"
    },
    { 
      message: "Abnormal completion spikes on campaign ID 4402", 
      severity: "high",
      time: "5 min ago"
    },
    { 
      message: "VPN mismatch rate increased by 1.8% in last 12h", 
      severity: "low",
      time: "15 min ago"
    },
    { 
      message: "Referral chain velocity remains within thresholds", 
      severity: "info",
      time: "30 min ago"
    },
  ]

  return (
    <div className="space-y-6">
      {/* Hero Stats Section */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard 
          label="Daily Active Users" 
          value="18,420" 
          delta="+6.2% from yesterday" 
          icon={Users}
          className="animate-slide-up"
        />
        <StatCard 
          label="Offer Completion" 
          value="72.9%" 
          delta="Healthy conversion rate" 
          icon={Activity} 
          tone="sky" 
          className="animate-slide-up delay-100" 
        />
        <StatCard 
          label="Risk Alerts" 
          value="14" 
          delta="4 need review now" 
          icon={AlertTriangle} 
          tone="orange" 
          className="animate-slide-up delay-150" 
        />
        <StatCard 
          label="Trust Score" 
          value="98.4" 
          delta="Fraud pipeline stable" 
          icon={Shield} 
          className="animate-slide-up delay-200" 
        />
      </section>

      {/* Main Content Grid */}
      <section className="grid gap-6 xl:grid-cols-2">
        {/* Operations Pipeline */}
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-150">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-500/60 p-1.5">
                <BarChart3 className="h-5 w-5 text-cyan-500" />
              </div>
              Operations Pipeline
            </CardTitle>
            <CardDescription>Live view of payout, offer, and moderation pipelines.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pipelineMetrics.map((metric) => {
              const progress = Math.round((metric.queued / metric.total) * 100)
              const statusConfig = {
                "on-track": { color: "from-green-400 to-emerald-500", text: "On Track" },
                "needs-attention": { color: "from-orange-400 to-amber-500", text: "Needs Attention" },
                "low": { color: "from-blue-400 to-cyan-500", text: "Low" }
              }
              const config = statusConfig[metric.status as keyof typeof statusConfig]

              return (
                <div key={metric.name} className="group rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{metric.name}</p>
                      <p className="text-xs text-muted-foreground">Queue: {metric.queued} / {metric.total}</p>
                    </div>
                    <Badge className={`bg-gradient-to-r ${config.color} text-white shadow-lg`}>
                      {config.text}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress value={progress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{progress}% queued</span>
                      <span>{metric.total - metric.queued} remaining</span>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-blue-400 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <Settings className="mr-2 h-4 w-4" />
                Manage Queue
              </Button>
              <Button variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Fraud Monitoring */}
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-400/20 to-orange-500/60 p-1.5">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
              </div>
              Fraud Monitoring
            </CardTitle>
            <CardDescription>Real-time triggers from heuristics and behavior patterns.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {fraudSignals.map((signal, index) => {
              const severityConfig = {
                high: { color: "from-red-400 to-orange-500", border: "border-red-500/30" },
                medium: { color: "from-orange-400 to-amber-500", border: "border-orange-500/30" },
                low: { color: "from-blue-400 to-cyan-500", border: "border-cyan-500/30" },
                info: { color: "from-green-400 to-emerald-500", border: "border-green-500/30" }
              }
              const config = severityConfig[signal.severity as keyof typeof severityConfig]

              return (
                <div key={index} className={`group rounded-xl border ${config.border} bg-gradient-to-r from-white/5 to-transparent p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{signal.message}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{signal.time}</p>
                    </div>
                    <Badge className={`bg-gradient-to-r ${config.color} text-white shadow-lg`}>
                      {signal.severity.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              )
            })}
            <div className="flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-red-400 to-orange-500 text-white hover:from-red-500 hover:to-orange-600 shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Review Alerts
              </Button>
              <Button variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
                View Logs
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* System Health & Analytics */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* System Health */}
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-500/60 p-1.5">
                <Shield className="h-5 w-5 text-emerald-500" />
              </div>
              System Health
            </CardTitle>
            <CardDescription>Overall platform stability and performance metrics.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { metric: "API Response Time", value: "142ms", status: "good" },
              { metric: "Database Connections", value: "87%", status: "warning" },
              { metric: "Cache Hit Rate", value: "94%", status: "good" },
              { metric: "Error Rate", value: "0.2%", status: "good" },
            ].map((item) => (
              <div key={item.metric} className="flex items-center justify-between rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{item.metric}</p>
                  <p className="text-xs text-muted-foreground">Current status</p>
                </div>
                <Badge variant={item.status === "good" ? "default" : "secondary"} className={item.status === "good" ? "bg-green-500" : "bg-orange-500"}>
                  {item.value}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Revenue Analytics */}
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-500/60 p-1.5">
                <DollarSign className="h-5 w-5 text-pink-500" />
              </div>
              Revenue Analytics
            </CardTitle>
            <CardDescription>Financial performance and payout metrics.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Total Payouts", value: "$45,230", change: "+12.5%" },
              { label: "Pending Payouts", value: "$8,450", change: "-3.2%" },
              { label: "Avg. Payout Time", value: "2.3h", change: "-15.4%" },
              { label: "Chargeback Rate", value: "0.8%", change: "+0.1%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">Last 24 hours</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-foreground">{item.value}</p>
                  <p className={`text-xs ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {item.change}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-500/60 p-1.5">
                <TrendingUp className="h-5 w-5 text-cyan-500" />
              </div>
              Quick Actions
            </CardTitle>
            <CardDescription>Essential administrative tasks.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { action: "Review Suspicious Activity", icon: AlertTriangle, color: "from-red-400 to-orange-500" },
              { action: "Process Pending Payouts", icon: DollarSign, color: "from-green-400 to-emerald-500" },
              { action: "Update Offer Catalog", icon: Settings, color: "from-purple-400 to-pink-500" },
              { action: "Generate Reports", icon: BarChart3, color: "from-blue-400 to-cyan-500" },
            ].map((item) => (
              <Button
                key={item.action}
                className={`w-full justify-between bg-gradient-to-r from-white/5 to-transparent border border-white/15 hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${item.color} p-1.5 shadow-lg`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-left">{item.action}</span>
                </div>
                <TrendingUp className="h-4 w-4 text-primary" />
              </Button>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
