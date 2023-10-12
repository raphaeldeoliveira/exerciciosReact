import React from "react"
import { Link } from "react-router-dom"

import graficoLateral from "../../assets/grafico-lateral.png"

export default function Reviews() {

    function setStars(rating) {
        switch (rating) {
            case 1:
                return <h3><span style={{color: 'orangered'}}>&#9733;</span> &#9733; &#9733; &#9733; &#9733;</h3>
            case 2:
                return <h3><span style={{color: 'orangered'}}>&#9733; &#9733;</span> &#9733; &#9733; &#9733;</h3>
            case 3:
                return <h3><span style={{color: 'orangered'}}>&#9733; &#9733; &#9733;</span> &#9733; &#9733;</h3>
            case 4:
                return <h3><span style={{color: 'orangered'}}>&#9733; &#9733; &#9733; &#9733;</span> &#9733;</h3>
            case 5:
                return <h3 style={{color: 'orangered'}} >&#9733; &#9733; &#9733; &#9733; &#9733;</h3>
        }
    }

    function CardReview(props) {
        return (
            <div className="card-review">
                {setStars(props.rating)}
                <h4>{props.author} <span className="data-avaliation">{props.dataAvaliation}</span></h4>
                <h5>{props.comment}</h5>
            </div>
        )
    }

    return (
        <div className="host-reviews">
            <div className="your-reviews-title">
                <h2>Your reviews</h2>
                <h4>last <span>30 days</span></h4>
            </div>
            <div>
                <div className="overall-rating-section">
                    <h2>5.0</h2>
                    <h4>
                        <span style={{color: 'orangered'}}>&#9733;</span> 
                        overall rating
                    </h4>
                </div>
                {/* a imagem abaixo deve ser substituida por uma tabela com react table ou chart.js */}
                <img src={graficoLateral} />
            </div>
            <h3>Reviews (2)</h3>
            <CardReview 
                rating={5}
                author="Elliot"
                dataAvaliation="December 1, 2022"
                comment="The beach bum is such as awesome van! Such as confortable trip. We had it for 2 weeks and three was not a single issue. Super clean when we picked it up and the host is very comfortable and understading. Higly recommend!"
            />
            <CardReview 
                rating={5}
                author="Sandy"
                dataAvaliation="November 23, 2022"
                comment="This is cur third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
            />
            
        </div>
    )
}