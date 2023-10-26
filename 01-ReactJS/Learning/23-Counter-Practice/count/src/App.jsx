import "./App.css";
import React from "react";
import { useState } from "react";
import Count from "./count"

function App() {
	let [count, setCount] = useState(0);

	// Here, avoid using "count++" because, "count++" means "count = count + 1" 
	// And we should avoid "=" operator because it modifies the original old "count" variable
	function increment() {setCount(count + 1)}

	// Best practice is to pass a callback function to setter function
	// The value returned by the callback function is the new value of "count"
	// Here, "prevValue" is the old value of "count" at the time when "decrement()" was called
	function decrement() 
	{
		setCount((prevCount) =>
			{
				return prevCount - 1;
			});
	}
	return (
		<div className="App">
			<div className="counter">
				<button className="counter--minus" onClick={decrement}>–</button>
				{/* Here, "count" state can be passed to prop "value" */}
				<Count value={count}/>
				<button className="counter--plus" onClick={increment}>+</button>
			</div>
		</div>
	);
}

export default App;
