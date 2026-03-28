"use client"

import type { ReactNode } from "react"
import {
  BriefcaseBusiness,
  Gift,
  History,
  LayoutGrid,
  Users2,
  Wallet,
} from "lucide-react"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutGrid },
  { href: "/dashboard/activity", label: "Activity", icon: History },
  { href: "/dashboard/offers", label: "Offers", icon: BriefcaseBusiness },
  { href: "/dashboard/rewards", label: "Rewards", icon: Gift },
  { href: "/dashboard/wallet", label: "Wallet", icon: Wallet },
  { href: "/dashboard/referrals", label: "Referrals", icon: Users2 },
]

export default function UserDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell
      title="User Dashboard"
      subtitle="Track earnings, complete offers, and withdraw rewards in one place."
      roleLabel="User"
      navItems={navItems}
      ctaLabel="Browse offers"
      ctaHref="/dashboard/offers"
    >
      {children}
    </DashboardShell>
  )
}
