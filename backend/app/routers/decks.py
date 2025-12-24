from fastapi import APIRouter

router = APIRouter()

@router.get("")
def get_decks():
    # TODO: Query from database
    return []

