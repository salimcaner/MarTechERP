# MarTech ERP (AI Brand Guidance Platform Admin/Operations ERP)

A comprehensive internal ERP-style web application for managing MarTech operations, including user/brand management, subscriptions, AI workloads, roadmaps, content, and more.

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Recharts
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL (schema provided, connection to be configured)
- **Authentication**: JWT (role-based access control)

## Project Structure

```
.
├── frontend/          # Next.js application
│   ├── app/          # App Router pages
│   ├── components/   # React components
│   └── lib/          # Utilities and types
├── backend/          # FastAPI application
│   ├── app/          # Application code
│   │   ├── routers/  # API route handlers
│   │   ├── models.py # Pydantic models
│   │   └── mock_data.py # Mock data generators
│   └── main.py       # FastAPI app entry point
└── README.md         # This file
```

## Features

### ERP Modules

1. **Dashboard (Executive Overview)**
   - Revenue, subscriptions, churn, growth metrics
   - User activation funnel
   - Feature adoption tracking
   - AI usage and cost control
   - Operational workload metrics

2. **CRM / Users & Brands**
   - User and brand profile management
   - Health scoring
   - Segmentation and cohorting
   - GDPR compliance flags

3. **Subscription & Billing**
   - Plan management
   - Invoice tracking
   - MRR/ARR calculations
   - Dunning workflow

4. **AI Operations**
   - LLM/Agent workload tracking
   - Token usage and cost monitoring
   - Latency metrics
   - Quality feedback loop

5. **Roadmap & Task Orchestration**
   - Weekly task management
   - Milestone tracking
   - Dependency graphs

6. **Physical Space Design Requests**
   - Request management
   - Revision cycles
   - Before/after gallery

7. **Investor Pitch Deck Generator**
   - Deck project management
   - Version history
   - Template system

8. **Accounting Mentorship Workflow**
   - Document checklist management
   - Step tracking
   - Issue resolution

9. **Business Social Network & Moderation**
   - Community management
   - Content moderation queue
   - Trust & safety tools

10. **Support / Ticketing + SLA**
    - Ticket management
    - SLA tracking
    - CSAT/NPS monitoring

11. **Content & Template Management**
    - Questionnaire management
    - Prompt catalog
    - Template versioning

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- Python 3.10+
- PostgreSQL (optional for now, mock data is used)

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (optional):
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

4. Run the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:3000

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the development server:
```bash
uvicorn main:app --reload --port 8000
```

The API will be available at http://localhost:8000
API documentation: http://localhost:8000/docs

### Database Setup (Optional)

1. Create a PostgreSQL database:
```sql
CREATE DATABASE marteche_erp;
```

2. Run the migration script:
```bash
psql -d marteche_erp -f migrations/001_initial_schema.sql
```

3. Update database connection in `backend/app/database.py`

## Authentication

Default test credentials:
- Email: `admin@marteche.com`
- Password: (any password works with mock auth)

Note: Authentication is currently mocked. In production, implement proper JWT token generation and validation.

## Role-Based Access

The system supports the following roles:
- **Admin**: Full access to all modules
- **Finance**: Access to subscriptions, billing, and user data
- **Support**: Access to support tickets and user data
- **Moderator**: Access to community moderation and support
- **Ops**: Access to AI operations, roadmaps, and content

## API Endpoints

All endpoints are stubbed with mock data. Key endpoints:

- `POST /auth/login` - User authentication
- `GET /dashboard/overview` - Dashboard metrics
- `GET /brands` - List brands (with filters)
- `GET /brands/{id}` - Brand details
- `GET /subscriptions` - List subscriptions
- `GET /ai/runs` - List AI runs
- `GET /ai/metrics` - AI operation metrics
- And more...

See http://localhost:8000/docs for full API documentation.

## Development Notes

- All API endpoints return mock data for now
- Database integration is prepared but not connected
- JWT authentication is mocked
- Charts use Recharts with realistic mock data
- UI is in Turkish by default

## Next Steps

1. Connect to PostgreSQL database
2. Implement real JWT authentication
3. Replace mock data with database queries
4. Add real LLM service integrations
5. Implement file uploads for space design photos
6. Add export functionality (CSV, PDF)
7. Implement global search functionality
8. Add audit logging

## License

Internal use only.

