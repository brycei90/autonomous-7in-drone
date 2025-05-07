import React from 'react'

export default function App(){
    //1. define the click handler in JS
    const handleArm = async () => {
        try{
            const res = await fetch('/api/arm', { method: 'POST' });
            if (!res.ok) throw new Error('Arm failed');
            armed = True;
        }catch(err){
            console.error(err)
            alert('could not arm vehicle')
        }
    }

    return(
        <div>
            <h1>Your GCS Dashboard</h1>
            <button1>Arm</button1>
            <button2>Mode Change</button2>
            
        </div>
    )
}