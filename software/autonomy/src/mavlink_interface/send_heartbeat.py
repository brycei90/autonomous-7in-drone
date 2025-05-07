def system_time_send(self, time_unix_usec, time_boot_ms, forcemavlink1=False):
    '''
    The system time is the time of the master clock, typically the
    computer clock of the main onboard computer.

    time_unix_usec    : Timestamp (UNIX epoch time). (uint64_t)
    time_boot_ms      : Timestamp (time since system boot). (uint32_t)
    '''

