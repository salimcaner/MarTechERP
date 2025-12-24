from fastapi import APIRouter

router = APIRouter()

@router.get("/tickets")
def get_tickets():
    # TODO: Query from database
    return []

