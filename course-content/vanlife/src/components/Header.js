import React from "react"
import { Link } from "react-router-dom"

export default function Header() {

    return (
        <header>
          <nav>
            <Link to="/">#VANLIFE</Link>
            <div>
              <Link to="/host">Host</Link>
              <Link to="/about">About</Link>
              <Link to="/vans">Vans</Link>
            </div>
          </nav>
        </header>
    )
}