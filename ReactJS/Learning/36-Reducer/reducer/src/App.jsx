import { useState, useReducer } from "react";
import myReducer from "./myReducer.jsx"
import "./App.css";
// "Reducer" is helpful for better code structure when component is complex. But, here is a simple example.
function App() {
	// let [count, setCount] = useState(0);
	// Using "useReducer" instead of "useState". Syntax: "useReducer(reducer_function, initial_value)"
	// "dispatch" is like setter function, indirectly. It improves code readability
	let [count, dispatch] = useReducer(myReducer, 0);
	function increment() {
		// setCount((prevCount) => prevCount + 1);

		// Parameter of "dispatch" function is an Object with required data fields
		// Write what "type" of action is being performed on event trigger
		// Then, include data required to perform that specific action like a function parameter
		dispatch(
			{
				type: "incrementing",
				counter: count
			}
		);
	}
	function decrement() {
		// setCount((prevCount) => prevCount - 1);
		dispatch(
			{
				type: "decrementing",
				counter: count
			}
		);
	}
	return (
		<div className="App">
			<h1>Counter</h1>
			<div className="counter">
				<button className="counter--minus" onClick={decrement}>
					–
				</button>
				<div className="count">{count}</div>
				<button className="counter--plus" onClick={increment}>
					+
				</button>
			</div>
		</div>
	);
}

export default App;
