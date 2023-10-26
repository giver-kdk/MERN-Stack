import React from "react"
import "./App.css"

export default function Count(props)
{
    return (
        <div className="counter--count">
                <h1>{props.value}</h1>
        </div>
    );
}