import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {

    return (
        <header>
          <nav>
            <NavLink to="/">#VANLIFE</NavLink>
            <div>
              <NavLink to="/host"
              className={({isActive}) => isActive ? "activeLink" : null}
              >Host</NavLink>
              <NavLink to="/about"
              className={({isActive}) => isActive ? "activeLink" : null}
              >About</NavLink>
              <NavLink to="/vans"
              className={({isActive}) => isActive ? "activeLink" : null}
              >Vans</NavLink>
            </div>
          </nav>
        </header>
    )
}