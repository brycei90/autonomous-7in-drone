from pymavlink import mavutil

def connect_to_mavlink(connection_string='tcp:127.0.0.1:5760'):
    master = mavutil.mavlink_connection(connection_string)
    master.wait_heartbeat()
    print(f'Heartbeat from system (system {master.target_system} component {master.target_component})')
    return master
