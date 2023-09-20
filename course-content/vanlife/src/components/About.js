import React from "react"
import HotelCaliforniaImage from "../assets/hotel-california.jpg"

import { Link } from "react-router-dom"

export default function About() {


    return (
        <div className="about-section">
            <img src={HotelCaliforniaImage}/>
            <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified vefore each trip to ensure your travel plans can go off whitout a hitch. <br/>(Hitch costs extra)</p>
            <p>Out team us full of vanilife enthusiastics who know firsthand the magic of touring worlnd on 4 whells.</p>

            <div>
                <h3>Your destinantion is waiting. Your van is ready.</h3>
                <Link className="link-vans" to="/vans">Explore our vans</Link>
            </div>
        </div>
    )
}