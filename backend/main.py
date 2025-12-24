from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, dashboard, brands, subscriptions, ai_ops, roadmaps, space_design, decks, accounting, community, support, content

app = FastAPI(title="MarTech ERP API ", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
app.include_router(brands.router, prefix="/brands", tags=["brands"])
app.include_router(subscriptions.router, prefix="/subscriptions", tags=["subscriptions"])
app.include_router(ai_ops.router, prefix="/ai", tags=["ai-ops"])
app.include_router(roadmaps.router, prefix="/roadmaps", tags=["roadmaps"])
app.include_router(space_design.router, prefix="/space", tags=["space-design"])
app.include_router(decks.router, prefix="/decks", tags=["decks"])
app.include_router(accounting.router, prefix="/accounting", tags=["accounting"])
app.include_router(community.router, prefix="/community", tags=["community"])
app.include_router(support.router, prefix="/support", tags=["support"])
app.include_router(content.router, prefix="/content", tags=["content"])

@app.get("/")
def read_root():
    return {"message": "MarTech ERP API"}

