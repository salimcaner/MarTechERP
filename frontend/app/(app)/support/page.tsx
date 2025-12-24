"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Destek & Biletler</h1>
        <p className="text-muted-foreground">Destek biletlerini yönetin</p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">Destek biletleri burada görüntülenecek</p>
        </CardContent>
      </Card>
    </div>
  )
}

