import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout() {

    return (
        <>
            <Header />
                <Outlet />
            <footer>©2022 #VANLIFE</footer>
        </>
        
    )
}