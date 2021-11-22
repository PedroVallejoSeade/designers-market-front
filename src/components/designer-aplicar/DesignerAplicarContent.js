import React from 'react'
import { Link } from 'react-router-dom'


const DesignerAplicarContent = () => {
    return (
        <div className="content-card">
            <div className="designer-profile-content-container">
                <h3 className="designer-h3-center"> ¡Aplicaste al trabajo! Ahora debes esperar a la respuesta del contratante. </h3>
                <Link style={{ textDecoration: 'none'}} to='/designer/oferta'>
                <div className="oferta-detalle-button-verde-2">
                <p className="landing-page-card-button-in-title">Aceptar</p>
                </div>
                </Link>
                </div>

               
        </div>
    )
}

export default DesignerAplicarContent
