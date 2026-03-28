"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  DollarSign, 
  Gift, 
  Users, 
  TrendingUp, 
  TrendingDown, 
  Search,
  Download,
  Eye,
  EyeOff
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("earnings")
  const [showAmounts, setShowAmounts] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")

  // Mock data for different activity types
  const earningsData = [
    { id: 1, type: "offer", title: "Complete Survey", amount: 5.00, date: "2024-06-15", status: "completed", category: "Surveys" },
    { id: 2, type: "referral", title: "Friend Signup Bonus", amount: 10.00, date: "2024-06-14", status: "completed", category: "Referrals" },
    { id: 3, type: "offer", title: "App Download", amount: 2.50, date: "2024-06-13", status: "completed", category: "Downloads" },
    { id: 4, type: "reward", title: "Gift Card Redemption", amount: -25.00, date: "2024-06-12", status: "completed", category: "Redemptions" },
    { id: 5, type: "offer", title: "Video Watch", amount: 1.00, date: "2024-06-11", status: "completed", category: "Videos" },
    { id: 6, type: "offer", title: "Sign up for Premium", amount: 25.00, date: "2024-06-10", status: "pending", category: "Finance" },
    { id: 7, type: "referral", title: "Friend's First Purchase", amount: 15.00, date: "2024-06-09", status: "pending", category: "Referrals" },
    { id: 8, type: "offer", title: "Complete Profile", amount: 5.00, date: "2024-06-08", status: "completed", category: "Profile" }
  ]

  const rewardsData = [
    { id: 1, title: "Amazon Gift Card", amount: -50.00, date: "2024-06-10", status: "processing", points: 5000 },
    { id: 2, title: "PayPal Cash", amount: -25.00, date: "2024-06-05", status: "completed", points: 2500 },
    { id: 3, title: "Starbucks Gift Card", amount: -10.00, date: "2024-05-28", status: "completed", points: 1000 },
    { id: 4, title: "Charity Donation", amount: -100.00, date: "2024-05-15", status: "completed", points: 10000 }
  ]

  const offersData = [
    { id: 1, title: "Sign up for Premium", reward: 25.00, progress: 60, category: "Finance", status: "in_progress" },
    { id: 2, title: "Download Shopping App", reward: 10.00, progress: 25, category: "Shopping", status: "in_progress" },
    { id: 3, title: "Complete Profile", reward: 5.00, progress: 80, category: "Profile", status: "in_progress" },
    { id: 4, title: "Watch Welcome Video", reward: 2.00, progress: 100, category: "Videos", status: "completed" },
    { id: 5, title: "Refer 3 Friends", reward: 30.00, progress: 40, category: "Referrals", status: "in_progress" }
  ]

  const filteredEarnings = earningsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterType === "all" || item.type === filterType
    return matchesSearch && matchesFilter
  })

  const getEarningsIcon = (type: string) => {
    switch (type) {
      case "offer": return <Gift className="h-4 w-4 text-green-600" />
      case "referral": return <Users className="h-4 w-4 text-purple-600" />
      case "reward": return <TrendingDown className="h-4 w-4 text-red-600" />
      default: return <DollarSign className="h-4 w-4 text-blue-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800"
      case "pending": return "bg-yellow-100 text-yellow-800"
      case "processing": return "bg-blue-100 text-blue-800"
      case "failed": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background">
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text-animated mb-2">
              Activity History
            </h1>
            <p className="text-muted-foreground">Track your earnings, rewards, and completed offers</p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="offer">Offers</SelectItem>
                  <SelectItem value="referral">Referrals</SelectItem>
                  <SelectItem value="reward">Rewards</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowAmounts(!showAmounts)}
                className="flex items-center space-x-2"
              >
                {showAmounts ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{showAmounts ? "Hide" : "Show"} Amounts</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger>
            </TabsList>

            <TabsContent value="earnings" className="space-y-6">
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5" />
                    <span>Earnings History</span>
                  </CardTitle>
                  <CardDescription>Track all your earnings and transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredEarnings.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            {getEarningsIcon(item.type)}
                          </div>
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.category} • {item.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${
                            item.amount > 0 ? "text-green-600" : "text-red-600"
                          }`}>
                            {showAmounts ? (
                              item.amount > 0 ? `+$${item.amount.toFixed(2)}` : `-$${Math.abs(item.amount).toFixed(2)}`
                            ) : "••••"}
                          </p>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
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
                  <CardTitle className="flex items-center space-x-2">
                    <Gift className="h-5 w-5" />
                    <span>Reward History</span>
                  </CardTitle>
                  <CardDescription>Your redeemed rewards and gift cards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rewardsData.map((reward) => (
                      <div key={reward.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <Gift className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium">{reward.title}</p>
                            <p className="text-sm text-muted-foreground">{reward.date} • {reward.points} points</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-red-600">
                            {showAmounts ? `-$${reward.amount.toFixed(2)}` : "••••"}
                          </p>
                          <Badge className={getStatusColor(reward.status)}>
                            {reward.status}
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
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Offer Progress</span>
                  </CardTitle>
                  <CardDescription>Track your progress on active and completed offers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {offersData.map((offer) => (
                      <div key={offer.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <Gift className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">{offer.title}</p>
                            <p className="text-sm text-muted-foreground">{offer.category}</p>
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <div className="flex items-center space-x-4">
                            <span className="font-bold text-green-600">
                              {showAmounts ? `$${offer.reward.toFixed(2)}` : "••••"}
                            </span>
                            <Badge variant={offer.status === "completed" ? "default" : "secondary"}>
                              {offer.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2">
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
          </Tabs>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="glass-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {showAmounts ? "$124.50" : "••••"}
                </div>
                <p className="text-xs text-muted-foreground">All time earnings</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Redeemed</CardTitle>
                <TrendingDown className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {showAmounts ? "$185.00" : "••••"}
                </div>
                <p className="text-xs text-muted-foreground">Gift cards & rewards</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {showAmounts ? "$1,247.50" : "••••"}
                </div>
                <p className="text-xs text-muted-foreground">Available for redemption</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}