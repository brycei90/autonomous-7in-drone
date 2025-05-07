from pymavlink import mavutil

def connect_to_mavlink(connection_string='/dev/ttyAMA0'):
    the_connection = mavutil.mavlink_connection(connection_string, baud=57600)
    the_connection.wait_heartbeat()
    print("Heartbeat from system (system %u component %u)" % (the_connection.target_system, the_connection.target_component))
    return the_connection

