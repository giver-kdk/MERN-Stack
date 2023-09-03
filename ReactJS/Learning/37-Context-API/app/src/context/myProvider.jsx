// We need a provider that gives the context value to its childs
// Just like a "div" with red BG makes all its childs to have red BG in CSS, 
// A context provider makes it all childs to have same context value
import { useState } from "react";
import MyContext from "./myContext";

export default function MyProvider({ myName, children })
{
	let [name, setData] = useState(myName);
	function updater()
	{
		// Change Data after 2 seconds
		setTimeout(() =>
		{
			setData("Khadka");
		}, 1000);
	}
	let data = {name, updater};						// Object with content as {name: name, updater: updater}
	return(
		<>
		{/* This means the context value persists among all its childrens */}
			<MyContext.Provider value={data}>
				{children}
			</MyContext.Provider>
		</>
	);
}