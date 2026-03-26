"use client"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Empowering People to <span className="gradient-text">Earn More</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            RewardVault was founded with a simple mission: make it easy for anyone to earn real rewards for their time. Since 2019, we have helped over 150,000 people earn more than $2.5 million in rewards.
          </p>
        </div>
      </div>
    </section>
  )
}
