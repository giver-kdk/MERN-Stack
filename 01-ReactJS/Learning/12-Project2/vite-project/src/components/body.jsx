import React from "react"

export default function Body(props)
{
	let modes = props.mode;
	return (
		<div>
			<h1 className={`header${modes}`}>Fun facts about React</h1>
			<ul className={`list${modes}`}>
				<li>Was first released on 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on Github</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enteprise apps, including mobile apps</li>
			</ul>
		</div>
	);
}