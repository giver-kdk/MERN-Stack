import React from 'react'
import {useState} from "react"
import {useEffect} from "react"

/*
	- In DMA of C-Program, we use free() to cleanup the allocated memeory when DMA is not required, 
	  just like that we need to do cleanup if our component is going to be removed from DOM. To do so: 
		- When component containing useEffect/side effect is removed, then 
		  ReactJS immediately runs a function returned by useEffect's "callback function"
		- That returned function can be used to cleanup the side effect like: 
		  Removing Event Listeners, Clearing Local Storage, etc
	- NOTE: The callback function in "useEffect" can only return a function to execute
*/
export default function window_track()
{
	let [width, setWidth] = useState(window.innerWidth);

	function update_size()
	{
		setWidth(window.innerWidth);
	}
	useEffect(() =>
	{
		window.addEventListener("resize", update_size);

		// The callback function returns a cleaup function to remove event-listener
		return (() =>
		{
			window.removeEventListener("resize", update_size);
		});
	}, [])
	return (
		<>
			<h1>The window width is: {width}</h1>
		</>
	);
}