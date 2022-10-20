import React, { useState } from 'react'
import "./App.css"

export default function box(props)
{
	let color = props.on ? "#222222" : "transparent";
	// Using object as style property
	// Use camel case as in JS for property name
	let styled = {
		backgroundColor: color
	}
	return (
		<div
		 id={props.id} 
		 style={styled} 
		 className="box" 
		 onClick={props.handleClick}
		//  onClick={() => props.handleClick(id_parameter)}		// We can wrap "props.handleClick()" to pass extra parameter(id) in it

		 >

		 </div>
	)
}