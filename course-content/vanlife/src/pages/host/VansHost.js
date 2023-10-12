import React from "react";
import { Link } from "react-router-dom"

export default function VansHost() {

    const [vansListedData, setVansListedData] = React.useState(null)

    React.useEffect(() => {
        fetch("http://localhost:8080/vans")
        .then((response) => response.json())
        .then((data) => setVansListedData(data))
    }, [])

    function loadListedVans() {
        // melhorar essa logica quando implementar um banco de dados melhor

        if (!vansListedData) {
            return null;
        }

        const vansToRender = []

        for (let i=0; i<3; i++) {
            vansToRender.push(
                <CardListedVan 
                    id={vansListedData[i].id}
                    urlImage={vansListedData[i].urlImage}
                    vanName={vansListedData[i].vanName}
                    vanPrice={vansListedData[i].vanPrice}
                    typeLocation={vansListedData[i].typeLocation}
                />
            )
        }

        return vansToRender
    }

    function CardListedVan(props) {
        return (
            <Link to={`/host/vans/${props.id}`} className="listed-van-card">
                <img src={props.urlImage}/>
                <div>
                    <h3>{props.vanName}</h3>
                    <h4>${props.vanPrice}/{props.typeLocation}</h4>
                </div>
            </Link>
        )
    }
    
    return (
        <div className="host-vans">
            <h2>Your listed vans</h2>

            {loadListedVans()}

        </div>
    )
}