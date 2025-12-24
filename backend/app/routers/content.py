from fastapi import APIRouter

router = APIRouter()

@router.get("/templates")
def get_templates():
    # TODO: Query from database
    return []

