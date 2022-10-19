import { useState } from "react";
import "./App.css";
import Boxes from "./boxes";
import Box from "./box"

function App() {
	let [boxCollection, setBoxCollection] = useState(Boxes);

	function flip_color(e)
	{
		setBoxCollection(prevBoxCollection =>
			{
				// We can use map() because it doesn't modify the original array
				let result = prevBoxCollection.map(elem =>
					{
						if(elem.id == e.target.id)
						{
							// This is the perfect way to update object in ReactJS
							// Here, our object is part of "State". So, we follow this method
							return elem = {
								...elem,
								on: !elem.on
							}
						}
						else return elem;
					});
				
				// console.log(result);
				return result;
			});
	}
	// It is good practice to use "key" prop when using array.map()
	let boxElem = boxCollection.map((box) =>
	{
		return (
			<Box
			key={box.id}
			id={box.id}
			on={box.on}
			handleClick={flip_color}
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
