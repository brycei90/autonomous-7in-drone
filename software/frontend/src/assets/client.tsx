import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8000');

ws.on('open', () => {
    console.log('Connected to Server');

    ws.send('Hello, server!');
});

ws.on('message', (message: string) => {
    const data = JSON.parse(message)
    setInterval(() => {
        if('latitude' in data && 'longitude' in data){
            const watchID = navigator.geolocation.watchPosition((position) => {
                console.log(position.coords.latitude, position.coords.longitude);
            })
            
        }else{
            console.log('no GPS received', data);
            navigator.geolocation.clearWatch(watchID);
        }
    }, 1000);
});

ws.on('close', () => {
    console.log('Disconnected from server');
});

