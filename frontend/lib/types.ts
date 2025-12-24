export type UserRole = "Admin" | "Ops" | "Finance" | "Support" | "Moderator"

export interface User {
  id: string
  email: string
  role: UserRole
  created_at: string
  last_active_at: string
  status: "active" | "inactive"
}

export interface Brand {
  id: string
  owner_user_id: string
  name: string
  industry: string
  stage: "idea" | "early" | "growing"
  target_audience: string
  business_type: string
  created_at: string
  health_score: number
}

export interface Subscription {
  id: string
  brand_id: string
  plan: string
  status: "active" | "canceled" | "trial" | "past_due"
  started_at: string
  canceled_at?: string
  mrr: number
  trial_end_at?: string
}

export interface Invoice {
  id: string
  subscription_id: string
  amount: number
  currency: string
  status: "paid" | "pending" | "failed"
  issued_at: string
  paid_at?: string
}

export interface AiRun {
  id: string
  brand_id: string
  feature: string
  model: string
  tokens_in: number
  tokens_out: number
  cost_usd: number
  latency_ms: number
  status: "success" | "failed" | "needs_revision"
  created_at: string
  rating?: number
  revision_count: number
  error_code?: string
}

export interface Roadmap {
  id: string
  brand_id: string
  created_at: string
  goal_summary: string
}

export interface Task {
  id: string
  roadmap_id: string
  week_no: number
  title: string
  priority: "low" | "medium" | "high"
  status: "pending" | "in_progress" | "completed"
  due_date: string
  completed_at?: string
}

export interface SpaceDesignRequest {
  id: string
  brand_id: string
  type: string
  photos: string[]
  constraints_json: Record<string, any>
  status: "pending" | "approved" | "rejected"
  created_at: string
  approved_at?: string
}

export interface DeckProject {
  id: string
  brand_id: string
  version: number
  status: "draft" | "completed" | "exported"
  created_at: string
  exported_at?: string
}

export interface AccountingCase {
  id: string
  brand_id: string
  status: "in_progress" | "completed" | "blocked"
  checklist_json: Record<string, any>
  created_at: string
  resolved_at?: string
}

export interface SocialPost {
  id: string
  brand_id: string
  author_user_id: string
  content: string
  created_at: string
  status: "published" | "flagged" | "deleted"
}

export interface Report {
  id: string
  entity_type: string
  entity_id: string
  category: string
  status: "open" | "resolved" | "dismissed"
  created_at: string
  resolved_at?: string
}

export interface Ticket {
  id: string
  brand_id: string
  user_id: string
  category: string
  priority: "low" | "medium" | "high" | "urgent"
  status: "open" | "in_progress" | "resolved" | "closed"
  created_at: string
  closed_at?: string
  sla_due_at?: string
}

export interface DashboardOverview {
  mrr: number
  arr: number
  net_revenue_retention: number
  churn_percent: number
  trial_to_paid_percent: number
  dau: number
  wau: number
  mrr_trend: Array<{ date: string; mrr: number }>
  revenue_by_plan: Array<{ date: string; plan: string; revenue: number }>
  activation_funnel: Array<{ step: string; count: number }>
  feature_adoption: Array<{ feature: string; active_users_7d: number }>
  retention_cohort: Array<{ cohort_week: string; week_n: number; retention_rate: number }>
}

