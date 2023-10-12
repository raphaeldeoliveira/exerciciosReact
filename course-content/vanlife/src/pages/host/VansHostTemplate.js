import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { HiOutlinePencilAlt } from "react-icons/hi"

export default function VansHostTemplate() {

    // da o get na API com o id e mostra os dados abaixo
    const { id } = useParams()

    return (
        <div className="host-van-template">
            <Link to="/host/vans">&#x2190; <span>Back to all vans</span></Link>
            <div>
                <div className="data-van-section">
                    <img src="https://cdn.awsli.com.br/600x700/952/952032/produto/75057310/f7915f7956.jpg"/>
                    <div>
                        <h4>Lauring</h4>
                        <h2>Modest Explore</h2>
                        <h3>$60<span>/day</span></h3>
                    </div>
                </div>
                <nav>
                    <div>
                        <NavLink to="" end
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
                <Outlet />
            </div>
        </div>
    )
 
}