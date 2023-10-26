import React from "react"
import react_logo from "./react_logo.png"

export default function Header()
{
	return (
		<header>
			<nav className="navbar">
				{/* Use JS variable to include images or other assets */}
				<img className="react_logo" src={react_logo} alt="react logo"></img>
				<ul className="nav__items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}