import './App.css'
import React from 'react'
import mountain from "./assets/mountain.jpeg"

/*
Some of the inline even-type names for reactJS: 
	onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
	onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
	onMouseMove onMouseOut onMouseOver onMouseUp
*/

function App() {
	// Define the event handeling functions 
	function handle_click()
	{
		console.log("I was clicked!!!");
	}
	function handle_hover()
	{
		console.log("Mouse was hovered!!!");
	}
  return (
    <div className="App">
		{/* Use inline event-handling using `camelCase` for event-type names */}
		<img src={mountain} alt="Mountain" className="photo" onMouseOver={handle_hover} />
		<button onClick={handle_click}>Click Me</button>
    </div>
  )
}

export default App
