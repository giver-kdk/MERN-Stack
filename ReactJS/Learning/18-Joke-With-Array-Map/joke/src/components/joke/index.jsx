import React from 'react'
import "./style.css"

export default function joke(props)
{
	return (
		<div className="box">
			{/* Conditional Rendering: Show the setup element only when prop.setup is truthy */}
			{props.setup && <div className="setup">Setup: {props.setup}</div>}
			<div className="punchline">Punchline: {props.punchline}</div>
		</div>
	);
}