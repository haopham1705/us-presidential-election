import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <ul className="navbar">
                <li className="navbar__item">
                    <NavLink className="navbar__link" to="/" activeclassname="active">
                        President
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink className="navbar__link" to="/states" activeclassname="menu-active" >
                        States
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink className="navbar__link" to="/states-details" activeclassname="menu-active" >
                        States Details
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default Header
