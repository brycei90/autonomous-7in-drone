import websocket

def on_message(ws, message):
    print("received message: ", message)

def on_error(ws, error):
    print("error: ", error)

def on_close(ws, close_status_code, close_msg):
    print("Connection closed")

def on_open(ws):
    ws.send("Hello, WebSocket server!")
    