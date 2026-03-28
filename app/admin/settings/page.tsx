import { Globe2, ShieldCheck, SlidersHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-primary" />
            Platform Settings
          </CardTitle>
          <CardDescription>Global controls for campaigns, trust, and risk automation.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { title: "Auto-approve low-risk payouts", detail: "Instant approval for trust score above 95" },
            { title: "Geo-based offer filtering", detail: "Match offers based on user region and compliance" },
            { title: "Referral abuse prevention", detail: "Block suspicious referral bursts automatically" },
          ].map((setting) => (
            <div key={setting.title} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 p-3">
              <div>
                <p className="text-sm font-medium">{setting.title}</p>
                <p className="text-xs text-muted-foreground">{setting.detail}</p>
              </div>
              <Switch defaultChecked />
            </div>
          ))}

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3">
              <p className="mb-1 inline-flex items-center gap-2 text-sm font-medium">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Security posture
              </p>
              <Badge>Strong</Badge>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3">
              <p className="mb-1 inline-flex items-center gap-2 text-sm font-medium">
                <Globe2 className="h-4 w-4 text-primary" />
                API region
              </p>
              <Badge variant="secondary">Global - Auto</Badge>
            </div>
          </div>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Save settings</Button>
        </CardContent>
      </Card>
    </div>
  )
}
