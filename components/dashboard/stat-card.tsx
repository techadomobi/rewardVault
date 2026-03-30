import type { LucideIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type StatCardProps = {
  label: string
  value: string
  delta: string
  icon: LucideIcon
  tone?: "green" | "orange" | "sky" | "purple" | "red"
  className?: string
  variant?: "default" | "highlight"
}

const toneStyles = {
  green: "from-green-400 to-emerald-500",
  orange: "from-orange-400 to-amber-500",
  sky: "from-blue-400 to-cyan-500",
  purple: "from-purple-400 to-pink-500",
  red: "from-red-400 to-orange-500",
}

const variantStyles = {
  default: "border-white/10 bg-gradient-to-r from-white/5 to-transparent",
  highlight: "border-white/20 bg-gradient-to-r from-white/10 to-transparent shadow-lg shadow-primary/10",
}

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  tone = "green",
  className,
  variant = "default",
}: StatCardProps) {
  const gradientColor = toneStyles[tone as keyof typeof toneStyles]
  const variantStyle = variantStyles[variant as keyof typeof variantStyles]

  return (
    <Card className={cn("glass-card animate-slide-up rounded-2xl py-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10", variantStyle, className)}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 pb-1">
        <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
        <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${gradientColor} p-1.5 shadow-lg`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          {value}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{delta}</p>
      </CardContent>
    </Card>
  )
}
