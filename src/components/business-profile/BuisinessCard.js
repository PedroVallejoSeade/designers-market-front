import React from 'react'

const BuisinessCard = (props) => {
    
    const {hola, adios} = props

    return (
        <div className = "HOLA">
            <p>{hola}</p>
            <p>{adios}</p>
        </div>
    )
}

export default BuisinessCard
