import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { HiOutlinePencilAlt } from "react-icons/hi"

export default function VansHostTemplate() {

    const [currentVanData, setCurrentVanData] = React.useState(null)

    const { id } = useParams()

    React.useEffect(() => {
        fetch(`http://localhost:8080/vans/${id}`)
        .then(response => (response.json()))
        .then(data => { setCurrentVanData(data) })
    }, [id])

    function setCategoryColor() {
        switch (currentVanData.vanCategory) {
            case "Explore": return "black";
            case "Lauring": return "#2E933C";
            case "Reggae": return "#963484";
        }
    }

    if (!currentVanData) {
        return <h1>Loading ...</h1>
    }

    return (
            <div className="host-van-template">
                <Link to="/host/vans">&#x2190; <span>Back to all vans</span></Link>
                <div>
                    <div className="data-van-section">
                        <img src={currentVanData.urlImage}/>
                        <div>
                            <h4 style={{backgroundColor: setCategoryColor()}}>{currentVanData.vanCategory}</h4>
                            <h2>{currentVanData.vanName}</h2>
                            <h3>{currentVanData.vanPrice}<span>/{currentVanData.typeLocation}</span></h3>
                        </div>
                    </div>
                    <nav>
                        <div>
                            <NavLink to="." end
                            className={({isActive}) => isActive ? "active-link" : null }
                            >Details</NavLink>
                            <NavLink to="pricing"
                            className={({isActive}) => isActive ? "active-link" : null}
                            >Pricing</NavLink>
                            <NavLink to="photos"
                            className={({isActive}) => isActive ? "active-link" : null}
                            >Photos</NavLink>
                        </div>
                        {/* o componente abaixo tem que implementar uma logica de edição dos dados (reqsuisição put na API) */}
                        <NavLink>
                        <HiOutlinePencilAlt />
    
                        </NavLink>
                    </nav>
                    <Outlet context={{ currentVanData }}/>
                </div>
            </div>
        )
 
}