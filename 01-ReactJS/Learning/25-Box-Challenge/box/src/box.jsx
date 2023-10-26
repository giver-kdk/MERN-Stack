import React, { useState } from 'react'
import "./App.css"

export default function box(props)
{
	let [onState, setOnState] = useState(props.on);
	let color = onState ? "#222222" : "transparent";
	// Using object as style property
	// Use camel case as in JS for property name
	let styled = {
		backgroundColor: color
	}
	function handleClick()
	{
		setOnState(prevOnState => !prevOnState);
	}
	return (
		<div style={styled} className="box" onClick={handleClick}></div>
	)
}