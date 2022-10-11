import './App.css'
import Nav from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'

function App() {

  return (
    <div className="App">
        <Nav/>
        <Hero/>
        <Card
        person="../../../public/assets/katie-zaferes.png"
        rating={5.0}
        review={6}
        country="USA"
        message="Life Lessons with Katie Zaferes"
        cost="5.6 USD"
        />
    </div>
  )
}

export default App
