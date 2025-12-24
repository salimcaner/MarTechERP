from fastapi import APIRouter

router = APIRouter()

@router.get("/cases")
def get_accounting_cases():
    # TODO: Query from database
    return []

