import React from "react";
import { Link } from "react-router-dom"

export default function VanThumb(props) {

    return (

        <Link to={`/vans/${props.vanId}`} className="thumb-van">
            <img src={props.vanImage}/>
            <div>
                <h4 className="thumb-title">{props.vanTitle}</h4>
                <h4 className="thumb-price">{props.vanPrice}</h4>
            </div>
            <div>
                <h4
                    //style={{ backgroundColor: props.tagColor, display: props.vanTag == null ? "none" : "block" }}  
                    style={props.vanTag == null ? { backgroundColor: "#e2d1ba", color: "#e2d1ba" } : { backgroundColor: props.tagColor }}
                    className="thumb-van-tag">{props.vanTag}

                </h4>
                <h4 className="thumb-discount">{props.vanDiscount}</h4>
            </div>
            
        </Link>
    )
}