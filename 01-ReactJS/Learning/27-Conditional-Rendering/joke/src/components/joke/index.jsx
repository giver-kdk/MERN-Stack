import React from 'react'
import {useState} from "react"
import "./style.css"

export default function joke(props)
{
	let [isShown, setIsShown] = useState(false);
	function toggle_view()
	{
		setIsShown(prevIsShown => !prevIsShown);
	}
	return (
		<div className="box">
			{/* Conditional Rendering: Show the setup element only when prop.setup is truthy */}
			{props.setup && <div className="setup">Setup: {props.setup}</div>}
			{isShown && <div className="punchline">Punchline: {props.punchline}</div>}
			{/* Conditional Rendering using ternary operator */}
			<button className="toggle" onClick={toggle_view}>{!isShown ? "Show" : "Hide"} Punch Line</button>
		</div>
	);
}