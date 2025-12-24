"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function DecksPage() {
  const [template, setTemplate] = useState("seed")

  const swotData = {
    strengths: ["Güçlü marka kimliği", "Yenilikçi ürün", "Deneyimli ekip"],
    weaknesses: ["Sınırlı bütçe", "Pazar bilgisi eksikliği"],
    opportunities: ["Büyüyen pazar", "Yeni teknolojiler", "Stratejik ortaklıklar"],
    threats: ["Yoğun rekabet", "Ekonomik belirsizlik"],
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Yatırımcı Sunumları</h1>
        <p className="text-muted-foreground">Sunum projelerini yönetin</p>
      </div>

      {/* Template Selector */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Sunum Şablonu Seç</CardTitle>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Verileri Dashboard'dan Çek (MRR, Churn)
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Select value={template} onValueChange={setTemplate}>
            <SelectTrigger className="w-full max-w-md">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="seed">Tohum Yatırım (Seed)</SelectItem>
              <SelectItem value="angel">Melek Yatırımcı</SelectItem>
              <SelectItem value="series-a">Seri A</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* SWOT Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>SWOT Analizi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {/* Güçlü Yönler */}
            <div className="space-y-2 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800">Güçlü Yönler</h3>
              <ul className="space-y-1">
                {swotData.strengths.map((item, idx) => (
                  <li key={idx} className="text-sm text-green-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Zayıf Yönler */}
            <div className="space-y-2 p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800">Zayıf Yönler</h3>
              <ul className="space-y-1">
                {swotData.weaknesses.map((item, idx) => (
                  <li key={idx} className="text-sm text-red-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fırsatlar */}
            <div className="space-y-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800">Fırsatlar</h3>
              <ul className="space-y-1">
                {swotData.opportunities.map((item, idx) => (
                  <li key={idx} className="text-sm text-blue-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tehditler */}
            <div className="space-y-2 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-800">Tehditler</h3>
              <ul className="space-y-1">
                {swotData.threats.map((item, idx) => (
                  <li key={idx} className="text-sm text-orange-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
