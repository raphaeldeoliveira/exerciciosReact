import React from "react"
import VanThumb from "./VanThumb"

// importe das imagens
import vanOne from "../assets/van-images/van1.jpg"
import vanTwo from "../assets/van-images/van2.jpg"
import vanThree from "../assets/van-images/van3.jpg"
import vanFour from "../assets/van-images/van4.jpg"
import vanFive from "../assets/van-images/van5.jpg"
import vanSix from "../assets/van-images/van6.jpg"

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
                        vanPrice="$90"
                        tagColor="#ff4500"
                        vanTag="Explore"
                        vanDiscount="$20"
                    />
                    <VanThumb 
                        vanImage={vanTwo}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#ff4500"
                        vanDiscount="$20"/>
                    <VanThumb 
                        vanImage={vanThree}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#000000"
                        vanTag="Lauring"
                        vanDiscount="$20"/>
                    <VanThumb 
                        vanImage={vanFour}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#ff4500"
                        vanTag="Explore"
                        vanDiscount="$20"/>
                    <VanThumb 
                        vanImage={vanFive}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#000000"
                        vanTag="Lauring"
                        vanDiscount="$20"/>
                    <VanThumb 
                        vanImage={vanSix}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#0b4e3e"
                        vanTag="Reggae"
                        vanDiscount="$20"/>
                </div>
            </div>
        </div>
        
    )
}