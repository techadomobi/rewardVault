"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Shield, 
  Bell, 
  Globe, 
  CreditCard, 
  User, 
  Key, 
  Eye, 
  EyeOff, 
  Save, 
  Trash2, 
  Download,
  Upload,
  Moon,
  Sun,
  Languages,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Mail,
  Smartphone,
  Monitor
} from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  })
  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionTimeout: true,
    loginAlerts: true
  })

  const handleNotificationToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleSecurityToggle = (key: keyof typeof security) => {
    setSecurity(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleSave = () => {
    // In a real app, this would save to a backend
    console.log('Settings saved:', { isDarkMode, notifications, security })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text-animated mb-2">
              Account Settings
            </h1>
            <p className="text-muted-foreground">Customize your experience and manage your account</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6">
              {/* Theme Settings */}
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Sun className="h-5 w-5 text-primary" />
                    </div>
                    <span>Theme & Display</span>
                  </CardTitle>
                  <CardDescription>Customize the appearance of your dashboard</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                    </div>
                    <Switch
                      checked={isDarkMode}
                      onCheckedChange={setIsDarkMode}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English (US)</SelectItem>
                          <SelectItem value="en-gb">English (UK)</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger id="currency">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD - US Dollar</SelectItem>
                          <SelectItem value="eur">EUR - Euro</SelectItem>
                          <SelectItem value="gbp">GBP - British Pound</SelectItem>
                          <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                          <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dashboard Preferences */}
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Monitor className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>Dashboard Preferences</span>
                  </CardTitle>
                  <CardDescription>Customize your dashboard layout and behavior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dashboardLayout">Dashboard Layout</Label>
                      <Select defaultValue="default">
                        <SelectTrigger id="dashboardLayout">
                          <SelectValue placeholder="Select layout" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Default</SelectItem>
                          <SelectItem value="compact">Compact</SelectItem>
                          <SelectItem value="detailed">Detailed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="refreshRate">Auto-refresh Rate</Label>
                      <Select defaultValue="5min">
                        <SelectTrigger id="refreshRate">
                          <SelectValue placeholder="Select refresh rate" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30sec">30 seconds</SelectItem>
                          <SelectItem value="1min">1 minute</SelectItem>
                          <SelectItem value="5min">5 minutes</SelectItem>
                          <SelectItem value="15min">15 minutes</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Show Earnings History</Label>
                      <p className="text-sm text-muted-foreground">Display your earnings chart on the dashboard</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <span>Security Settings</span>
                  </CardTitle>
                  <CardDescription>Manage your account security and privacy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Two-Factor Authentication */}
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Key className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Two-Factor Authentication</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch
                      checked={security.twoFactor}
                      onCheckedChange={() => handleSecurityToggle('twoFactor')}
                    />
                  </div>

                  {/* Session Management */}
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Eye className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Session Timeout</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Automatically log out after 30 minutes of inactivity</p>
                    </div>
                    <Switch
                      checked={security.sessionTimeout}
                      onCheckedChange={() => handleSecurityToggle('sessionTimeout')}
                    />
                  </div>

                  {/* Login Alerts */}
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <span className="font-medium">Login Alerts</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Get notified when your account is accessed from a new device</p>
                    </div>
                    <Switch
                      checked={security.loginAlerts}
                      onCheckedChange={() => handleSecurityToggle('loginAlerts')}
                    />
                  </div>

                  {/* Security Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Key className="h-4 w-4" />
                      <span>Change Password</span>
                    </Button>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>View Active Sessions</span>
                    </Button>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download Data</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Bell className="h-5 w-5 text-purple-600" />
                    </div>
                    <span>Notification Preferences</span>
                  </CardTitle>
                  <CardDescription>Choose how and when you want to be notified</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Email Notifications */}
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="font-medium">Email Notifications</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Receive important updates via email</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={() => handleNotificationToggle('email')}
                    />
                  </div>

                  {/* Push Notifications */}
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Push Notifications</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Get real-time notifications on your mobile device</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={() => handleNotificationToggle('push')}
                    />
                  </div>

                  {/* SMS Notifications */}
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-5 w-5 text-orange-600" />
                        <span className="font-medium">SMS Notifications</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Receive text messages for critical updates</p>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={() => handleNotificationToggle('sms')}
                    />
                  </div>

                  {/* Notification Types */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Notification Types</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-3 border border-border rounded">
                        <div>
                          <p className="font-medium">Earnings Updates</p>
                          <p className="text-sm text-muted-foreground">Notify me when I earn rewards</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-border rounded">
                        <div>
                          <p className="font-medium">New Offers</p>
                          <p className="text-sm text-muted-foreground">Alert me about new available offers</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-border rounded">
                        <div>
                          <p className="font-medium">Referral Bonuses</p>
                          <p className="text-sm text-muted-foreground">Notify me when referrals earn</p>
                        </div>
                        <Switch />
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-border rounded">
                        <div>
                          <p className="font-medium">Account Security</p>
                          <p className="text-sm text-muted-foreground">Security-related notifications</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <User className="h-5 w-5 text-red-600" />
                    </div>
                    <span>Account Management</span>
                  </CardTitle>
                  <CardDescription>Manage your account settings and data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Account Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="accountEmail">Email Address</Label>
                      <Input
                        id="accountEmail"
                        type="email"
                        value="alex.johnson@example.com"
                        disabled
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accountPhone">Phone Number</Label>
                      <Input
                        id="accountPhone"
                        value="+1 (555) 123-4567"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  {/* Data Management */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Data Management</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="flex items-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download My Data</span>
                      </Button>
                      <Button variant="outline" className="flex items-center space-x-2">
                        <Upload className="h-4 w-4" />
                        <span>Export Transaction History</span>
                      </Button>
                    </div>
                  </div>

                  {/* Account Actions */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Account Actions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Verify Account
                      </Button>
                      <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Close Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Save Button */}
          <div className="flex justify-end mt-8">
            <Button 
              onClick={handleSave}
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save All Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}