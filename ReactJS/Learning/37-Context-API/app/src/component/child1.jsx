// Child Component that uses the context value provided by Provider
import { useContext } from "react";
import MyContext from "../context/myContext";

export default function Child1()
{
	let data = useContext(MyContext);
	// This will run updater function, then context value changes after 1 second
	// Here, the name is being changed form a deep level child. 
	// Similar to changing user account 
	data.updater();
	return (
		<>
			<h2>Child 1 of {data.name}</h2>
		</>
	);
}