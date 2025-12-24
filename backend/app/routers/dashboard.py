from fastapi import APIRouter
from app.mock_data import generate_dashboard_overview

router = APIRouter()

@router.get("/overview")
def get_dashboard_overview():
    # TODO: Calculate real metrics from database
    return generate_dashboard_overview()

