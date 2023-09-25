import React from "react"
import { useParams, Link } from "react-router-dom"

import vanImageExample from "../assets/van-images/van1.jpg"

export default function VanTemplate(props) {

    // testar se o parametro do Route esta chegando corretamente
    const params = useParams()
    alert(params)

    return (
        <div className="van-template">
            <h4 className="back-button">&larr; Back to vans list</h4>
            <img src={props.vanImage}/>
            <h4 
                className="van-tag"
                style={{ backgroundColor: props.tagColor }}  
            >{props.vanTag}</h4>
            <h2>{props.vanTitle}</h2>
            <h3>
                <span className="price">{props.vanPrice}</span>
                <span className="type-location">{props.locationPeriod}</span>
            </h3>
            <p>{props.vanParagraph}</p>
            <Link className="reserve-button" to="/">Reserve this van!</Link>
        </div>

        /*<div className="van-template">
            <div>
                <Link to="/vans" className="back-button">&larr; Back to vans list</Link>
                <img src={vanImageExample}/>
                <h4 
                    className="van-tag"
                    style={{ backgroundColor: "#ff4500" }}  
                >Explore</h4>
                <h2>Modest Explorer</h2>
                <h3>
                    <span className="price">$60</span>
                    <span className="type-location">/day</span>
                </h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <Link className="reserve-button" to="/">Reserve this van!</Link>
            </div>
        </div>*/
    )
}