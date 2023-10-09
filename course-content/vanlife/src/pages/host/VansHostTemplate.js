import React from "react"
import { useParams } from "react-router-dom"

export default function VansHostTemplate() {

    const { id } = useParams()

    return (
        <h1>template goes here {id}</h1>
    )
 
}