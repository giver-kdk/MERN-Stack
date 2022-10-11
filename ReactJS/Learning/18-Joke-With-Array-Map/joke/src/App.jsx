import React from 'react'
import './App.css'
import Joke from "./components/joke"
// Now, "jokeData" is a usable array of objects in this file
import jokeData from "./assets/jokeData"

function App() {
  // Creating an array of components to render using map() on "jokeData" array
  let JokeElem = jokeData.map(joke =>
  {
    return (
      // Setting attribute for component using array data
      <Joke
      setup={joke.setup}
      punchline={joke.punchline}
      />
    );
  });
 
  return (
    <div className="App">
      {/* ReactJS can directly render array of elements/components when kept inside {} */}
        {JokeElem}
    </div>
  )
}

export default App
