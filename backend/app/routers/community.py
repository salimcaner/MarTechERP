from fastapi import APIRouter

router = APIRouter()

@router.get("/moderation/reports")
def get_moderation_reports():
    # TODO: Query from database
    return []

