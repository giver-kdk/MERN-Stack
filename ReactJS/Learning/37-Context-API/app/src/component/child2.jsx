// Child Component that uses the context value provided by Provider
import {useContext} from "react"
import MyContext from "../context/myContext";

export default function Child2()
{
	let data = useContext(MyContext);
	return (
		<>
			<h2>Child 2 of {data.name}</h2>
		</>
	);
}