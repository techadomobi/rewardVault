"use client"

import { Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Student",
    avatar: "SM",
    content: "I have been using RewardVault for 6 months and have earned over $500. It is perfect for earning extra money between classes. The app offers are my favorite!",
    rating: 5,
    earned: "$523",
    gradient: "from-primary/20 to-emerald-500/20",
  },
  {
    name: "James K.",
    role: "Freelancer",
    avatar: "JK",
    content: "What I love most is the variety of offers. Surveys, app downloads, watching videos - there is always something to do. Payouts are always on time.",
    rating: 5,
    earned: "$1,240",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Emily R.",
    role: "Stay-at-home Mom",
    avatar: "ER",
    content: "This has been a game-changer for our family budget. I complete offers while the kids nap and have earned enough for holiday gifts. Highly recommend!",
    rating: 5,
    earned: "$890",
    gradient: "from-accent/20 to-amber-500/20",
  },
]

function TestimonialCard({ 
  testimonial, 
  index,
  isVisible 
}: { 
  testimonial: typeof testimonials[0]
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`
        glass-card rounded-2xl p-6 md:p-8 relative group cursor-pointer
        transition-all duration-500 ease-out
        hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <Quote className="absolute top-0 right-0 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
        
        {/* Rating with animation */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star 
              key={i} 
              className="w-4 h-4 fill-yellow-500 text-yellow-500 group-hover:scale-110 transition-transform"
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
          {testimonial.content}
        </p>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-semibold group-hover:scale-110 group-hover:rotate-6 transition-transform">
              {testimonial.avatar}
            </div>
            <div>
              <div className="font-semibold text-foreground">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Earned</div>
            <div className="font-bold text-primary text-lg group-hover:scale-110 transition-transform origin-right">
              {testimonial.earned}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 md:py-32 relative bg-card/50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`
            text-center mb-16
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our <span className="gradient-text">Users</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied users who are already earning real rewards every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
