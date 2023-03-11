import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

function Nav() {
    return (
        <>
            <ul className="navbar">
    
                <li><NavLink to="/" className="navlink" style={{ textDecoration: "none",listStyle: "none" }}>Home</NavLink></li>
                <li><NavLink to="/golden" className="navlink">GoldenNumber</NavLink></li>
                <li><NavLink to="/oddeven" className="navlink">OddEven</NavLink></li>
                <li><NavLink to="/zero" className="navlink">Zero</NavLink></li>
                <li><NavLink to="/calculation" className="navlink">Calculation</NavLink></li>
                <li><NavLink to="/occurences" className="navlink">Occurences</NavLink></li>
                <li><NavLink to="/practice" className="navlink">Practice</NavLink></li>
            </ul>
        </>
    )

}

export default Nav