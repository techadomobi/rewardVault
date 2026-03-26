"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const partners = [
  { name: "Amazon", logo: "Amazon" },
  { name: "PayPal", logo: "PayPal" },
  { name: "Steam", logo: "Steam" },
  { name: "Netflix", logo: "Netflix" },
  { name: "Spotify", logo: "Spotify" },
  { name: "Apple", logo: "Apple" },
  { name: "Google Play", logo: "Google Play" },
  { name: "Xbox", logo: "Xbox" },
  { name: "Visa", logo: "Visa" },
  { name: "Bitcoin", logo: "Bitcoin" },
  { name: "Ethereum", logo: "Ethereum" },
  { name: "Target", logo: "Target" },
]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`flex gap-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[...partners, ...partners].map((partner, index) => (
        <div
          key={index}
          className="glass-card rounded-xl px-8 py-4 text-muted-foreground font-semibold text-lg 
                     hover:text-primary hover:scale-105 hover:bg-primary/10
                     transition-all duration-300 cursor-pointer whitespace-nowrap
                     flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          {partner.logo}
        </div>
      ))}
    </div>
  )
}

export function PartnersSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`
            text-center mb-12
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Trusted Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Redeem Rewards From <span className="gradient-text">Top Brands</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose from hundreds of gift cards, crypto, and cash options
          </p>
        </div>

        {/* Partners Marquee */}
        <div 
          className={`
            relative
            transition-all duration-700 ease-out delay-200
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Marquee container */}
          <div className="overflow-hidden">
            <div className="flex flex-col gap-4">
              <MarqueeRow />
              <MarqueeRow reverse />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
