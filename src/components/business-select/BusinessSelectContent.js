import React from 'react'
import { Link } from 'react-router-dom'


const BusinessSelectContent = () => {
    return (
        <div className="content-card">
            <div className="designer-profile-content-container">
                <h3 className="designer-h3-center"> Has aceptado a un diseñador </h3>
            </div>
            <Link style={{ textDecoration: 'none'}} to='/business/contrato'>
                <div className="boton-cont">
                <p className="landing-page-card-button-in-title">Contrato</p>
                </div>
                </Link>
        </div>
    )
}

export default BusinessSelectContent
