"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Upload, SlidersHorizontal } from "lucide-react"

export default function SpaceDesignPage() {
  const [colorPalette, setColorPalette] = useState("brand")
  const [lighting, setLighting] = useState("warm")
  const [furnitureStyle, setFurnitureStyle] = useState("minimalist")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Fiziksel Alan Tasarımı</h1>
        <p className="text-muted-foreground">Tasarım isteklerini yönetin</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Design Canvas */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mekan Tasarımı</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Image Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm font-medium mb-2">Mekan Fotoğrafı veya Krokisi Yükle</p>
                <p className="text-xs text-muted-foreground">PNG, JPG veya PDF formatında</p>
                <Button className="mt-4" variant="outline">
                  Dosya Seç
                </Button>
              </div>

              {/* Before/After Comparison Slider */}
              <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <SlidersHorizontal className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">AI Before/After Render</p>
                    <p className="text-xs text-muted-foreground mt-1">Fotoğraf yüklendikten sonra görüntülenecek</p>
                  </div>
                </div>
                {/* Comparison slider would go here */}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Settings Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tasarım Ayarları</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Color Palette */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Renk Paleti</label>
                <Select value={colorPalette} onValueChange={setColorPalette}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brand">Marka Renkleri</SelectItem>
                    <SelectItem value="pastel">Pastel</SelectItem>
                    <SelectItem value="vibrant">Canlı</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Lighting */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Aydınlatma</label>
                <Select value={lighting} onValueChange={setLighting}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warm">Sıcak</SelectItem>
                    <SelectItem value="cool">Soğuk</SelectItem>
                    <SelectItem value="natural">Doğal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Furniture Style */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Mobilya Tarzı</label>
                <Select value={furnitureStyle} onValueChange={setFurnitureStyle}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minimalist">Minimalist</SelectItem>
                    <SelectItem value="industrial">Endüstriyel</SelectItem>
                    <SelectItem value="classic">Klasik</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full mt-4">Tasarımı Oluştur</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
