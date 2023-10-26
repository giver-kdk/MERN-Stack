import { useState } from "react";
import "./App.css";
import WindowTrack from "./window_tracker";

function App() {
	let [show, setShow] = useState(true);
	function toggle()
	{
		setShow(prevShow => !prevShow);
	}
	return (
		<div className="App">
			<button className="toggle__btn" onClick={toggle}>
				Toggle Size View
			</button>
			{/* Here, use of entire component depends upon "show" state */}
			{show && <WindowTrack />}
		</div>
	);
}

export default App;
