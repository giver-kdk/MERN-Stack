import React from 'react'
import "./style.css"
import twitter from "../../assets/Twitter Icon.svg"
import facebook from "../../assets/Facebook Icon.svg"
import instagram from "../../assets/Instagram Icon.svg"
import github from "../../assets/Github Icon.svg"

export default function about()
{
	return (
		<div className='foot'>
			<div className="container__footer">
				<img src={twitter} alt="twitter icon" />
				<img src={facebook} alt="facebook icon" />
				<img src={instagram} alt="instagarm icon" />
				<img src={github} alt="github icon" />
			</div>
		</div>
	);
}