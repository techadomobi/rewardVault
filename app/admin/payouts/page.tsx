import { BadgeDollarSign, CircleAlert, TimerReset } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminPayoutsPage() {
  return (
    <div className="space-y-6">
      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5 text-primary" />
            Payout Queue
          </CardTitle>
          <CardDescription>Approve, hold, or escalate redemptions with risk context.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: "P-1220", user: "U-18220", method: "PayPal", amount: "$50", age: "4m", status: "Ready" },
                { id: "P-1218", user: "U-17912", method: "USDT", amount: "$100", age: "17m", status: "Review" },
                { id: "P-1215", user: "U-18002", method: "Steam", amount: "$25", age: "31m", status: "Ready" },
              ].map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.id}</TableCell>
                  <TableCell>{row.user}</TableCell>
                  <TableCell>{row.method}</TableCell>
                  <TableCell className="text-primary">{row.amount}</TableCell>
                  <TableCell className="text-muted-foreground">{row.age}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Ready" ? "default" : "secondary"}>
                      {row.status === "Ready" ? <TimerReset className="h-3 w-3" /> : <CircleAlert className="h-3 w-3" />}
                      {row.status}
                    </Badge>
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
