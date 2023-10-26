import React from 'react'
import logo from "../../../public/assets/airbnb-logo.png"
import "./style.css"

export default function nav()
{
	return (
		<div className="nav__menu">
			<img src={logo} alt="Air Bnb Logo" className="brand" />
		</div>
	);
}