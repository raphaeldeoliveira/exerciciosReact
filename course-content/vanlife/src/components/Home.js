import React from "react"
import "./styles.scss"

import { Link } from "react-router-dom"

export default function Home() {


    return (
        <main>
            <div className="filtro">
                <div>
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <p>Add adventure to your life by joining the #vanlife moviment. Rent the perfect van to make your perfect road trip.</p>
                    <Link className="link-vans" to="/vans">Find your van</Link>
                </div>
            </div>
        </main>
    )
}