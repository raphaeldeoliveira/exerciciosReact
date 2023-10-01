import React from "react"
import { useParams, Link } from "react-router-dom"

import vanImageExample from "../assets/van-images/van1.jpg"

export default function VanTemplate() {

    const [vanData, setVanData] = React.useState()

    // Obtém o parâmetro de ID da URL
    const { id } = useParams();

    // Faz a chamada a API para carregar os dados
    React.useEffect(() => {
        fetch(`http://localhost:8080/vans/${id}`)
        .then(response => response.json())
        .then(data => { setVanData(data) })
    }, [id])

    function setCategoryColor(category) {
        switch (category) {
            case "Explore": return "black";
            case "Lauring": return "#2E933C";
            case "Reggae": return "#963484";
        }
    }

    if (!vanData) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="van-template">
            <div>
                <Link to="/vans" className="back-button">&larr; Back to vans list</Link>
                <img src={vanData.urlImage}/>
                <h4 
                    className="van-tag"
                    style={{ backgroundColor: setCategoryColor() }}  
                >{vanData.vanCategory}</h4>
                <h2>{vanData.vanName}</h2>
                <h3>
                    <span className="price">{vanData.vanPrice}</span>
                    <span className="type-location">{vanData.typeLocation}</span>
                </h3>
                <p>{vanData.vanParagraph}</p>
                <Link className="reserve-button" to="/">Reserve this van!</Link>
            </div>
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