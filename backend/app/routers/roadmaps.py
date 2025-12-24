from fastapi import APIRouter

router = APIRouter()

@router.get("/{brand_id}")
def get_roadmap(brand_id: str):
    # TODO: Query from database
    return {
        "id": "1",
        "brand_id": brand_id,
        "created_at": "2024-01-01T00:00:00Z",
        "goal_summary": "Mock goal summary",
        "tasks": []
    }

