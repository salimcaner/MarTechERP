from fastapi import APIRouter
from app.mock_data import generate_mock_subscriptions

router = APIRouter()

@router.get("")
def get_subscriptions():
    # TODO: Query from database
    return generate_mock_subscriptions()

@router.get("/{subscription_id}")
def get_subscription(subscription_id: str):
    # TODO: Query from database
    subscriptions = generate_mock_subscriptions()
    sub = next((s for s in subscriptions if s.id == subscription_id), None)
    
    if not sub:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Subscription not found")
    
    return sub

