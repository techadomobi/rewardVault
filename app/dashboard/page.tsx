"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  TrendingUp, 
  DollarSign, 
  Gift, 
  Users, 
  Calendar, 
  Clock, 
  Star, 
  TrendingDown,
  Plus,
  Eye,
  EyeOff
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  const [showEarnings, setShowEarnings] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const userStats = {
    totalEarnings: 1247.50,
    monthlyEarnings: 342.80,
    pendingPayouts: 89.50,
    completedTasks: 156,
    activeOffers: 8,
    referralEarnings: 45.20
  }

  const recentActivity = [
    { id: 1, type: "offer", title: "Complete Survey", amount: 5.00, date: "2 hours ago", status: "completed" },
    { id: 2, type: "referral", title: "Friend Signup Bonus", amount: 10.00, date: "1 day ago", status: "pending" },
    { id: 3, type: "offer", title: "App Download", amount: 2.50, date: "2 days ago", status: "completed" },
    { id: 4, type: "reward", title: "Gift Card Redemption", amount: -25.00, date: "3 days ago", status: "completed" },
    { id: 5, type: "offer", title: "Video Watch", amount: 1.00, date: "4 days ago", status: "completed" }
  ]

  const activeOffers = [
    { id: 1, title: "Sign up for Premium", reward: 25.00, progress: 60, category: "Finance" },
    { id: 2, title: "Download Shopping App", reward: 10.00, progress: 25, category: "Shopping" },
    { id: 3, title: "Complete Profile", reward: 5.00, progress: 80, category: "Profile" }
  ]

  const earningsChart = [
    { month: "Jan", earnings: 240 },
    { month: "Feb", earnings: 180 },
    { month: "Mar", earnings: 320 },
    { month: "Apr", earnings: 280 },
    { month: "May", earnings: 420 },
    { month: "Jun", earnings: 342 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold gradient-text-animated mb-2">
              Welcome Back, Alex
            </h1>
            <p className="text-muted-foreground">Your earning dashboard is ready</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setShowEarnings(!showEarnings)}
              className="flex items-center space-x-2"
            >
              {showEarnings ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showEarnings ? "Hide" : "Show"} Earnings</span>
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Start Earning
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {showEarnings ? `$${userStats.totalEarnings.toFixed(2)}` : "••••"}
              </div>
              <p className="text-xs text-muted-foreground">All time earnings</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {showEarnings ? `$${userStats.monthlyEarnings.toFixed(2)}` : "••••"}
              </div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Payouts</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {showEarnings ? `$${userStats.pendingPayouts.toFixed(2)}` : "••••"}
              </div>
              <p className="text-xs text-muted-foreground">Processing</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Referral Earnings</CardTitle>
              <Users className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {showEarnings ? `$${userStats.referralEarnings.toFixed(2)}` : "••••"}
              </div>
              <p className="text-xs text-muted-foreground">From 3 referrals</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="offers">Active Offers</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Earnings Chart */}
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Monthly Earnings</span>
                </CardTitle>
                <CardDescription>Your earnings over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end space-x-4">
                  {earningsChart.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                      <div 
                        className="w-full bg-gradient-to-t from-primary/20 to-primary/60 rounded-t-lg transition-all hover:from-primary/40 hover:to-primary/80"
                        style={{ height: `${(item.earnings / 420) * 100}%` }}
                      />
                      <span className="text-xs text-muted-foreground">{item.month}</span>
                      <span className="text-sm font-medium">${item.earnings}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Gift className="h-5 w-5" />
                    <span>Redeem Rewards</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Exchange your points for exciting rewards</p>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                    View Catalog
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Refer & Earn</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Invite friends and earn bonuses</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Your Referral Link</span>
                    <Button variant="outline" size="sm">Copy Link</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5" />
                    <span>Level Up</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Reach VIP status for exclusive benefits</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current Level: Silver</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground">Next level in $125 more earnings</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest transactions and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${
                          activity.type === "offer" ? "bg-green-100 text-green-600" :
                          activity.type === "referral" ? "bg-purple-100 text-purple-600" :
                          "bg-red-100 text-red-600"
                        }`}>
                          {activity.type === "offer" && <Gift className="h-4 w-4" />}
                          {activity.type === "referral" && <Users className="h-4 w-4" />}
                          {activity.type === "reward" && <TrendingDown className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${
                          activity.amount > 0 ? "text-green-600" : "text-red-600"
                        }`}>
                          {activity.amount > 0 ? `+$${activity.amount.toFixed(2)}` : `-$${Math.abs(activity.amount).toFixed(2)}`}
                        </p>
                        <Badge variant={activity.status === "completed" ? "default" : "secondary"}>
                          {activity.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="offers" className="space-y-6">
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle>Active Offers</CardTitle>
                <CardDescription>Complete these offers to earn more</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeOffers.map((offer) => (
                    <div key={offer.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                          <AvatarFallback>{offer.title.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{offer.title}</p>
                          <p className="text-sm text-muted-foreground">{offer.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">${offer.reward.toFixed(2)}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Progress value={offer.progress} className="w-24 h-2" />
                          <span className="text-sm text-muted-foreground">{offer.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle>Reward Status</CardTitle>
                <CardDescription>Your current reward points and status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Available Points</span>
                      <span className="text-2xl font-bold text-green-600">12,475</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Pending Points</span>
                      <span className="text-lg font-semibold text-yellow-600">895</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Total Redeemed</span>
                      <span className="text-lg font-semibold text-blue-600">25,200</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>VIP Status Progress</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} className="h-3" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Next reward tier: Gold (in 2,525 more points)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}