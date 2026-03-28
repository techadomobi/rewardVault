import { CreditCard, Landmark, WalletCards } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DashboardWalletPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Available", value: "$482.75", icon: WalletCards },
          { label: "Pending", value: "$42.30", icon: Landmark },
          { label: "Total withdrawn", value: "$2,960.00", icon: CreditCard },
        ].map((item, index) => (
          <Card key={item.label} className={`glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-${(index + 1) * 100}`}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-sm text-muted-foreground">
                {item.label}
                <item.icon className="h-4 w-4 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5 delay-200">
        <CardHeader>
          <CardTitle>Payout Methods</CardTitle>
          <CardDescription>Manage available withdrawal channels and processing priority.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { method: "PayPal", fee: "1.5%", eta: "Instant", readiness: 100 },
            { method: "USDT TRC20", fee: "0.8%", eta: "10 min", readiness: 82 },
            { method: "Bank Transfer", fee: "2.2%", eta: "1-2 days", readiness: 64 },
          ].map((item) => (
            <div key={item.method} className="rounded-xl border border-white/10 bg-black/20 p-3">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.method}</p>
                  <p className="text-xs text-muted-foreground">Fee: {item.fee} - ETA: {item.eta}</p>
                </div>
                <Badge variant="secondary">{item.readiness}% health</Badge>
              </div>
              <Progress value={item.readiness} className="h-2" />
            </div>
          ))}
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Request withdrawal</Button>
        </CardContent>
      </Card>
    </div>
  )
}
