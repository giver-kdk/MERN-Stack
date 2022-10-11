import React from "react"
import star from "../../../public/assets/star.png"
import "./style.css"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.coverImg} className="card__image" />
            <div className="card__info">
                <img src={star} className="card__star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p><span className="bold">{props.price}</span> / person</p>
        </div>
    )
}