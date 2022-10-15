import React from 'react'
import "./styles/style.css"
import logo from "../../assets/troll-face.png"

export default function header()
{
	return (
		<div className="heading">
			<div className="brand">
				<img src={logo} alt="Troll face" />
				<h4>Meme Generator</h4>
			</div>
			<p>React Course - Project</p>
		</div>
	);
}