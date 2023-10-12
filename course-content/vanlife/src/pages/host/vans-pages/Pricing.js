import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {

    const { currentVanData } = useOutletContext()

    return (
        <h2 style={{ fontSize: "20px", width: "90%", margin: "26px auto", display:"flex", alignItems:"center"}}>
            ${currentVanData.vanPrice}.00
            <span style={{fontSize:"14px", color:"gray"}}>
                /{currentVanData.typeLocation}
            </span>
        </h2>
    )
}