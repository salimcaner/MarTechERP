"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ayarlar</h1>
        <p className="text-muted-foreground">Sistem ayarlarını yönetin</p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">Ayarlar burada görüntülenecek</p>
        </CardContent>
      </Card>
    </div>
  )
}

