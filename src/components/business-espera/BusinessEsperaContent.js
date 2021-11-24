import React from 'react'
import { Link } from 'react-router-dom'


const BusinessEsperaContent = () => {
    return (
        <div className="content-card">
            <div className="designer-profile-content-container">
                <h3 className="designer-h3-center"> Has firmado exitosamente el contrato. Ahora debes esperar que el diseñador firme. </h3>
            </div>
            <Link style={{ textDecoration: 'none'}} to='/business/job-working'>
                <div className="botonesp">
                <p className="landing-page-card-button-in-title">Aceptar</p>
                </div>
                </Link>
        </div>
    )
}

export default BusinessEsperaContent
