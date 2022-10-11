import React from "react"
import react_logo from "../assets/react.svg"

export default function Header()
{
	return (
		<header>
			<nav className="navbar">
				{/* Use JS variable to include images or other assets */}
				<div className="brand">
					<img className="react_logo" src={react_logo} alt="react logo"></img>
					<h3>ReactFacts</h3>
				</div>
				<ul className="nav__items">
					<li>React Course</li>
					<li>Project 1</li>
				</ul>
			</nav>
		</header>
	);
}