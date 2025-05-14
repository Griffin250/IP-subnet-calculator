from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.subnet_calculator import SubnetCalculator
from pydantic import BaseModel
from typing import Union
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SubnetRequest(BaseModel):
    ip: str
    prefix_or_mask: Union[int, str]

class SubnettingRequest(BaseModel):
    network: str
    new_prefix: int

@app.post("/calculate-subnet")
async def calculate_subnet(request: SubnetRequest):
    result = SubnetCalculator.calculate_subnet(request.ip, request.prefix_or_mask)
    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])
    return result

@app.post("/calculate-subnetting")
async def calculate_subnetting(request: SubnettingRequest):
    result = SubnetCalculator.calculate_subnetting(request.network, request.new_prefix)
    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])
    return result

@app.get("/health")
async def health_check():
    return {"status": "healthy"}