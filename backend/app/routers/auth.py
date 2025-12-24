from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.mock_data import generate_mock_users

router = APIRouter()

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
def login(request: LoginRequest):
    # TODO: Implement real authentication with JWT
    # Mock authentication - accepts any email/password for development
    users = generate_mock_users()
    
    # Try to find user by email
    user = next((u for u in users if u.email.lower() == request.email.lower()), None)
    
    # If user not found, determine role from email or default to Admin
    if not user:
        email_lower = request.email.lower()
        if "finance" in email_lower:
            role = "Finance"
        elif "support" in email_lower:
            role = "Support"
        elif "moderator" in email_lower or "mod" in email_lower:
            role = "Moderator"
        elif "ops" in email_lower:
            role = "Ops"
        else:
            role = "Admin"  # Default to Admin
    else:
        role = user.role
    
    # Mock token - in production, generate real JWT
    return {
        "token": "mock_jwt_token_12345",
        "user": {
            "id": "1",
            "email": request.email,
            "role": role
        }
    }

