import Child1 from "./child1"
import Child2 from "./child2"
import { useContext } from "react";
import MyContext from "../context/myContext";

// Simply uses the context
export default function Section1()
{
	let data = useContext(MyContext);

	return (
		<>
			<h2>Section 1 of {data.name}</h2>
			<ul>
				<li>
					<Child1/>
				</li>
				<li>
					<Child2/>
				</li>
			</ul>
		</>
	);
}