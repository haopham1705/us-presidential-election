import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <div className="navbar">
                <p className="navbar__item">
                    <NavLink to="/" activeClassName="active">
                        President
                    </NavLink>
                </p>
                <p className="navbar__item">
                    <NavLink to="/states" activeClassName="menu-active" >
                        States
                    </NavLink>
                </p>
                <p className="navbar__item">
                    <NavLink to="/states-details" activeClassName="menu-active" >
                        States Details
                    </NavLink>
                </p>
            </div>
        </>
    )
}

export default Header
