from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from datetime import datetime

class User(BaseModel):
    id: str
    email: str
    role: str
    created_at: str
    last_active_at: str
    status: str

class Brand(BaseModel):
    id: str
    owner_user_id: str
    name: str
    industry: str
    stage: str
    target_audience: str
    business_type: str
    created_at: str
    health_score: int

class Subscription(BaseModel):
    id: str
    brand_id: str
    plan: str
    status: str
    started_at: str
    canceled_at: Optional[str] = None
    mrr: float
    trial_end_at: Optional[str] = None

class Invoice(BaseModel):
    id: str
    subscription_id: str
    amount: float
    currency: str
    status: str
    issued_at: str
    paid_at: Optional[str] = None

class AiRun(BaseModel):
    id: str
    brand_id: str
    feature: str
    model: str
    tokens_in: int
    tokens_out: int
    cost_usd: float
    latency_ms: int
    status: str
    created_at: str
    rating: Optional[int] = None
    revision_count: int
    error_code: Optional[str] = None

class Roadmap(BaseModel):
    id: str
    brand_id: str
    created_at: str
    goal_summary: str

class Task(BaseModel):
    id: str
    roadmap_id: str
    week_no: int
    title: str
    priority: str
    status: str
    due_date: str
    completed_at: Optional[str] = None

