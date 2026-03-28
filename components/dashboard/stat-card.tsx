import type { LucideIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type StatCardProps = {
  label: string
  value: string
  delta: string
  icon: LucideIcon
  tone?: "green" | "orange" | "sky"
  className?: string
}

const toneStyles = {
  green: "text-primary",
  orange: "text-accent",
  sky: "text-cyan-300",
}

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  tone = "green",
  className,
}: StatCardProps) {
  return (
    <Card className={cn("glass-card animate-slide-up rounded-2xl border border-white/10 py-4", className)}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 pb-1">
        <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
        <Icon className={cn("h-4 w-4", toneStyles[tone])} />
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
        <p className="mt-1 text-xs text-muted-foreground">{delta}</p>
      </CardContent>
    </Card>
  )
}
