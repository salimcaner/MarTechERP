"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import api from "@/lib/api"
import { Brand } from "@/lib/types"

export default function BrandDetailPage() {
  const params = useParams()
  const [brand, setBrand] = useState<Brand | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/brands/${params.id}`)
      .then((res) => setBrand(res.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [params.id])

  if (loading) return <div>Yükleniyor...</div>
  if (!brand) return <div>Marka bulunamadı</div>

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{brand.name}</h1>
        <p className="text-muted-foreground">Marka detayları ve zaman çizelgesi</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
          <TabsTrigger value="timeline">Zaman Çizelgesi</TabsTrigger>
          <TabsTrigger value="notes">Notlar</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Bilgiler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Sektör:</strong> {brand.industry}</p>
                <p><strong>Aşama:</strong> {
                  brand.stage === "idea" ? "Fikir" :
                  brand.stage === "early" ? "Erken" :
                  brand.stage === "growing" ? "Büyüyen" : brand.stage
                }</p>
                <p><strong>Hedef Kitle:</strong> {brand.target_audience}</p>
                <p><strong>İş Tipi:</strong> {brand.business_type}</p>
                <p><strong>Sağlık Skoru:</strong> {brand.health_score}/100</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Zaman Çizelgesi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Oluşturulma: {new Date(brand.created_at).toLocaleDateString("tr-TR")}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Notlar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Notlar burada görüntülenecek</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

