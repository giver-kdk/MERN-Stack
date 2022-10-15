import "./App.css";
import React from "react";
import { useState } from "react";

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
				<div className="counter--count">
					<h1>{count}</h1>
				</div>
				<button className="counter--plus" onClick={increment}>+</button>
			</div>
		</div>
	);
}

export default App;
