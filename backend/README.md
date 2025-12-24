# MarTech ERP Backend

FastAPI backend for MarTech ERP system.

## Setup

1. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
uvicorn main:app --reload --port 8000
```

The API will be available at http://localhost:8000

API documentation: http://localhost:8000/docs

