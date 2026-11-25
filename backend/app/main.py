
from fastapi import FastAPI
from fastapi.middlewcare.cors import CORSMiddleware

app = FastAPI(
    title="ChatSphere API",
    description="AI Powered Chatbot Backend",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to ChatSphere API",
        "status": "success"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "application": "ChatSphere"
    }
