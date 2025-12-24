from fastapi import APIRouter
from app.mock_data import generate_mock_ai_runs, generate_ai_metrics

router = APIRouter()

@router.get("/runs")
def get_ai_runs():
    # TODO: Query from database
    return generate_mock_ai_runs()

@router.get("/runs/{run_id}")
def get_ai_run(run_id: str):
    # TODO: Query from database
    runs = generate_mock_ai_runs()
    run = next((r for r in runs if r.id == run_id), None)
    
    if not run:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="AI Run not found")
    
    return run

@router.get("/metrics")
def get_ai_metrics():
    # TODO: Calculate from database
    return generate_ai_metrics()

