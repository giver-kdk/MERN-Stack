import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Counter(props)
{
	let [count, setCount] = useState(0);
	function increment() {setCount(prevCount => (prevCount + 1))}
	function decrement() {setCount(prevCount => (prevCount - 1))}
	return (
		<>
			<h1>Counter: {props.name}</h1>
			<div className="counter">
					<button className="counter--minus" onClick={decrement}>–</button>
					<div className="count">{count}</div>
					<button className="counter--plus" onClick={increment}>+</button>
			</div>
		</>
	);
}
function App() {
	let [turn1, setTurn1] = useState(true);
	function handleToggle() {setTurn1(prevTurn => !prevTurn)}
  return (
    <div className="App">
		{/* Here, same "Counter" component is rendered on same place of DOM tree with conditional logic.
		So, React assumes "Counter1" and "Counter2" as same Component and doesn't reset the state when turn toggled */}
		<div className="section1">
			{turn1 ? <Counter name="1"/> : <Counter name="2"/>}							{/* No Reset */}
		</div>
		{/* If you want to reset the state even though the same component is rendered on same place, 
		then use "key" prop to let React know the Components are separate */}
		<div className="section1">
			{turn1 ? <Counter key="a" name="1"/> : <Counter key="b" name="2"/>}			{/* Reset */}
		</div>
		{/* Here, same "Counter" component is rendered on two different places of DOM tree with conditional logic.
		So, React assumes "Counter1" and "Counter2" as different Component and resets the state when turn toggled */}
		<div className="section2">			
			{turn1 && <Counter name="1"/>}												{/* Reset */}
			{!turn1 && <Counter name="2"/>}
		</div>
		<button onClick={handleToggle}>Toggle Turn</button>
    </div>
  )
}

export default App
