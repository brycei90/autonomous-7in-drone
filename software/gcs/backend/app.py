import os
import asyncio
from dotenv import load_dotenv
from fastapi import FastAPI, WebSocket
from pymavlink import mavutil

load_dotenv()
MAVLINK_URL = os.getenv("MAVLINK_URL")
WS_PORT = int(os.getenv("WS_PORT", 8000))

app = FastAPI()
#keep a global list of connected websockets
clients : list[WebSocket] = []

async def mavlink_reader():
    master = mavutil.mavlink_connection(MAVLINK_URL)
    master.wait_heartbeat()
    print(f"Heartbeat from sys{master.target_system} comp{master.target_component}")
    while True:
        msg = master.recv_match(blocking=True, timeout=1)
        if msg:
            payload = msg.to.dict()
            #broadcast to all clients
            for ws in clients:
                await ws.send_json(payload)
        #tiny sleep to let websocket loop run
        await asyncio.sleep(0.01)

@app.on_event("startup")
async def on_startup():
    #launch reader in background
    asyncio.create_task(mavlink_reader())

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    clients.append(ws)
    try:
        while True:
            #we don't expect incoming messages, but keep connection alive
            await ws.receive_text()
    except:
        clients.remove(ws)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", hosts="0.0.0.0", port=WS_PORT, reload=True)