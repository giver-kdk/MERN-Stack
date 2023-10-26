import { useState } from 'react'
import './App.css'

function App() {

  let time = new Date();
  let hour = time.getHours();
  let greet;
  if(hour < 12) greet = "morning";
  else if(hour >= 12 && hour < 17) greet = "afternoon";
  else if(hour >= 17) greet = "night"; 
  return (
    <div className="App">
      <div className="greeting">Good {greet}</div>
    </div>
  )
}

export default App
