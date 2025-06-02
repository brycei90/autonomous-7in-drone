from pymavlink import mavutil
from assets.connection import connect_to_mavlink
import websocket
import asyncio
from assets.telemetry import telemetry

#mavwp load/save waypoints
#mavparam load/save sets of MAVLink parameters
#

connection = mavutil.mavlink_connection('tcp:127.0.0.1:5762')

#change this to a different connection for the actual drone
connect_to_mavlink(connection)

ws = websocket.WebSocketApp("ws://localhost:8000")
telemetry(connection)