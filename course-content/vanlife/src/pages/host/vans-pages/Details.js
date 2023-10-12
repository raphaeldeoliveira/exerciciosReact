import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Details() {

    const { currentVanData } = useOutletContext()

    return (
        <div className="host-vans-details">
            <h4><span>Name:</span> {currentVanData.vanName}</h4>
            <h4><span>Category:</span> {currentVanData.vanCategory}</h4>
            <h4><span>Description:</span> {currentVanData.description}</h4>
            {/* abaixo não foi implementado na entidade o dado abaixo, pois 
            não foi implementado logica de contas logadas */}
            <h4><span>Visibility:</span> Public</h4>
        </div>
    )
}