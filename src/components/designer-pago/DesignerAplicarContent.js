import React from 'react'
import { Link } from 'react-router-dom'


const DesignerPagoContent = () => {
    return (
        <div className="content-card">
            <div className="designer-profile-content-container">
                <h3 className="designer-h3-center-2"> ¡Recibiste el pago! Revisa el monto en tu cartera. </h3>
                <Link style={{ textDecoration: 'none'}} to='/designer/calificacion'>
                <div className="pago-detalle-button-verde-2">
                <p className="designer-pago-card-button-in-title">Calificar contratante</p>
                </div>
                </Link>
                </div>

               
        </div>
    )
}

export default DesignerPagoContent
