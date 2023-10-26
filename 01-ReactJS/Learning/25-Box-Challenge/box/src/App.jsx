import { useState } from "react";
import "./App.css";
import Boxes from "./boxes";
import Box from "./box"

function App() {
	let [boxCollection, setBoxCollection] = useState(Boxes);

	// It is good practice to use "key" prop when using array.map()
	let boxElem = boxCollection.map((box) =>
	{
		return (
			<Box
			key={box.id}
			on={box.on}
			/>
		);
	});
	return (
		<div className="App">
			<h1>Lets see some boxes</h1>
			{boxElem}
		</div>
	);
}

export default App;
