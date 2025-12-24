"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import api from "@/lib/api"
import { Subscription } from "@/lib/types"

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get("/subscriptions")
      .then((res) => setSubscriptions(res.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Abonelik & Faturalama</h1>
        <p className="text-muted-foreground">Abonelikleri ve faturaları yönetin</p>
      </div>
      {loading ? (
        <div>Yükleniyor...</div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Abonelikler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {subscriptions.map((sub) => (
                <div key={sub.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{sub.plan}</p>
                    <p className="text-sm text-muted-foreground">Durum: {sub.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{sub.mrr.toLocaleString()} ₺/ay</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

