import React from "react"
import star from "../../../public/assets/star.png"
import "./style.css"

export default function Card(props) {
	let badgeContent;
    if(props.item.openSpots == 0) badgeContent = "SOLD OUT";
    else if(props.item.location == "Online") badgeContent = "ONLINE";
	
    return (
        <div className="card">
			{/* During conditional render, we can also use ternary operator as: 
			<p>{condition ? string1 : string2}</p> */}
            {badgeContent && <div className="card__badge">{badgeContent}</div>}
            <img src={`../../../public/assets/${props.item.coverImg}`} className="card__image" />
            <div className="card__info">
                <img src={star} className="card__star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">{props.item.price}</span> / person</p>
        </div>
    )
}