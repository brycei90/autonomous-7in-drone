from pymavlink import mavutil
import socket

def connect_to_mavlink(connection):
    print('attempting connection...')
    connection.wait_heartbeat()
    print("Heartbeat from system (system %u component %u)" % (connection.target_system, connection.target_component))
    return connection