import React from 'react'
import "./form.css"
import { useState } from "react"
export default function form()
{
	let [formData, setFormData]  = useState(
		{
			email: "",
			password: "",
			confirmation: "",
			joinNewsletter: false
		}
	);

	function handleChange(e)
	{
		let {name, value, checked, type} = e.target;
		let finalValue = (type == "checkbox") ? checked : value;
		setFormData(prevFormData =>
			{
				return {
					...prevFormData,
					[name]: finalValue
				};
			})
	}
	function handleSubmit(e)
	{
		e.preventDefault();
		if(formData.password == formData.confirmation)
		{
			console.log("Successfully Singed Up");
		}
		else
		{
			console.log("Password do not match");
			return;
		}
		if(formData.joinNewsletter)
		{
			console.log("Thanks for signing up for our newsletter");
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<input 
			type="email" 
			name="email" 
			id="email" 
			placeholder='Email Address'
			value={formData.email}
			onChange={handleChange}
			/>
			<input 
			type="password" 
			name="password" 
			id="password" 
			placeholder='Password'
			value={formData.password}
			onChange={handleChange}
			/>
			<input 
			type="password" 
			name="confirmation" 
			id="confirmation" 
			placeholder='Confirm Password'
			value={formData.confirmation}
			onChange={handleChange}
			/>

			<div className="newsletter">
				<input 
				type="checkbox" 
				name="joinNewsletter" 
				id="joinNewsletter"
				checked={formData.joinNewsletter} 
				onChange={handleChange}
				/>
				<label htmlFor="joinNewsletter">I want to join the newsletter</label>
			</div>

			<button>Sign Up</button>
		</form>
	);
}