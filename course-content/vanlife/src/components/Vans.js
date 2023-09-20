import React from "react"
import VanThumb from "./VanThumb"

// importe das imagens
import vanOne from "../assets/van-images/van1.jpg"
import vanTwo from "../assets/van-images/van1.jpg"
import vanThree from "../assets/van-images/van1.jpg"
import vanFour from "../assets/van-images/van1.jpg"
import vanFive from "../assets/van-images/van1.jpg"
import vanSix from "../assets/van-images/van1.jpg"

export default function Vans() {


    return (
        <div className="vans-page">
            <div >
                <h2>Explore our vans options</h2>
                <nav>
                    <button>Explore</button>
                    <button>Lauring</button>
                    <button>Reggae</button>
                    <button className="clean-button">Clean filters</button>
                </nav>
                <div className="vans-list">
                    <VanThumb 
                        vanImage={vanOne}
                        vanTitle="Murder Explorer"
                        vanPrice="90"
                        tagColor="0c0c0c"
                        vanTag="Touring"
                        vanDiscount="20"
                    />
                    <VanThumb />
                    <VanThumb />
                    <VanThumb />
                    <VanThumb />
                    <VanThumb />
                </div>
            </div>
        </div>
        
    )
}