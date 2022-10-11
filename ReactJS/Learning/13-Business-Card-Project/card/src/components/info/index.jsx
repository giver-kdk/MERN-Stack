import React from 'react'
import person from "../../assets/woman.png"
import "./style.css"
import email from "../../assets/Mail.svg"
import linkedIn from "../../assets/linkedin.svg"

export default function info()
{
	return (
		<div className='information'>
			<img src={person} alt="Smiling Women" />
			<h2>Laura Smith</h2>
			<h4>Frontend Developer</h4>
			<small>laurasmith.website</small>
			<div className="btn">
				<button className='mail'>
					<img src={email} alt="" className="email__icon" />
					Email
				</button>
				<button className='linked'>
					<img src={linkedIn} alt="" className="email__icon" />
					LinkedIn
					</button>
			</div>
		</div>

	);
}