"use client"

import { Twitter, Linkedin } from "lucide-react"

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    initials: "AC",
    bio: "Former fintech executive with a passion for creating accessible earning opportunities.",
  },
  {
    name: "Sarah Williams",
    role: "CTO & Co-Founder",
    initials: "SW",
    bio: "Tech veteran who has built scalable platforms for millions of users worldwide.",
  },
  {
    name: "Michael Roberts",
    role: "Head of Partnerships",
    initials: "MR",
    bio: "Expert in building strategic relationships with top brands and advertisers.",
  },
  {
    name: "Emily Davis",
    role: "Head of Community",
    initials: "ED",
    bio: "Dedicated to ensuring every user has an amazing experience on our platform.",
  },
]

export function AboutTeam() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Our Team
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Meet the People Behind RewardVault
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate team dedicated to helping you earn more every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center group hover:scale-[1.02] transition-transform">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                {member.initials}
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

              {/* Social */}
              <div className="flex items-center justify-center gap-3">
                <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                  <Twitter className="w-4 h-4 text-muted-foreground" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
