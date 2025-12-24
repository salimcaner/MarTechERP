"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import api from "@/lib/api"
import { Brand } from "@/lib/types"
import { Search } from "lucide-react"

export default function BrandsPage() {
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [stageFilter, setStageFilter] = useState<string>("all")

  useEffect(() => {
    api.get("/brands", { params: { search, stage: stageFilter !== "all" ? stageFilter : undefined } })
      .then((res) => setBrands(res.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [search, stageFilter])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Kullanıcılar & Markalar</h1>
          <p className="text-muted-foreground">Marka profillerini yönetin ve görüntüleyin</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Marka ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={stageFilter} onValueChange={setStageFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Aşama" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tümü</SelectItem>
            <SelectItem value="idea">Fikir</SelectItem>
            <SelectItem value="early">Erken</SelectItem>
            <SelectItem value="growing">Büyüyor</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">CSV Dışa Aktar</Button>
      </div>

      {loading ? (
        <div>Yükleniyor...</div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <Link key={brand.id} href={`/brands/${brand.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle>{brand.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">Sektör: {brand.industry}</p>
                    <p className="text-muted-foreground">Aşama: {
                      brand.stage === "idea" ? "Fikir" :
                      brand.stage === "early" ? "Erken" :
                      brand.stage === "growing" ? "Büyüyen" : brand.stage
                    }</p>
                    <p className="text-muted-foreground">Sağlık Skoru: {brand.health_score}/100</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

