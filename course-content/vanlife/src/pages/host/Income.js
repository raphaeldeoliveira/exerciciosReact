import React from "react"
import { Link } from "react-router-dom"

import imagemGrafico from "../../assets/grafico.png"

export default function Income() {

    function CardTransaction(props) {
        return (
            <div className="card-transiction-template">
                <h3>${props.money}</h3>
                <h5>{props.data}</h5>
            </div>
        )
    }

    return (
        //<h1>Income page</h1>

        <div className="host-income">
            <div>
                <h3>Income</h3>
                <h4>Last <span className="day-type">30 days</span></h4>
                <h2>$2,260</h2>
            </div>
            
            {/* esse image abaixo tem que ser substituido por um grafico feito com chart.js ou React Table */}
            <img src={imagemGrafico}/>

            <div className="section-yout-transictions">
                <h4>Your transactions (3)</h4>
                <h5>Last <span>30 days</span></h5>
            </div>
            <div>
                <CardTransaction 
                    money="720" 
                    data="1/12/22" 
                />
                <CardTransaction 
                    money="560" 
                    data="10/11/22" 
                />
                <CardTransaction 
                    money="980" 
                    data="23/11/22" 
                />
            </div>
        </div>
    )
}