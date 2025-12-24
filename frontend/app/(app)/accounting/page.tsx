"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, CheckCircle2, XCircle } from "lucide-react"

export default function AccountingPage() {
  const [chatMessage, setChatMessage] = useState("")

  const steps = [
    {
      id: 1,
      title: "Şirket Türünü Seç",
      description: "Limited Şirket, Anonim Şirket veya Şahıs Şirketi seçimi yapın",
      status: "completed",
    },
    {
      id: 2,
      title: "Vergi Dairesi Kaydı",
      description: "Vergi dairesine başvuru yapın ve kayıt işlemlerini tamamlayın",
      status: "completed",
    },
    {
      id: 3,
      title: "Banka Hesabı Açılışı",
      description: "Ticari banka hesabı açmak için gerekli belgeleri hazırlayın",
      status: "in_progress",
    },
    {
      id: 4,
      title: "E-Fatura Başvurusu",
      description: "E-fatura sistemine kayıt olun ve entegrasyonu tamamlayın",
      status: "pending",
    },
  ]

  const documents = [
    { name: "İmza Sirküleri", uploadDate: "2024-01-05", status: "valid" },
    { name: "Vergi Levhası", uploadDate: "2024-01-08", status: "valid" },
    { name: "Ticaret Sicil Gazetesi", uploadDate: "2024-01-10", status: "valid" },
    { name: "Banka Hesap Açılış Belgesi", uploadDate: null, status: "missing" },
    { name: "E-Fatura Başvuru Formu", uploadDate: null, status: "missing" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case "in_progress":
        return <div className="h-5 w-5 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
      default:
        return <XCircle className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "valid":
        return <Badge className="bg-green-100 text-green-800">Geçerli</Badge>
      default:
        return <Badge variant="destructive">Eksik</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Muhasebe Mentorluğu</h1>
        <p className="text-muted-foreground">Muhasebe vakalarını yönetin</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Step by Step Guide */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Adım Adım Rehber</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {steps.map((step) => (
                  <AccordionItem key={step.id} value={`step-${step.id}`}>
                    <AccordionTrigger value={`step-${step.id}`}>
                      <div className="flex items-center gap-3">
                        {getStatusIcon(step.status)}
                        <span className="font-medium">{step.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent value={`step-${step.id}`}>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      {step.status === "in_progress" && (
                        <Button className="mt-4" size="sm">
                          Devam Et
                        </Button>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Document Vault */}
          <Card>
            <CardHeader>
              <CardTitle>Belge Arşivi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm">{doc.name}</p>
                      {doc.uploadDate && (
                        <p className="text-xs text-muted-foreground">
                          Yükleme: {new Date(doc.uploadDate).toLocaleDateString("tr-TR")}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(doc.status)}
                      {doc.status === "missing" && (
                        <Button size="sm" variant="outline">
                          Yükle
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Chat Widget */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              AI Asistan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 h-64 overflow-y-auto border rounded-lg p-3 bg-gray-50">
              <div className="space-y-2">
                <div className="bg-white p-2 rounded-lg text-sm">
                  Merhaba! Muhasebe ile ilgili sorularınızı yanıtlamaya hazırım.
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Muhasebe ile ilgili bir soru sor..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && chatMessage.trim()) {
                    // Handle send
                    setChatMessage("")
                  }
                }}
              />
              <Button
                onClick={() => {
                  if (chatMessage.trim()) {
                    // Handle send
                    setChatMessage("")
                  }
                }}
              >
                Gönder
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
