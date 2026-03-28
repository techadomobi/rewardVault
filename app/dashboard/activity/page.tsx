import { BadgeCheck, CircleDollarSign, Gift, ShieldCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const events = [
  { id: "TX-9012", source: "Premium Survey", type: "Offer", amount: "+$8.50", status: "Completed", time: "8 min ago" },
  { id: "TX-9011", source: "Referral Bonus", type: "Referral", amount: "+$10.00", status: "Pending", time: "2 h ago" },
  { id: "TX-9009", source: "Gift Card Redeem", type: "Payout", amount: "-$50.00", status: "Completed", time: "Yesterday" },
  { id: "TX-9007", source: "Mobile Install", type: "Offer", amount: "+$3.20", status: "Completed", time: "Yesterday" },
  { id: "TX-9002", source: "Identity Check", type: "Security", amount: "+$0.00", status: "Verified", time: "2 days ago" },
]

export default function DashboardActivityPage() {
  return (
    <div className="space-y-6">
      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5">
        <CardHeader>
          <CardTitle>Activity Timeline</CardTitle>
          <CardDescription>All account actions, payouts, and verifications in one stream.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          {[
            { label: "Completed today", value: "14", icon: BadgeCheck },
            { label: "Pending rewards", value: "$42.30", icon: CircleDollarSign },
            { label: "Redemptions", value: "3", icon: Gift },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <item.icon className="h-4 w-4 text-primary" />
              </div>
              <p className="text-2xl font-semibold">{item.value}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-150">
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
          <CardDescription>Detailed record for reward and payout events.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.id}</TableCell>
                  <TableCell>{event.source}</TableCell>
                  <TableCell>{event.type}</TableCell>
                  <TableCell className={event.amount.startsWith("+") ? "text-primary" : "text-accent"}>
                    {event.amount}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={event.status === "Completed" || event.status === "Verified" ? "default" : "secondary"}
                    >
                      {event.status === "Verified" && <ShieldCheck className="h-3 w-3" />}
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{event.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
