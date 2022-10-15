import './App.css'
import React from 'react'
import Heading from "./components/heading"
import List from "./components/list"
import placeData from "./utils/data"
// import List from "./components/list"

function App() {
	let collection = placeData.map((elem) =>
	{
		return (
			<List
				item={elem}
			/>
		);
	});
  return (
    <div className="App">
		<Heading/>
		<div className="places">
			{collection}
		</div>
    </div>
  )
}

export default App
