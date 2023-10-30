import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
	// Creating custom reference variable
	let myHider = useRef(null);
	function toggleElem()
	{
		// 'current' stores the actual reference to element
		myHider.current.classList.toggle("active");
	}
	return (
		<div className="App">
			<h3>Click the button to toggle visibility</h3>
			<button onClick={toggleElem}>Toggle</button>
			{/* Referencing a DOM element */}
			<div className='hider' ref={myHider}></div>
		</div>
	);
}

export default App;
