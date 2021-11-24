import React from 'react'
import { Link } from 'react-router-dom'

const DesignerArchivosContent = () => {
    return (
        <div className="content-card">
            <div className="designer-calificacion-content-container">

                <p className="designer-poppins-titulo">Diseño de logo AVS</p>
                <div className="designer-calificacion-content-column-1">
                    <div className="designer-calificacion-picture">
                    </div>
                    <div className="designer-archivos-texto">
                    <div> <p >FECHA DE ENTREGA: 24/12/2021</p></div>
                    <div> <p >PAGO: 300,000</p></div>
                    <div> <p >DESCRIPCIÓN DEL PROYECTO: Diseño de logo</p></div>
                    </div>
                </div>
                <Link style={{ textDecoration: 'none'}} to='/designer/archivossubidos'>
                <div className="subir-button-verde">
                <p className="archivos-page-card-button-in-title">Subir archivos</p>
                </div>
                </Link>

                <div className="designer-archivos-texto-2">Fecha entrega PRIMER AVANCE: </div>
                <div className="designer-archivos-texto-3">12/12/2021 </div>
            </div>
           
        </div>
    )
}

export default DesignerArchivosContent
