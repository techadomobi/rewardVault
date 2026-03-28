import { BadgeCheck, ShieldAlert } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const users = [
  { id: "U-18220", name: "Alex M", country: "US", level: "Gold", kyc: "Verified", risk: "Low" },
  { id: "U-18002", name: "Rina K", country: "DE", level: "Silver", kyc: "Pending", risk: "Medium" },
  { id: "U-17991", name: "Milo T", country: "BR", level: "Gold", kyc: "Verified", risk: "Low" },
  { id: "U-17912", name: "Noah P", country: "IN", level: "Bronze", kyc: "Review", risk: "High" },
]

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <Card className="glass-card animate-slide-up rounded-2xl border-white/10 py-5">
        <CardHeader>
          <CardTitle>User Monitoring</CardTitle>
          <CardDescription>KYC, trust level, and risk profile for active users.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>KYC</TableHead>
                <TableHead>Risk</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.country}</TableCell>
                  <TableCell>{user.level}</TableCell>
                  <TableCell>
                    <Badge variant={user.kyc === "Verified" ? "default" : "secondary"}>
                      {user.kyc === "Verified" && <BadgeCheck className="h-3 w-3" />}
                      {user.kyc}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.risk === "High" ? "destructive" : user.risk === "Medium" ? "secondary" : "default"}>
                      {user.risk === "High" && <ShieldAlert className="h-3 w-3" />}
                      {user.risk}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
