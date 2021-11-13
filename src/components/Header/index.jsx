import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <div className="navbar">
                <p className="navbar__item">
                    <NavLink to="/" activeclassname="active">
                        President
                    </NavLink>
                </p>
                <p className="navbar__item">
                    <NavLink to="/states" activeclassname="menu-active" >
                        States
                    </NavLink>
                </p>
                <p className="navbar__item">
                    <NavLink to="/states-details" activeclassname="menu-active" >
                        States Details
                    </NavLink>
                </p>
            </div>
        </>
    )
}

export default Header
