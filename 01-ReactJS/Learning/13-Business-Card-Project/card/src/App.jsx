import React from 'react'
import './App.css'
// "index.jsx" is not required to be written in path
import Info from "./components/info"
import About from "./components/about"
import Interest from "./components/interest"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <div className="card">
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
