import React from "react";
import "./Card.css"
import star from "./216411_star_icon.png"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card-component">
            <div className="info-container">
            {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src= {`./images/${props.item.img}`} alt= {props.item.altImg} className="image" width="250px"></img>
                <div className="card-info">
                    <p className="rating">
                        <img src={star} alt="star" width="20px" /> {props.item.stats.rating} ({props.item.stats.raters}) - {props.item.location}
                    </p>
                    <p className="card-title">{props.item.title}</p>
                    <p className="card-price">
                        <span className="card-price-bold">From ${props.item.price}</span>/person
                    </p>
                </div>
            </div>
        </section>
    )
} 