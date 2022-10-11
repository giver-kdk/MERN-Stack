import React from 'react'
import imgGrid from "../../../public/assets/photo-grid.png"
import "./style.css"

export default function hero(props)
{
	return (
		<div className="hero__section">
			<img src={imgGrid} alt="Image Gallery" className="collection" />
			<div className="info">
				<h2 className='hero__title'>Online Experiences</h2>
				<p className='hero__info'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
			</div>

		</div>
	);
}