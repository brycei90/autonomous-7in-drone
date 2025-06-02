import { useState, useEffect } from 'react'
import './App.css'
import BatteryView from './assets/batteryLevel'
import MapComponent from './assets/MapComponent'


function App() {

  return (
      <div>
        <header style ={{ color:'lightyellow', padding: '10px'}}>
          <h1>Ground Control Station for BigBee</h1>
        </header>
        <MapComponent/>
        <BatteryView />
      </div>
  )
}

export default App
