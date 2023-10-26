import React from 'react'
import Contact from "./components/contact"
import './App.css'

function App() {

  return (
    <div className="App">
      <Contact
        person="../../../public/assets/mr-whiskerson.png"
        name="Mr. Whiskreson"
        number="(212) 555-1234"
        mail="mr.whiskaz@catnap.meow"
      />
      <Contact
        person="../../../public/assets/fluffykins.png"
        name="Fluffykins"
        number="(212) 555-2345"
        mail="fluff@me.com"
      />
      <Contact
        person="../../../public/assets/felix.png"
        name="Felix"
        number="(212) 555-4567"
        mail="thecat@hotmail.com"
      />
      {/* Here, we can pass other non-string JS data types using {} */}
      <Contact
        person="../../../public/assets/pumpkin.png"
        name="Pumpkin"
        number="(0800)"
        mail="pumpkin@scrimba.com"
        identity={123456}
        available={true}
      />
    </div>
  )
}

export default App
