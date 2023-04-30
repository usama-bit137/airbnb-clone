import React from "react";
import "./Navbar.css"
import logo from "./images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="airbnb logo" className="nav-logo" width="100px"/>
        </nav>
    )
}