import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom"

export default function HostLayout() {


    return (

        <>
            <nav className="navbar-hostLayout">
                <NavLink to="/host" end
                className={({isActive}) => isActive ? "active-hostLayout" : null}
                >Dashboard</NavLink>
                <NavLink to="/host/income"
                className={({isActive}) => isActive ? "active-hostLayout" : null}
                >Income</NavLink>
                <NavLink to="/host/vans"
                className={({isActive}) => isActive ? "active-hostLayout" : null}
                >Vans</NavLink>
                <NavLink to="/host/reviews"
                className={({isActive}) => isActive ? "active-hostLayout" : null}
                >Reviews</NavLink>
            </nav>
            <Outlet />
        </>
        
    )
}