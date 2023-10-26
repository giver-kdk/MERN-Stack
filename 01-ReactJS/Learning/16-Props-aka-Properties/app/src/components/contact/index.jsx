import React from "react"
// import cat from "../../assets/mr-whiskerson.png"
import phone from "../../../public/assets/phone-icon.png"
import mail from "../../../public/assets/mail-icon.png"
import "./style.css"

// Object Destructuring for Props
// export default function contact({person, name, number, mail}) {
// 	return (
// 		<div className="contact-card">
// 			<img className="picture" src={person} alt="person photo" />
// 				<div className="info">
// 					<h3>{name}</h3>
// 					<div className="info-group">
// 						<img className="phone__icon" src={phone} />
// 						<p>{number}</p>
// 					</div>
// 					<div className="info-group">
// 						<img className="email__icon" src={mail} />
// 						<p>{ mail}</p>
// 					</div>
// 				</div>
// 		</div>
// 	);
// }
export default function contact(props) {
	return (
		<div className="contact-card">
			{/* Accessing non-string data-type normallly inside component */}
			{props.available && console.log(props.available)}
			<img className="picture" src={props.person} alt="person photo" />
				<div className="info">
					<h3>{props.name}</h3>
					<div className="info-group">
						<img className="phone__icon" src={phone} />
						<p>{props.number}</p>
					</div>
					<div className="info-group">
						<img className="email__icon" src={mail} />
						<p>{props.mail}</p>
					</div>
				</div>
		</div>
	);
}
