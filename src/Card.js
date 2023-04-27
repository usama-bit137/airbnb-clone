import React from "react";
import "./Card.css"
import star from "./216411_star_icon.png"
import swimmer from "./katie.jpg"
export default function Card() {
    return (
        <section className="card-component">
            <img />
            <div className="info-container">
                <img src={swimmer} alt="katie zaferes" className="image" width="250px"></img>
                <div className="card-info">
                    <p className="rating"><img src={star} alt="star" width="20px" /> 5.0 (6) - USA</p>
                    <p className="card-title">Life Lessons with Katie Zaferes</p>
                    <p className="card-price"><span className="card-price-bold">From $136</span>/person</p>
                </div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}