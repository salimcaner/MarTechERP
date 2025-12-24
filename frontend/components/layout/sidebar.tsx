"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Brain,
  Target,
  Home,
  Presentation,
  Calculator,
  MessageSquare,
  HelpCircle,
  FileText,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { UserRole } from "@/lib/types"

interface SidebarProps {
  role: UserRole
}

const menuItems = {
  Admin: [
    { href: "/dashboard", label: "Genel Bakış", icon: LayoutDashboard },
    { href: "/brands", label: "Kullanıcılar & Markalar", icon: Users },
    { href: "/subscriptions", label: "Abonelik & Faturalama", icon: CreditCard },
    { href: "/ai-ops", label: "AI Operasyonları", icon: Brain },
    { href: "/roadmaps", label: "Yol Haritası & Görevler", icon: Target },
    { href: "/space-design", label: "Fiziksel Alan Tasarımı", icon: Home },
    { href: "/decks", label: "Yatırımcı Sunumları", icon: Presentation },
    { href: "/accounting", label: "Muhasebe Mentorluğu", icon: Calculator },
    { href: "/community", label: "Topluluk & Moderasyon", icon: MessageSquare },
    { href: "/support", label: "Destek & Biletler", icon: HelpCircle },
    { href: "/content", label: "İçerik & Şablonlar", icon: FileText },
    { href: "/settings", label: "Ayarlar", icon: Settings },
  ],
  Finance: [
    { href: "/dashboard", label: "Genel Bakış", icon: LayoutDashboard },
    { href: "/subscriptions", label: "Abonelik & Faturalama", icon: CreditCard },
    { href: "/brands", label: "Kullanıcılar & Markalar", icon: Users },
  ],
  Support: [
    { href: "/dashboard", label: "Genel Bakış", icon: LayoutDashboard },
    { href: "/support", label: "Destek & Biletler", icon: HelpCircle },
    { href: "/brands", label: "Kullanıcılar & Markalar", icon: Users },
  ],
  Moderator: [
    { href: "/community", label: "Topluluk & Moderasyon", icon: MessageSquare },
    { href: "/support", label: "Destek & Biletler", icon: HelpCircle },
  ],
  Ops: [
    { href: "/dashboard", label: "Genel Bakış", icon: LayoutDashboard },
    { href: "/ai-ops", label: "AI Operasyonları", icon: Brain },
    { href: "/roadmaps", label: "Yol Haritası & Görevler", icon: Target },
    { href: "/space-design", label: "Fiziksel Alan Tasarımı", icon: Home },
    { href: "/decks", label: "Yatırımcı Sunumları", icon: Presentation },
    { href: "/content", label: "İçerik & Şablonlar", icon: FileText },
  ],
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()
  const items = menuItems[role] || []

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-bold">MarTech ERP</h1>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

