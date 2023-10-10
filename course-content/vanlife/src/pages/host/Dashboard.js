import React from "react";
import { Link, Outlet } from "react-router-dom"

export default function Dashboard() {

    const [yourVansData, setYourVansData] = React.useState([])

    function Card(props) {
        return (
            <div className="listed-van">
                <img src={props.thumbImage}/>
                <div>
                    <div>
                        <h4>{props.title}</h4>
                        <h5 className="price-by-time">{props.status}</h5>
                    </div>
                    <div className="edit">Edit</div>
                </div>
            </div>
        )
    }

    const loadComponents = yourVansData.map((van) => {
        return <Card 
                    thumbImage={van.thumbImage}
                    title={van.title}
                    status={van.status}
                />
    })

    return (

        /*<>
            <h1>Dashboard goes here</h1>
            *<Outlet /> // esse outlet nao foi implementado
        </>*/

        <div className="host">
            <div className="colorful-section">
                <div className="light-yellow">
                    <div>
                        <h3>Welcome!</h3>
                        <h5>Income last <span className="day-type">30 days</span></h5>
                        <h2>$2,260</h2>
                    </div>
                    <div>Detail</div>
                </div>
                <div className="dark-yellow">
                    <div>
                        <h3>Review Score</h3>
                        <h4><span className="star">&#9733;</span> 4.8<span className="rating-of">/5</span></h4>  
                    </div>
                    <div>
                        <div>Detail</div>
                    </div>
                </div>
            </div>
            <div className="listed-vans">
                <div className="subtitles">
                    <h4>Your listed vans</h4>
                    <h5>View all</h5>
                </div>
                <div>
                    {loadComponents}
                    <Card 
                        // teste deste componente
                        thumbImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCGw2tf4gLYRNmz-__GCyIO1wLn8WcoGNrFDZd-vvvy967GnKARvpCpa5D7iN_JxQwZI&usqp=CAU"
                        title="Modest Explorer"
                        status="60$/day"
                    />
                    <Card 
                        // teste deste componente
                        thumbImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCGw2tf4gLYRNmz-__GCyIO1wLn8WcoGNrFDZd-vvvy967GnKARvpCpa5D7iN_JxQwZI&usqp=CAU"
                        title="Modest Explorer"
                        status="60$/day"
                    />
                    <Card 
                        // teste deste componente
                        thumbImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCGw2tf4gLYRNmz-__GCyIO1wLn8WcoGNrFDZd-vvvy967GnKARvpCpa5D7iN_JxQwZI&usqp=CAU"
                        title="Modest Explorer"
                        status="60$/day"
                    />
                </div>
            </div>
        </div>
    )

}