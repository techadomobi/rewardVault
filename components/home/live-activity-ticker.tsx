"use client"

import { useEffect, useState } from "react"
import { Gift, DollarSign, Trophy } from "lucide-react"

const activities = [
  { user: "Alex M.", action: "earned", amount: "500 points", type: "offer", icon: Gift },
  { user: "Sarah K.", action: "cashed out", amount: "$25 PayPal", type: "cashout", icon: DollarSign },
  { user: "Mike T.", action: "reached", amount: "Gold Status", type: "achievement", icon: Trophy },
  { user: "Emma R.", action: "earned", amount: "1,200 points", type: "offer", icon: Gift },
  { user: "John D.", action: "cashed out", amount: "$50 Amazon", type: "cashout", icon: DollarSign },
  { user: "Lisa P.", action: "earned", amount: "800 points", type: "offer", icon: Gift },
  { user: "Chris B.", action: "reached", amount: "Platinum Status", type: "achievement", icon: Trophy },
  { user: "Amy W.", action: "earned", amount: "2,500 points", type: "offer", icon: Gift },
  { user: "David L.", action: "cashed out", amount: "0.005 BTC", type: "cashout", icon: DollarSign },
  { user: "Nina S.", action: "earned", amount: "350 points", type: "offer", icon: Gift },
]

const getRandomActivity = () => {
  const activity = activities[Math.floor(Math.random() * activities.length)]
  const timeAgo = Math.floor(Math.random() * 30) + 1
  return { ...activity, timeAgo, id: Math.random() }
}

export function LiveActivityTicker() {
  const [currentActivities, setCurrentActivities] = useState<Array<ReturnType<typeof getRandomActivity>>>(() => [
    getRandomActivity(),
    getRandomActivity(),
    getRandomActivity(),
  ])
  const isVisible = true

  useEffect(() => {
    // Add new activity periodically
    const interval = setInterval(() => {
      setCurrentActivities(prev => {
        const newActivities = [getRandomActivity(), ...prev.slice(0, 2)]
        return newActivities
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getIconColor = (type: string) => {
    switch (type) {
      case "offer": return "text-primary bg-primary/20"
      case "cashout": return "text-accent bg-accent/20"
      case "achievement": return "text-yellow-500 bg-yellow-500/20"
      default: return "text-primary bg-primary/20"
    }
  }

  return (
    <section className="py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-foreground">Live Activity</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
        </div>

        <div className="flex flex-col gap-3">
          {currentActivities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.id}
                className={`
                  glass-card rounded-xl px-4 py-3 flex items-center gap-4
                  transition-all duration-500 ease-out
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                `}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animation: index === 0 ? 'slideInFromLeft 0.5s ease-out' : undefined
                }}
              >
                <div className={`w-10 h-10 rounded-full ${getIconColor(activity.type)} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate">
                    <span className="font-semibold">{activity.user}</span>
                    {" "}{activity.action}{" "}
                    <span className="text-primary font-semibold">{activity.amount}</span>
                  </p>
                </div>
                <div className="text-xs text-muted-foreground flex-shrink-0">
                  {activity.timeAgo}s ago
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
