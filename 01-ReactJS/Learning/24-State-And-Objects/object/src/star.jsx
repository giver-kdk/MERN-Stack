import React from 'react'
import emptyStar from "./assets/star-empty.png"
import fillStar from "./assets/star-filled.png"
import './App.css'


export default function star(props)
{
	let starIcon = props.isFilled ? fillStar : emptyStar;
	return (
		<img 
			src={starIcon} 
			className="card--favorite"
			// Here, "img" is actual HTML tag that can have "onClick" event listener
			// We provide the function taken by prop as event handling function
			// The function is then executed from the place where it is defined
			onClick={props.handleClick}
		/>
	);
}