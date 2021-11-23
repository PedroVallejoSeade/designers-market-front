import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DesignerArchivosSubidosContent = () => {
    const aceptar=()=>{
        axios.post('http://localhost:3737/', {
            "sender": "empresa",
            "contract": "my_token",
            "method": "aceptarD"
          })
          .then(response => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="content-card">
            <div className="designer-calificacion-content-container">

                <p className="designer-poppins-titulo">Diseño de logo AVS</p>
                <div className="designer-calificacion-content-column-1">
                    <div className="designer-calificacion-picture">
                    </div>
                    <div className="designer-archivos-texto">
                    <div> <p >FECHA DE ENTREGA: 24/12/2021</p></div>
                    <div> <p >PAGO: 1'800,000</p></div>
                    <div> <p >DESCRIPCIÓN DEL PROYECTO: Diseño de logo</p></div>
                    </div>
                </div>
                <Link style={{ textDecoration: 'none'}} to='/designer/archivossubidos'>
                <div className="subir-button-verde">
                <p className="archivos-page-card-button-in-title">Subir archivos</p>
                </div>
                </Link>
                <p>*Archivo Logo Revisión.jpge</p>
                

                <div className="designer-archivos-texto-4">Fecha entrega PRIMER AVANCE: </div>
                <div className="designer-archivos-texto-5">12/12/2021 </div>
                <Link style={{ textDecoration: 'none'}} to='/designer/archivosenviar'>
                <div className="subir-button-verde-2" onClick={()=>aceptar()}>
                <p className="archivos-page-card-button-in-title">Enviar archivos</p>
                </div>
                </Link>
            </div>
           
        </div>
    )
}

export default DesignerArchivosSubidosContent
