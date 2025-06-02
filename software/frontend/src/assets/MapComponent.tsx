import React from 'react';
import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'


function MyComponent() {
    const map = useMap()
    console.log('map centre', map.getCenter())
    return null
}

function MapComponent(lat=51, long=114) {

    var map = L.map('map').setView([lat,long], 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(map);

    L.marker([lat,long]).addTo(map)
        .bindPopup('Drone here')
        .openPopup();

    function onMapClick(e: { latlng: L.LatLngExpression; }){
        var popup = L.popup();
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map)
    }

    map.on('click', onMapClick);
    return(
        <MapContainer center={[lat, long]} zoom={13}>
            <MyComponent />
        </MapContainer>
    )
}




export default MapComponent