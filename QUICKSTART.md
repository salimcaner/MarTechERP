# Quick Start Guide

## Prerequisites
- Node.js 18+ installed
- Python 3.10+ installed
- npm or yarn

## One-Command Setup (Windows)

### Backend
```bash
start-backend.bat
```
This will:
1. Create a virtual environment
2. Install Python dependencies
3. Start the FastAPI server on http://localhost:8000

### Frontend
In a new terminal:
```bash
start-frontend.bat
```
This will:
1. Install npm dependencies
2. Start the Next.js dev server on http://localhost:3000

## Manual Setup

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## First Login

1. Open http://localhost:3000
2. You'll be redirected to the login page
3. Use any email/password (mock authentication accepts all)
   - Recommended: `admin@marteche.com` / `password`
4. You'll see the dashboard with mock data

## Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## Features to Try

1. **Dashboard**: View revenue metrics, activation funnel, feature adoption
2. **Brands**: Browse and filter brands, view brand details
3. **AI Operations**: See AI run metrics, token usage, costs
4. **Subscriptions**: View subscription plans and billing info

All data is currently mocked for development purposes.

