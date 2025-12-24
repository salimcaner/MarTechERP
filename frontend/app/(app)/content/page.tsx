"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">İçerik & Şablonlar</h1>
        <p className="text-muted-foreground">İçerik ve şablonları yönetin</p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">İçerik ve şablonlar burada görüntülenecek</p>
        </CardContent>
      </Card>
    </div>
  )
}

