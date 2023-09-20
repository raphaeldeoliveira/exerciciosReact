import React from "react";

export default function VanThumb(props) {


    return (

        <div className="thumb-van">
            <img src={props.vanImage}/>
            <div>
                <h4 className="thumb-title">{props.vanTitle}</h4>
                <h4 className="thumb-price">{props.vanPrice}</h4>
            </div>
            <div>
                <h4 style={{ backgroundColor: props.tagColor }}  className="thumb-van-tag">{props.vanTag}</h4>
                <h4 className="thumb-discount">{props.vanDiscount}</h4>
            </div>
            
        </div>
    )
}