import React from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" class="brand-logo">
          Logo
        </a>
        <ul className="right">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
