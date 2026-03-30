"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import { Bell, Search, User, Settings, BarChart3, DollarSign, Target, Shield } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type NavItem = {
  href: string
  label: string
  icon: LucideIcon
}

type DashboardShellProps = {
  title: string
  subtitle: string
  roleLabel: string
  navItems: NavItem[]
  children: ReactNode
  ctaLabel: string
  ctaHref: string
}

export function DashboardShell({
  title,
  subtitle,
  roleLabel,
  navItems,
  children,
  ctaLabel,
  ctaHref,
}: DashboardShellProps) {
  const pathname = usePathname()

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(34,197,94,0.15),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(249,115,22,0.15),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(52,211,153,0.15),transparent_35%)]">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 animate-rotate-slow rounded-full bg-gradient-to-br from-primary/20 via-cyan-500/10 to-transparent blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 animate-float rounded-full bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent blur-[90px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full bg-gradient-to-br from-green-500/5 via-blue-500/5 to-transparent blur-[120px]" />

      <div className="container relative mx-auto px-4 pb-8 pt-28 md:pb-10">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Enhanced Sidebar Navigation */}
          <aside className="glass-card h-fit rounded-2xl border border-white/10 p-4 lg:sticky lg:top-24 lg:animate-slide-in-left">
            {/* User Info & Status */}
            <div className="mb-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/60 p-2">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Welcome back</p>
                    <p className="text-xs text-muted-foreground">Active session</p>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg">
                  {roleLabel}
                </Badge>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
              {navItems.map((item) => {
                const active = pathname === item.href
                const Icon = item.icon

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition-all duration-300",
                      active
                        ? "border-primary/40 bg-gradient-to-r from-primary/15 to-primary/5 text-primary shadow-lg shadow-primary/10"
                        : "border-transparent text-muted-foreground hover:border-white/15 hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent hover:text-foreground",
                    )}
                  >
                    <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${active ? 'from-primary/20 to-primary/60' : 'from-white/10 to-transparent'} p-1.5 shadow-lg transition-all duration-300 group-hover:from-white/20 group-hover:to-transparent`}>
                      <Icon className={cn("h-5 w-5", active ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                    </div>
                    <span className="font-medium">{item.label}</span>
                    {active && (
                      <div className="ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-primary to-primary/60 animate-pulse" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Quick Actions */}
            <div className="mt-6 space-y-3 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-4">
              <p className="text-sm font-semibold text-foreground">Quick Actions</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: BarChart3, label: "Analytics", href: "/dashboard" },
                  { icon: DollarSign, label: "Wallet", href: "/dashboard/wallet" },
                  { icon: Target, label: "Offers", href: "/dashboard/offers" },
                  { icon: Shield, label: "Security", href: "/settings" },
                ].map((action) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    size="sm"
                    asChild
                    className="justify-start border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/20"
                  >
                    <Link href={action.href}>
                      <action.icon className="mr-2 h-3 w-3" />
                      {action.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-6 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-transparent p-4">
              <p className="text-sm font-semibold text-foreground">Need quick access?</p>
              <p className="mt-1 text-xs text-muted-foreground">Pin your most used views to the top menu.</p>
              <Button asChild className="mt-3 w-full bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="space-y-6">
            {/* Enhanced Header */}
            <header className="glass-card animate-slide-up rounded-2xl border border-white/10 p-4 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold md:text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {title}
                  </h1>
                  <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
                </div>
                
                {/* Search & Actions */}
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                  {/* Enhanced Search */}
                  <div className="relative flex-1 sm:flex-initial sm:w-64">
                    <div className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground">
                      <Search className="h-4 w-4" />
                    </div>
                    <Input
                      placeholder="Search dashboard, offers, transactions..."
                      className="h-10 w-full border-white/15 bg-white/5 pl-9 pr-10 shadow-sm"
                    />
                    <div className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60">
                      <span className="text-xs">⌘K</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-10 w-10 border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/20">
                      <Bell className="h-4 w-4" />
                    </Button>
                    <Button className="h-10 bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                      Quick Actions
                    </Button>
                  </div>
                </div>
              </div>

              {/* Breadcrumb Navigation */}
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <span>Dashboard</span>
                <span className="text-foreground">/</span>
                <span className="text-foreground font-medium">{title}</span>
              </div>
            </header>

            {/* Content Area */}
            <div className="space-y-6">{children}</div>
          </section>
        </div>
      </div>
    </div>
  )
}
