"use client"

const stats = [
  { value: "2019", label: "Founded" },
  { value: "$2.5M+", label: "Paid Out" },
  { value: "150K+", label: "Active Users" },
  { value: "50+", label: "Countries" },
  { value: "100+", label: "Reward Partners" },
  { value: "4.9/5", label: "User Rating" },
]

export function AboutStats() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            RewardVault by the Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our growth is driven by the trust and success of our community members.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 glass rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
