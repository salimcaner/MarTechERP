from fastapi import APIRouter, Query
from app.mock_data import generate_mock_brands

router = APIRouter()

@router.get("")
def get_brands(
    search: str = Query(None),
    stage: str = Query(None),
    industry: str = Query(None)
):
    # TODO: Query from database with filters
    brands = generate_mock_brands()
    
    if search:
        brands = [b for b in brands if search.lower() in b.name.lower()]
    if stage:
        brands = [b for b in brands if b.stage == stage]
    if industry:
        brands = [b for b in brands if b.industry == industry]
    
    return brands

@router.get("/{brand_id}")
def get_brand(brand_id: str):
    # TODO: Query from database
    brands = generate_mock_brands()
    brand = next((b for b in brands if b.id == brand_id), None)
    
    if not brand:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Brand not found")
    
    return brand

