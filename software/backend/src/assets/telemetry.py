from pymavlink import mavutil

def telemetry(connection):
    msg = connection.recv_match()
    print(msg)
