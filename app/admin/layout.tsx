"use client"

import type { ReactNode } from "react"
import {
  BriefcaseBusiness,
  ChartColumnBig,
  HandCoins,
  LayoutDashboard,
  Settings2,
  Users,
} from "lucide-react"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"

const navItems = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/offers", label: "Offers", icon: BriefcaseBusiness },
  { href: "/admin/payouts", label: "Payouts", icon: HandCoins },
  { href: "/admin/analytics", label: "Analytics", icon: ChartColumnBig },
  { href: "/admin/settings", label: "Settings", icon: Settings2 },
]

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell
      title="Admin Control Center"
      subtitle="Monitor growth, manage risk, and keep reward operations healthy."
      roleLabel="Admin"
      navItems={navItems}
      ctaLabel="Review payouts"
      ctaHref="/admin/payouts"
    >
      {children}
    </DashboardShell>
  )
}
