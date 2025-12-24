"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2, UserPlus } from "lucide-react"

export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      author: "Ahmet Y.",
      authorInitials: "AY",
      company: "TechNova",
      sector: "Teknoloji",
      content: "İlk 100 müşteriye ulaştık! 🎉 MarTech ERP sayesinde marka kimliğimizi netleştirdik ve müşteri tabanımızı büyüttük.",
      likes: 24,
      comments: 8,
      timeAgo: "2 saat önce",
    },
    {
      id: 2,
      author: "Zeynep K.",
      authorInitials: "ZK",
      company: "Lezzet Durağı",
      sector: "Gıda",
      content: "Yatırımcı sunumumuzu hazırladık ve ilk görüşmeleri yaptık. SWOT analizi özellikle çok yardımcı oldu!",
      likes: 18,
      comments: 5,
      timeAgo: "5 saat önce",
    },
    {
      id: 3,
      author: "Mehmet D.",
      authorInitials: "MD",
      company: "Moda Stil",
      sector: "Moda",
      content: "Fiziksel mağaza tasarımımız için AI önerileri harika çıktı. Renk paleti ve aydınlatma önerileri tam istediğimiz gibi!",
      likes: 31,
      comments: 12,
      timeAgo: "1 gün önce",
    },
  ]

  const suggestedConnections = [
    { name: "User A", company: "Retail Co.", initials: "UA", sector: "Perakende" },
    { name: "User B", company: "Tech Solutions", initials: "UB", sector: "Teknoloji" },
    { name: "User C", company: "Food Market", initials: "UC", sector: "Gıda" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Topluluk & Moderasyon</h1>
        <p className="text-muted-foreground">Topluluk içeriğini ve raporları yönetin</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Feed Layout */}
        <div className="lg:col-span-2 space-y-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Post Header */}
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback>{post.authorInitials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{post.author}</p>
                        <span className="text-sm text-muted-foreground">•</span>
                        <p className="text-sm text-muted-foreground">{post.company}</p>
                        <Badge variant="outline" className="ml-2">
                          {post.sector}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-sm">{post.content}</p>

                  {/* Post Actions */}
                  <div className="flex items-center gap-4 pt-2 border-t">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Heart className="h-4 w-4" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Paylaş
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Networking Sidebar */}
        <Card>
          <CardHeader>
            <CardTitle>Sizin İçin Önerilen Bağlantılar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {suggestedConnections.map((connection, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{connection.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{connection.name}</p>
                    <p className="text-xs text-muted-foreground">{connection.company}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {connection.sector}
                    </Badge>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <UserPlus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
