from fastapi import APIRouter

router = APIRouter()

@router.get("/requests")
def get_space_design_requests():
    # TODO: Query from database
    return []

