import { Copy, Crown, Users2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DashboardReferralsPage() {
  return (
    <div className="space-y-6">
      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users2 className="h-5 w-5 text-primary" />
            Referral Engine
          </CardTitle>
          <CardDescription>Share your link and collect passive bonus earnings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-black/20 p-3">
            <p className="text-xs text-muted-foreground">Your referral link</p>
            <p className="mt-1 truncate text-sm font-medium">rewardvault.com/r/alex-8472</p>
            <Button variant="outline" className="mt-3 border-white/15 bg-white/5 hover:bg-white/10">
              <Copy className="h-4 w-4" />
              Copy link
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Total invites", value: "47" },
              { label: "Active referrals", value: "19" },
              { label: "Referral earnings", value: "$351.20" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-150">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-accent" />
            Referral Leaderboard
          </CardTitle>
          <CardDescription>Top performing referrals this month.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Referrer</TableHead>
                <TableHead>Invites</TableHead>
                <TableHead>Converted</TableHead>
                <TableHead>Earnings</TableHead>
                <TableHead>Tier</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "alex-8472", invites: 47, converted: 19, earnings: "$351.20", tier: "Gold" },
                { name: "rio-2240", invites: 39, converted: 15, earnings: "$280.70", tier: "Silver" },
                { name: "mia-3305", invites: 26, converted: 11, earnings: "$192.15", tier: "Silver" },
              ].map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.invites}</TableCell>
                  <TableCell>{row.converted}</TableCell>
                  <TableCell className="text-primary">{row.earnings}</TableCell>
                  <TableCell>
                    <Badge variant={row.tier === "Gold" ? "default" : "secondary"}>{row.tier}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
