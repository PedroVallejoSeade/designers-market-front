import React from 'react'

const Cartera = (props) => {
    return (props.trigger)?(
        <div className="cartera">
            <p className="poppins-36"> $ {props.money}</p>
        </div>
    ):""
}

export default Cartera
