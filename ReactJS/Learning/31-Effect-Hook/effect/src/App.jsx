import { useState } from "react";
import React from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
	let [info, setInfo] = useState({});
	let [count, setCount] = useState(1);

	console.log("Componet Rendered");
	useEffect(() => 
	{
		fetch(`https://swapi.dev/api/people/${count}`)
		.then(result => result.json())
		.then(data => setInfo(data));
		console.log("Effect Function Ran");
	}, [count]);
	function increment()
	{
		setCount(prevCount => prevCount + 1);
	}
	return (
		<div className="App">
			<button 
			className="adder"
			onClick={increment}
			>
				Get Next Character
			</button>
			<h2>The count is: {count}</h2>
			{/* Display the object in the DOM as a string */}
			<p>{JSON.stringify(info)}</p>
		</div>
	);
}

export default App;
