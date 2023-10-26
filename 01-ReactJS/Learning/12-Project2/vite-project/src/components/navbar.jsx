import React from "react"
import react_logo from "../assets/react.svg"

export default function Header(props)
{
	let modes = props.mode;
	return (
		<header>
			<nav className={`navbar${modes}`}>
				{/* Use JS variable to include images or other assets */}
				<div className="brand">
					<img className="react_logo" src={react_logo} alt="react logo"></img>
					<h3 className={`title${modes}`}>ReactFacts</h3>
				</div>
				<ul className="nav__items">
					<div className="mode">
						<div className={`light__mode${modes}`}>Light</div>
						<div className={`toggle__btn${modes}`} onClick={props.handleClick}>
							<div className={`toggle__circle${modes}`}></div>
						</div>
						<div className={`dark__mode${modes}`}>Dark</div>
					</div>
					<li>React Course</li>
					<li>Project 1</li>
				</ul>
			</nav>
		</header>
	);
}