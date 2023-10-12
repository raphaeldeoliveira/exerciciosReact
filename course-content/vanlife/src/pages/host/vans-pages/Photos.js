import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos() {

    const {currentVanData} = useOutletContext()

    return (
        <div className="host-vans-photos">
            <img src={currentVanData.urlImage} />
            {/* a imagem acima tem que ser substituida por uma chamada
            de função que carrega as imagens. Mas pra isso tem que criar
            uma tabela no banco só pras imagens */}
        </div>
    )
}