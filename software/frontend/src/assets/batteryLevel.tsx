import React from 'react'
import { useEffect, useState} from 'react'
import { FaBatteryEmpty, FaBatteryQuarter, FaBatteryHalf, FaBatteryThreeQuarters, FaBatteryFull } from 'react-icons/fa';

type Voltage = {
    batteryVoltage: number;
    numberOfCells: number;
};

//FC is functional component type-checking 
const BatteryIcon: React.FC<{ level: number
}> = ({ level }) => {
    if (level > 75 ) return <FaBatteryFull/>;
    if (level > 50 ) return <FaBatteryThreeQuarters/>  
    if (level > 25) return <FaBatteryHalf />;
    if (level > 10) return <FaBatteryQuarter />;
    return <FaBatteryEmpty/>
};

const BatteryView = () => {
    const [voltage, setVoltage] = useState<Voltage>({batteryVoltage: 0.0, numberOfCells: 6});
    const batteryLevel = (voltage.batteryVoltage / (voltage.numberOfCells * 4.2)) * 100;

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://localhost:8000/battery")
            .then((res) => res.json())
            .then((data) => setVoltage(data));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const avgVoltage: [number] = [voltage.batteryVoltage/voltage.numberOfCells]
    return (
        <div style ={{ display: 'flex', alignItems:'center', gap: '8px'}}>
            <span>total {voltage.batteryVoltage}V</span>
            <span>Cells {avgVoltage}V</span>
            <BatteryIcon level = {batteryLevel} />
        </div>
    );

};

export default BatteryView;



