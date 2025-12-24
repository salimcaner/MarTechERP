from datetime import datetime, timedelta
import random
from app.models import User, Brand, Subscription, Invoice, AiRun, Roadmap, Task

def generate_mock_users():
    return [
        User(
            id="1",
            email="admin@marteche.com",
            role="Admin",
            created_at="2024-01-01T00:00:00Z",
            last_active_at=datetime.now().isoformat() + "Z",
            status="active"
        ),
        User(
            id="2",
            email="finance@marteche.com",
            role="Finance",
            created_at="2024-01-01T00:00:00Z",
            last_active_at=datetime.now().isoformat() + "Z",
            status="active"
        ),
    ]

def generate_mock_brands():
    industries = ["Teknoloji", "Gıda", "Moda", "Eğitim", "Sağlık"]
    stages = ["idea", "early", "growing"]
    business_types = ["B2B", "B2C", "Marketplace"]
    
    # Gerçekçi Türkçe marka isimleri
    brand_names = [
        "TechNova", "Lezzet Durağı", "Moda Stil", "Eğitim Yolu", "Sağlık Plus",
        "Akıllı Çözümler", "Taze Market", "Trend Moda", "Bilgi Akademi", "Wellness Center",
        "Dijital İnovasyon", "Organik Bahçe", "Elite Giyim", "Online Eğitim", "FitLife",
        "Yazılım Atölyesi", "Gourmet Lezzetler", "Şık Gardırop", "Öğrenci Merkezi", "Vital Sağlık"
    ]
    
    target_audiences = [
        "Genç Profesyoneller", "Aileler", "Öğrenciler", "Yaşlılar", "Spor Severler",
        "Teknoloji Tutkunları", "Sağlık Bilinçlileri", "Moda Takipçileri", "Eğitim Arayanlar", "İşletmeler",
        "Startup'lar", "KOBİ'ler", "Büyük Şirketler", "Bireysel Müşteriler", "Kurumsal Müşteriler",
        "18-25 Yaş Arası", "25-35 Yaş Arası", "35-45 Yaş Arası", "45+ Yaş Arası", "Tüm Yaş Grupları"
    ]
    
    brands = []
    for i in range(1, 21):
        brands.append(Brand(
            id=str(i),
            owner_user_id="1",
            name=brand_names[i-1],
            industry=random.choice(industries),
            stage=random.choice(stages),
            target_audience=target_audiences[i-1],
            business_type=random.choice(business_types),
            created_at=(datetime.now() - timedelta(days=random.randint(1, 365))).isoformat() + "Z",
            health_score=random.randint(50, 100)
        ))
    return brands

def generate_mock_subscriptions():
    plans = ["Starter", "Professional", "Enterprise"]
    statuses = ["active", "trial", "canceled"]
    
    subscriptions = []
    for i in range(1, 15):
        subscriptions.append(Subscription(
            id=str(i),
            brand_id=str(i),
            plan=random.choice(plans),
            status=random.choice(statuses),
            started_at=(datetime.now() - timedelta(days=random.randint(1, 180))).isoformat() + "Z",
            canceled_at=None if random.random() > 0.2 else (datetime.now() - timedelta(days=random.randint(1, 30))).isoformat() + "Z",
            mrr=random.choice([29, 99, 299, 499]),
            trial_end_at=None if random.random() > 0.3 else (datetime.now() + timedelta(days=random.randint(1, 14))).isoformat() + "Z"
        ))
    return subscriptions

def generate_mock_ai_runs():
    features = ["brand_analysis", "roadmap_generation", "deck_generation", "space_design"]
    models = ["gpt-4", "gpt-3.5-turbo", "claude-3"]
    statuses = ["success", "failed", "needs_revision"]
    
    runs = []
    for i in range(1, 50):
        feature = random.choice(features)
        model = random.choice(models)
        
        runs.append(AiRun(
            id=str(i),
            brand_id=str(random.randint(1, 20)),
            feature=random.choice(features),
            model=random.choice(models),
            tokens_in=random.randint(1000, 10000),
            tokens_out=random.randint(500, 5000),
            cost_usd=round(random.uniform(0.01, 5.0), 4),
            latency_ms=random.randint(500, 5000),
            status=random.choice(statuses),
            created_at=(datetime.now() - timedelta(days=random.randint(0, 30))).isoformat() + "Z",
            rating=random.randint(1, 5) if random.random() > 0.3 else None,
            revision_count=random.randint(0, 3),
            error_code=None if random.random() > 0.1 else "TIMEOUT"
        ))
    return runs

def generate_dashboard_overview():
    base_date = datetime.now() - timedelta(days=90)
    mrr_trend = []
    for i in range(90):
        date = base_date + timedelta(days=i)
        mrr_trend.append({
            "date": date.strftime("%Y-%m-%d"),
            "mrr": random.randint(10000, 50000)
        })
    
    revenue_by_plan = []
    plans = ["Starter", "Professional", "Enterprise"]
    for i in range(30):
        date = (datetime.now() - timedelta(days=30-i)).strftime("%Y-%m-%d")
        for plan in plans:
            revenue_by_plan.append({
                "date": date,
                "plan": plan,
                "revenue": random.randint(1000, 10000)
            })
    
    activation_funnel = [
        {"step": "Signup", "count": 1000},
        {"step": "Brand Input Completed", "count": 750},
        {"step": "Analysis Viewed", "count": 500},
        {"step": "Roadmap Started", "count": 300},
        {"step": "Week-1 Completed", "count": 200}
    ]
    
    feature_adoption = [
        {"feature": "Brand Analysis", "active_users_7d": 450},
        {"feature": "Roadmap", "active_users_7d": 320},
        {"feature": "Deck Generator", "active_users_7d": 180},
        {"feature": "Space Design", "active_users_7d": 120},
    ]
    
    retention_cohort = []
    for week in range(12):
        cohort_week = (datetime.now() - timedelta(weeks=12-week)).strftime("%Y-%m-%d")
        for week_n in range(12):
            retention_cohort.append({
                "cohort_week": cohort_week,
                "week_n": week_n,
                "retention_rate": random.uniform(0.5, 1.0)
            })
    
    return {
        "mrr": 35000,
        "arr": 420000,
        "net_revenue_retention": 1.15,
        "churn_percent": 3.2,
        "trial_to_paid_percent": 25.5,
        "dau": 450,
        "wau": 1200,
        "mrr_trend": mrr_trend,
        "revenue_by_plan": revenue_by_plan,
        "activation_funnel": activation_funnel,
        "feature_adoption": feature_adoption,
        "retention_cohort": retention_cohort
    }

def generate_ai_metrics():
    base_date = datetime.now() - timedelta(days=30)
    token_usage = []
    for i in range(30):
        date = (base_date + timedelta(days=i)).strftime("%Y-%m-%d")
        token_usage.append({
            "date": date,
            "tokens": random.randint(100000, 500000),
            "cost_usd": round(random.uniform(10, 100), 2)
        })
    
    cost_by_feature = [
        {"feature": "brand_analysis", "cost_usd_30d": 1250.50},
        {"feature": "roadmap_generation", "cost_usd_30d": 890.25},
        {"feature": "deck_generation", "cost_usd_30d": 650.75},
        {"feature": "space_design", "cost_usd_30d": 420.30},
    ]
    
    return {
        "token_usage": token_usage,
        "cost_by_feature": cost_by_feature
    }

