import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom"

export default function HostLayout() {


    return (

        <>
            <nav className="navbar-hostLayout">
                <NavLink to="." end
                className={({isActive}) => isActive ? "active-hostLayout" : null}
                >Dashboard</NavLink>
                <NavLink to="income"
                className={({isActive}) => isActive ? "active-hostLayout" : null}
                >Income</NavLink>
                <NavLink to="vans"
                className={({isActive}) => isActive ? "active-hostLayout" : null}
                >Vans</NavLink>
                <NavLink to="reviews"
                className={({isActive}) => isActive ? "active-hostLayout" : null}
                >Reviews</NavLink>
            </nav>
            <Outlet />
        </>
        
    )
}