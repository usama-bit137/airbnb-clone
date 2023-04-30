import React from "react"
import photo from "./images/photo-grid.png"
import "./Hero.css"
export default function Hero() {
    return (
        <section className="container">
            <div className="image-container">
            <img src={photo} alt="grid" width="500px" className="photo-grid"/>
            </div>
            <div>
            <h1>Online Experiences</h1>
            <p className="hero-text">
                Join unique interactive activities led
                by one-of-a-kind hosts - all without 
                leaving home.
            </p>
            </div>
        </section>
    )
}