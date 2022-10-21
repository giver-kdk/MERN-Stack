import { useState } from "react";
import React from "react";
import "./App.css";
import { useEffect } from "react";

/*
	- useEffect(function_name, dependencies) is used to run features that are outside the 
	  control of ReactJS
	- "function_name" is the actual side effect function that gets run 
	- "dependencies"(optional) is an array of variables that determines whether to run "useEffect" or not
	- Examples of side effect functions are: fetch API, event-listerners, timer function, local storage, etc
	- Examples of dependencies variables are: props, states, etc
	- Execution of useEffect() depends on: 
		- If there is no dependencies array parameter, then "useEffect()" run at every re-render of DOM
		- If dependencies array is empty, then "useEffect()" runs once at first DOM render only
		- If dependencies array has variable, then "useEffect()" runs at first, then 
		  further execution happens only if one of the dependecies variable is changed/updated in new render
*/

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
