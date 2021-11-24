import React from 'react'
import { Link } from 'react-router-dom'


const DesignerOfertaDetalleContent = () => {
    return (
        <div className="content-card">
            <div className="designer-profile-content-container">
                <div className="designer-oferta-detalle-content-column-1">
                    <div className="designer-profile-content-column-1-row-1">
                        <p className="designer-poppins-64">Contrato</p> 
                    </div>
                    <div>
                    <h2 className="designer-h3"> Descripción</h2>
                    <div className="designer-contrato">
                        <div>
                            <p className="texto-oferta-detalle-description"> En Bogotá, Colombia, a la fecha 11 de Noviembre del 2021, entre la diseñadora Isabela Ortiz y el contratante AVS, se ha convenido en el siguiente contrato de trabajo, que de acuerdo a lo señalado en el Artículo 145 A y siguientes del Código del Trabajo, se firme un contrato por el trabajo de "Diseño de Logo". El pago convenido se hará en dos partes, una al iniciar el trabajo y una al finalizar. El contratante no podrá descargar el trabajo final sin marca de agua antes de haber realizado el pago. Se podrán hacer revisiones parciales del trabajo y solicitar al diseñador enviar nuevos avances. El pago será de 300.000 COP.  </p>
                        </div>
                        </div>
                    </div>

                <Link style={{ textDecoration: 'none'}} to='/designer/archivos'>
                <div className="boton-contrato">
                <p className="landing-page-card-button-in-title">Firmar</p>
                </div>
                </Link>
                               
                

                    
                </div>
            </div>
            
        </div>
    )
}

export default DesignerOfertaDetalleContent
