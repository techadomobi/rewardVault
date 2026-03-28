"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import { Bell, Search } from "lucide-react"

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
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(34,197,94,0.2),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(249,115,22,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(52,211,153,0.12),transparent_35%)]">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 animate-rotate-slow rounded-full bg-primary/15 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 animate-float rounded-full bg-accent/20 blur-[90px]" />

      <div className="container relative mx-auto px-4 pb-8 pt-28 md:pb-10">
        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="glass-card h-fit rounded-2xl border border-white/10 p-4 lg:sticky lg:top-24 lg:animate-slide-in-left">
            <div className="mb-5 flex items-center justify-between">
              <Badge className="bg-primary/90 text-primary-foreground">{roleLabel}</Badge>
              <Badge variant="outline" className="border-primary/40 text-primary">
                Live
              </Badge>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => {
                const active = pathname === item.href
                const Icon = item.icon

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition-all",
                      active
                        ? "border-primary/40 bg-primary/15 text-primary"
                        : "border-transparent text-muted-foreground hover:border-white/10 hover:bg-white/5 hover:text-foreground",
                    )}
                  >
                    <Icon className={cn("h-4 w-4", active ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-3">
              <p className="text-sm font-semibold text-foreground">Need quick access?</p>
              <p className="mt-1 text-xs text-muted-foreground">Pin your most used views to the top menu.</p>
              <Button asChild className="mt-3 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </aside>

          <section className="space-y-6">
            <header className="glass-card animate-slide-up rounded-2xl border border-white/10 p-4 md:p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
                  <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
                </div>
                <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search dashboard"
                      className="h-9 w-full border-white/15 bg-white/5 pl-9 sm:w-56"
                    />
                  </div>
                  <Button variant="outline" size="icon" className="h-9 w-9 border-white/15 bg-white/5 hover:bg-white/10">
                    <Bell className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </header>

            <div className="space-y-6">{children}</div>
          </section>
        </div>
      </div>
    </div>
  )
}
