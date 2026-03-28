import { Gift, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const rewardCatalog = [
  { name: "PayPal Cash", points: "5,000", value: "$50", delivery: "Instant" },
  { name: "Steam Wallet", points: "2,500", value: "$25", delivery: "Under 5 min" },
  { name: "USDT", points: "10,000", value: "$100", delivery: "Under 10 min" },
]

export default function DashboardRewardsPage() {
  return (
    <div className="space-y-6">
      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            Reward Catalog
          </CardTitle>
          <CardDescription>Redeem points for cash, gift cards, and crypto options.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-3">
          {rewardCatalog.map((reward) => (
            <div key={reward.name} className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-medium">{reward.name}</p>
                <Badge variant="secondary">{reward.delivery}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{reward.points} points</p>
              <p className="mt-1 text-2xl font-semibold text-primary">{reward.value}</p>
              <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">Redeem now</Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-150">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent" />
            Recent Redemptions
          </CardTitle>
          <CardDescription>Track status of your latest reward claims.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reward</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Requested</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { reward: "PayPal Cash", value: "$50", date: "Today", status: "Completed" },
                { reward: "Steam Wallet", value: "$25", date: "Yesterday", status: "Processing" },
                { reward: "USDT", value: "$100", date: "2 days ago", status: "Completed" },
              ].map((row) => (
                <TableRow key={row.reward + row.date}>
                  <TableCell className="font-medium">{row.reward}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Completed" ? "default" : "secondary"}>{row.status}</Badge>
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
