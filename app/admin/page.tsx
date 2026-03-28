import { Activity, AlertTriangle, Shield, Users } from "lucide-react"

import { StatCard } from "@/components/dashboard/stat-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminOverviewPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Daily Active Users" value="18,420" delta="+6.2% from yesterday" icon={Users} />
        <StatCard label="Offer Completion" value="72.9%" delta="Healthy conversion rate" icon={Activity} tone="sky" className="delay-100" />
        <StatCard label="Risk Alerts" value="14" delta="4 need review now" icon={AlertTriangle} tone="orange" className="delay-150" />
        <StatCard label="Trust Score" value="98.4" delta="Fraud pipeline stable" icon={Shield} className="delay-200" />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-150">
          <CardHeader>
            <CardTitle>Operations Snapshot</CardTitle>
            <CardDescription>Live view of payout, offer, and moderation pipelines.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { lane: "Payout approvals", queued: 63, state: "On track" },
              { lane: "Offer quality checks", queued: 21, state: "Needs attention" },
              { lane: "Account verification", queued: 38, state: "On track" },
              { lane: "Chargeback disputes", queued: 6, state: "Low" },
            ].map((item) => (
              <div key={item.lane} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-3">
                <div>
                  <p className="text-sm font-medium">{item.lane}</p>
                  <p className="text-xs text-muted-foreground">Queue: {item.queued}</p>
                </div>
                <Badge variant={item.state === "Needs attention" ? "secondary" : "default"}>{item.state}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-200">
          <CardHeader>
            <CardTitle>Fraud Signals</CardTitle>
            <CardDescription>Triggers from heuristics and behavior patterns.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Duplicate device clusters detected in LATAM offer wall",
              "Abnormal completion spikes on campaign ID 4402",
              "VPN mismatch rate increased by 1.8% in last 12h",
              "Referral chain velocity remains within thresholds",
            ].map((signal, index) => (
              <div key={signal} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-sm">{signal}</p>
                <p className="mt-1 text-xs text-muted-foreground">Signal #{index + 1}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
