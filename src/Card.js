import React from "react";
import "./Card.css"
import star from "./216411_star_icon.png"

export default function Card(props) {
    return (
        <section className="card-component">
            <img />
            <div className="info-container">
                <img src= {`./images/${props.img}`} alt= {props.altImg} className="image" width="250px"></img>
                <div className="card-info">
                    <p className="rating"><img src={star} alt="star" width="20px" /> {props.rating} ({props.raters}) - {props.location}</p>
                    <p className="card-title">{props.title}</p>
                    <p className="card-price"><span className="card-price-bold">From ${props.price}</span>/person</p>
                </div>
            </div>
        </section>
    )
} 