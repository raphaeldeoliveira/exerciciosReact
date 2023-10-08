import React from "react";
import { Link, Outlet } from "react-router-dom"

export default function Dashboard() {

    const [yourVansData, setYourVansData] = React.useState([])

    function Card(props) {
        return (
            <div>
                <img src={props.thumbImage}/>
                <div>
                    <h4>{props.title}</h4>
                    <h5>{props.status}</h5>
                </div>
                <div>
                    <h5>delete</h5>
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

        <>
            <h1>Dashboard goes here</h1>
            {/*<Outlet />*/}
        </>

        /*<div className="host">
            <nav>
                <Link to="" >Dashboard</Link>
                <Link to="" >Income</Link>
                <Link to="" >Vans</Link>
                <Link to="" >Reviews</Link>
            </nav>
            <div className="colorful-section">
                <div className="light-yellow">
                    <div>
                        <h3>Welcome!</h3>
                        <h5>Total cash be payed</h5>
                        <h2>$2,260</h2>
                    </div>
                    <div>Detail</div>
                </div>
                <div className="dark-yellow">
                    <div>
                        <h3>Review Score</h3>
                        <h4>4.8/5</h4>  
                    </div>
                    <div>
                        <h5>detail</h5>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h4>Your listed vans</h4>
                    <h5>View all</h5>
                </div>
                <div>
                    {loadComponents}
                    <Card />
                </div>
            </div>
        </div>*/
    )

}