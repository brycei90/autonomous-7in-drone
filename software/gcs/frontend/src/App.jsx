import { useEffect, useState } from 'react'

export default function App() {
    const [msgs, setMsgs] = useState([])

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000/ws')
        ws.onmessage = (e) => {
            const data = JSON.parse(e.data)
            setMsgs((prev) => [data, ...prev].slice(0,20))
            console.log(data)
        }
        ws.onopen = () => console.log('WebSocket connected')
        ws.onerror = (err) => console.error('WebSocket error', err)
        return () => ws.close()
    }, [])

    return (
        <div className = "p-4 font-sans">
            <h1 className="text-x1 mb-4">Live MAVLink Message</h1>
            <u1 className="list-disc pl-5">
                {msgs.map((m,i) => (
                    <li key={i}>
                        <strong>{m.msg_type}</strong>: {JSON.stringify(m.payload).slice(0,50)}...
                    </li>
                ))}
            </u1>
        </div>
    )
}