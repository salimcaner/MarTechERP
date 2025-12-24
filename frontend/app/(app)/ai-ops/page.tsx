"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import api from "@/lib/api"
import { AiRun } from "@/lib/types"

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"]

export default function AiOpsPage() {
  const [runs, setRuns] = useState<AiRun[]>([])
  const [loading, setLoading] = useState(true)
  const [metrics, setMetrics] = useState<any>(null)

  useEffect(() => {
    Promise.all([
      api.get("/ai/runs").then((res) => setRuns(res.data)),
      api.get("/ai/metrics").then((res) => setMetrics(res.data)),
    ])
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Yükleniyor...</div>

  const outcomeData = runs.reduce((acc, run) => {
    acc[run.status] = (acc[run.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const outcomeChart = Object.entries(outcomeData).map(([label, value]) => ({ label, value }))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Operasyonları</h1>
        <p className="text-muted-foreground">LLM/Agent iş yükleri ve maliyet takibi</p>
      </div>

      {metrics && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Token Kullanımı & Maliyet</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={metrics.token_usage}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="tokens" stroke="#8884d8" />
                  <Line yAxisId="right" type="monotone" dataKey="cost_usd" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Özelliğe Göre Maliyet</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={metrics.cost_by_feature}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="feature" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="cost_usd_30d" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Çalıştırma Sonuçları</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={outcomeChart}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ label, percent }) => `${label} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {outcomeChart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Son Çalıştırmalar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {runs.slice(0, 10).map((run) => (
              <div key={run.id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{run.feature}</p>
                  <p className="text-sm text-muted-foreground">{run.model}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{run.cost_usd.toFixed(4)} ₺</p>
                  <p className="text-xs text-muted-foreground">{run.tokens_in + run.tokens_out} tokens</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

