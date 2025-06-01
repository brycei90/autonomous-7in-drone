from pymavlink import mavutil
import socket

def connect_to_mavlink(connection_string='tcp:127.0.0.1:5762'):
    the_connection = mavutil.mavlink_connection(connection_string)
    print('attempting connection...')
    the_connection.wait_heartbeat()
    print("Heartbeat from system (system %u component %u)" % (the_connection.target_system, the_connection.target_component))
    return the_connection


connect_to_mavlink()