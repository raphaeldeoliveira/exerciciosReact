import React from "react";
import { Link } from "react-router-dom"

export default function VansHost() {

    function CardListedVan(props) {
        return (
            <Link to={`/host/vans/${props.id}`} className="listed-van-card">
                <img src={props.urlImage}/>
                <div>
                    <h3>{props.vanName}</h3>
                    <h4>${props.vanPrice}</h4>
                </div>
            </Link>
        )
    }
    
    return (
        <div className="host-vans">
            <h2>Your listed vans</h2>

            <CardListedVan 
                id="1"
                urlImage="https://cdn.awsli.com.br/800x800/456/456367/produto/101425487/carrinho-hot-wheels-dodge-van-mooneyes-edicao-2021-c7364f3f.jpg"
                vanName="Modest Explorer"
                vanPrice="60/day"
            />
            <CardListedVan 
                id="2"
                urlImage="https://cdn.awsli.com.br/800x800/456/456367/produto/101425487/carrinho-hot-wheels-dodge-van-mooneyes-edicao-2021-c7364f3f.jpg"
                vanName="Modest Explorer"
                vanPrice="60/day"
            />
            <CardListedVan 
                id="3"
                urlImage="https://cdn.awsli.com.br/800x800/456/456367/produto/101425487/carrinho-hot-wheels-dodge-van-mooneyes-edicao-2021-c7364f3f.jpg"
                vanName="Modest Explorer"
                vanPrice="60/day"
            />
        </div>
    )
}