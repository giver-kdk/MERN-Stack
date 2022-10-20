import React from 'react'
import { useState } from "react"
import "./form.css"

export default function form()
{
	// Making separate state for separate input fields value is a hastle because each requires individual setter function
	// let [firstName, setFirstName] = useState("Giver");
	// let [lastName, setLastName] = useState("Khadka");

	// Enclose the form input fields value inside object to manipulate them with single function 
	let [formData, setFormData] = useState(
		{
			firstName: "",
			lastName: "",
			email: "",
			comment: "",
			isFriendly: true,
			employment: "",
			color: ""
		}
	);

	function handleChange(e)
	{
		// We can directly do: {name, value, checked, type} = e.target;
		let name = e.target.name;
		let value = e.target.value;
		let checked = e.target.checked;
		let type = e.target.type;
		let finalValue = (type == "checkbox") ? checked : value;
		// Use [] inside object if "key" is a variable
		setFormData(prevFormData =>
			{
				return {
					...prevFormData,
					[name]: finalValue
				}
			});
	}

	function handleSubmit(e)
	{
		e.preventDefault();

		// Acces the latest form data using the state variable directly
		console.table(formData);
	}
	return (
		// When "submit" button is pressed, then "onSubmit" event is triggered in "form"
		<form onSubmit={handleSubmit}>

			{/* Text Input */}

			<input 
			type="text" 
			placeholder='First Name'
			value={formData.firstName}
			// Here, the value doesn't change in DOM if handleChange() is not used
			// To change the content of input, we need an event-listener
			onChange={handleChange}
			// Here, we need to match the "name" to the "formData" key name
			name="firstName"
			/>
			<input 
			type="text" 
			placeholder='Last Name'
			// "value" can get updated automatically without setting it manually like here.
			// But, setting value like this allows React to fully control the value. 
			// Eg: Here, a "." is added everytime a key is pressed
			value={formData.lastName + "."}
			onChange={handleChange}
			name="lastName"
			/>

			{/* Email Input */}

			<input 
			type="email" 
			placeholder='example@gmail.com'
			value={formData.email}
			onChange={handleChange}
			name="email"
			/>

			{/* Text Area Input */}

			{/* Normally, HTML uses: <textarea> Content </textarea>. But, React can also use single tag: */}
			{/* Other attribute controll is same as "input" field */}
			<textarea
				placeholder='Comments'
				value={formData.comment}
				name='comment'
				onChange={handleChange}
			/>

			{/* Checkbox Input  */}

			<div className="box">
				<input 
				type="checkbox" 
				name="isFriendly" 
				id="isFriendly" 
				value={formData.isFriendly}
				onChange={handleChange}
				/>
				{/* In React, we use "htmlFor" instead of "for" */}
				<label htmlFor="isFriendly">Are you friendly?</label>
			</div>

			{/* Radio Button Input */}

			{/* For radio buttons to collab, their "name" attribute should be same */}
			{/* Radio button's value should be unique. It is used for determining clicked button */}

			<div className="btn">
				<input 
				type="radio" 
				name="employment" 
				value="employed"
				id="employed"
				// Here, if condition is met, then we get true(i.e; checked = true)
				checked={formData.employment === "employed"}
				onChange={handleChange}
				/>
				<label htmlFor="employed">Employed</label>
			</div>
			<div className="btn">
				<input 
				type="radio" 
				name="employment" 
				id="part-time" 
				value="part-time"
				checked={formData.employment == "part-time"}
				onChange={handleChange}
				/>
				<label htmlFor="part-time">Part-Time</label>
			</div>
			<div className="btn">
				<input 
				type="radio" 
				name="employment" 
				id="full-time" 
				value="full-time"
				checked={formData.employment == "full-time"}
				onChange={handleChange}
				/>
				<label htmlFor="full-time">Full-Time</label>
			</div>

			{/* Select and Option Field */}

			<select 
			name="color" 
			id="favourite-color"
			// In normal HTML, we would put "selected" attribute in "option" to select it
			// But in React, the "value" attribute in "select" determines the selection
			value={formData.color}
			onChange={handleChange}
			>
				<option value="red">Red</option>
				<option value="green">Green</option>
				<option value="blue">Blue</option>
			</select>

			{/* Submit Form */}

			{/* Button inside "form" is a submit button by default. 
			To make it a normal button, set type="button" */}
			<button>Submit</button>

		</form>
	);
}