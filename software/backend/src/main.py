from pymavlink import mavutil
from assets.connection import connect_to_mavlink
import websocket
from assets.websocketClient import on_message, on_error, on_close, on_open
import asyncio

connect_to_mavlink()

ws = websocket.WebSocketApp("ws://localhost:8000")