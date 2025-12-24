"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, Calendar, User } from "lucide-react"

export default function RoadmapsPage() {
  const [viewMode, setViewMode] = useState("kanban")

  const tasks = {
    todo: [
      { id: 1, title: "Sosyal medya hesaplarını aç", priority: "high", assignee: "AK", dueDate: "2024-01-15" },
      { id: 2, title: "İlk ürün fotoğraflarını çek", priority: "medium", assignee: "MK", dueDate: "2024-01-18" },
      { id: 3, title: "Web sitesi tasarımını tamamla", priority: "medium", assignee: "SK", dueDate: "2024-01-20" },
    ],
    inProgress: [
      { id: 4, title: "Logo tasarımı revizyonu", priority: "high", assignee: "DK", dueDate: "2024-01-12" },
      { id: 5, title: "İlk müşteri görüşmeleri", priority: "high", assignee: "AK", dueDate: "2024-01-14" },
    ],
    completed: [
      { id: 6, title: "Şirket kuruluş işlemleri", priority: "medium", assignee: "MK", dueDate: "2024-01-05" },
      { id: 7, title: "İş planı hazırlama", priority: "high", assignee: "SK", dueDate: "2024-01-08" },
      { id: 8, title: "Hedef kitle analizi", priority: "medium", assignee: "DK", dueDate: "2024-01-10" },
      { id: 9, title: "Rakip analizi", priority: "low", assignee: "AK", dueDate: "2024-01-11" },
      { id: 10, title: "Marka kimliği oluşturma", priority: "high", assignee: "MK", dueDate: "2024-01-09" },
    ],
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      default:
        return "bg-blue-100 text-blue-800 border-blue-300"
    }
  }

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "high":
        return "Yüksek"
      case "medium":
        return "Orta"
      default:
        return "Düşük"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Yol Haritası & Görevler</h1>
        <p className="text-muted-foreground">Görevleri ve kilometre taşlarını yönetin</p>
      </div>

      {/* Header Summary */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Lansmana Kalan Süre</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">İlerleme</span>
                <span className="text-sm font-medium">%45 Hazır</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertDescription>
            <strong>AI Önerisi:</strong> Bu hafta sosyal medya hesaplarını açmalısın.
          </AlertDescription>
        </Alert>
      </div>

      {/* Task Board */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Görev Panosu</CardTitle>
            <Tabs value={viewMode} onValueChange={setViewMode}>
              <TabsList>
                <TabsTrigger value="kanban">Kanban</TabsTrigger>
                <TabsTrigger value="list">Liste</TabsTrigger>
                <TabsTrigger value="timeline">Zaman Çizelgesi</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === "kanban" && (
            <div className="grid gap-4 md:grid-cols-3">
              {/* Yapılacaklar */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Yapılacaklar</h3>
                  <Badge variant="outline">{tasks.todo.length}</Badge>
                </div>
                <div className="space-y-2">
                  {tasks.todo.map((task) => (
                    <Card key={task.id} className="p-3 hover:shadow-md transition-shadow">
                      <div className="space-y-2">
                        <p className="font-medium text-sm">{task.title}</p>
                        <div className="flex items-center justify-between">
                          <Badge className={getPriorityColor(task.priority)} variant="outline">
                            {getPriorityText(task.priority)}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className="text-xs">{task.assignee}</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {new Date(task.dueDate).toLocaleDateString("tr-TR", { day: "numeric", month: "short" })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Devam Edenler */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Devam Edenler</h3>
                  <Badge variant="outline">{tasks.inProgress.length}</Badge>
                </div>
                <div className="space-y-2">
                  {tasks.inProgress.map((task) => (
                    <Card key={task.id} className="p-3 hover:shadow-md transition-shadow">
                      <div className="space-y-2">
                        <p className="font-medium text-sm">{task.title}</p>
                        <div className="flex items-center justify-between">
                          <Badge className={getPriorityColor(task.priority)} variant="outline">
                            {getPriorityText(task.priority)}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className="text-xs">{task.assignee}</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {new Date(task.dueDate).toLocaleDateString("tr-TR", { day: "numeric", month: "short" })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Tamamlananlar */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Tamamlananlar</h3>
                  <Badge variant="outline">{tasks.completed.length}</Badge>
                </div>
                <div className="space-y-2">
                  {tasks.completed.map((task) => (
                    <Card key={task.id} className="p-3 hover:shadow-md transition-shadow opacity-75">
                      <div className="space-y-2">
                        <p className="font-medium text-sm line-through">{task.title}</p>
                        <div className="flex items-center justify-between">
                          <Badge className={getPriorityColor(task.priority)} variant="outline">
                            {getPriorityText(task.priority)}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className="text-xs">{task.assignee}</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {new Date(task.dueDate).toLocaleDateString("tr-TR", { day: "numeric", month: "short" })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {viewMode === "list" && (
            <div className="space-y-2">
              {[...tasks.todo, ...tasks.inProgress, ...tasks.completed].map((task) => (
                <Card key={task.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <p className="font-medium">{task.title}</p>
                      <Badge className={getPriorityColor(task.priority)} variant="outline">
                        {getPriorityText(task.priority)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{task.assignee}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">
                        {new Date(task.dueDate).toLocaleDateString("tr-TR")}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {viewMode === "timeline" && (
            <div className="space-y-4">
              <p className="text-muted-foreground">Zaman çizelgesi görünümü yakında eklenecek</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
