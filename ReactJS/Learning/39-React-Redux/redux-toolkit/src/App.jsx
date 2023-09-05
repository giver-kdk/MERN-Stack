import "./App.css";
import {useSelector, useDispatch} from "react-redux"
import {actions} from "./store"

function App() {
	// "useSelector()" takes function argument that return a part of state, we need
	// So, basically, it selects the part of the state we need 
	let count = useSelector(state => state.counter);
	let dispatch = useDispatch();
    function increment() {
		// Directly send function to execute  to the reducer
		dispatch(actions.increment());
	}
    function decrement() {
		dispatch(actions.decrement());
	}
    function addBy() {
		// Here, argument "10" is the payload
		dispatch(actions.addBy(10));
	}
    return (
        <div className="App">
            <h1>React Redux Learning</h1>
            <h2>Counter</h2>
			{/* The component re-renders only if the "count" changes */}
            <h2>{count}</h2>
			{/* Event triggered by user needs some response */}
            <button className="increment" onClick={increment}>
                Increment
            </button>
            <button className="decrement" onClick={decrement}>
                Decrement
            </button>
            <button className="addBy" onClick={addBy}>
                Add by 10
            </button>
        </div>
    );
}
export default App;
