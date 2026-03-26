"use client"

import { Shield, Users, Zap, Heart } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We operate with complete transparency. No hidden fees, no deceptive practices. What you see is what you get, always.",
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Our users are at the heart of everything we do. We listen, adapt, and constantly improve based on community feedback.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously seek new ways to help our users earn more. From new offer types to better technology, we never stop improving.",
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We only partner with legitimate advertisers and thoroughly vet all offers to ensure they provide real value to our users.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/20",
  },
]

export function AboutValues() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Our Values
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            What We Stand For
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core values guide every decision we make and every feature we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center group hover:scale-[1.02] transition-transform">
              <div className={`w-14 h-14 rounded-xl ${value.bgColor} flex items-center justify-center mx-auto mb-4`}>
                <value.icon className={`w-7 h-7 ${value.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
