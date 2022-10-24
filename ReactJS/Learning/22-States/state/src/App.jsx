import "./App.css";
import React from "react";
import {useState} from "react"

/*
- `useState` is known as Hooks in reactJS
- We can also do: React.useState() if we don't want to import it
- State is used to re-render the DOM when the local variable inside the component is updated
- When we need to deal with internal variables that frequently changes, we use state
- When we need to deal with outer non-changing data like function parameter, we use props

- Since, directly changing the variable using assignment operator doesn't change the DOM.
- So, we need to use a function returned by "useState" to change variable which will change DOM
- In this program, `setItems()` is userdefined function for updating the `items` variable value
- Which then re-renders the DOM, if DOM is using that variable for rendering UI
	Syntax Eg:
		- let [data, setData] = useState(12);
		// Here, "data" becomes 12 and "setData()" becomes it's updater

		- setData(20);
		// Here, the `20` can be replaced with a function returning some value

		- setData(data =>
			{
				return (data + 2);
			})
		// Here, parameter "data" is the previous value(12) returned by "useState"  
		// And, the returned value is the new value for the variable "data"
*/



function App() {
	// In normal definition of variable, the DOM doesn't update when variable updates
	// let items = ["Item 1", "Item 2", "Item 3"];
	
	// Here, "useState" return array of value and function. So, "items" becomes array of: array and function 
	// So, we use items[0] to get the entire array. Then, we do items[0][i] to access those array elements. 
	// Also, we use items[1] to access the "set" function that sets/updates the "items" array
	// let items = useState(["Item 1", "Item 2", "Item 3"]);

	// Array destructuring method is easy and commonly used
	// Here, "items" becomes the array(value) and "setItems" becomes the function to update the array
	// NOTE: This initialization line runs at every render, but the value is not assigned
	// Only, the new updated value is assigned to the state in background
	let [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

	// Here, if we use a function returning value instead of direct value,
	// Then the initialization behaves like "static" variable initialzation in C-Program
	// It will not re-initialize next time. This may save CPU resource if complex functions used 
	// let [items, setItems] = useState(() => ["Item 1", "Item 2", "Item 3"]);
	function add_item() {
		let newItemText = `Item ${items.length + 1}`;

		// setItems([...items, newItemText]);
		setItems((prevItems) => 
		{
			// This returned value is the value which is now assigned to `items`
			return [...prevItems, newItemText];
			// return prevItems.push(newItemText); is also now allowed because it modifies original old array
		});
		// items = items.push(newItemText)				// Not allowed cause it modifies original old array
	}
	let itemList = items.map((item) => {
		return <li>{item}</li>;
	});

	return (
		<div className="App">
			<button className="btn" onClick={add_item}>
				Add Item
			</button>
			<ul className="items">{itemList}</ul>
		</div>
	);
}

export default App;
