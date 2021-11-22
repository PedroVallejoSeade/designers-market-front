import React from 'react'
import { Link } from 'react-router-dom'


const DesignerOfertaDetalleContent = () => {
    return (
        <div className="content-card">
            <div className="designer-profile-content-container">
                <div className="designer-oferta-detalle-content-column-1">
                    <div className="designer-profile-content-column-1-row-1">
                        <p className="designer-poppins-64">Diseño de logo</p> 
                    </div>
                    <div>
                    <h2 className="designer-h3"> Descripción</h2>
                    <div className="designer-oferta-detalle-description">
                        <div>
                            <p className="texto-oferta-detalle-description"> Como pequeña empresa que busca crecer, estamos necesitando un nuevo logo que se alinee con las espectativas de nuestros futuros clientes. Buscamos un logo innovador, alegre pero también minimalista. </p>
                        </div>
                    </div>
                    <h2 className="designer-h3"> Requisitos</h2>

                    <div className="designer-oferta-detalle-description">
                        <div>
                            <p className="texto-oferta-detalle-description"> Buscamos un diseñador puntual, comprometido con los valores de la empresa. Abierto a hacer cambios dependiendo de nuestra crítica. Logo debe ser con los colores de la empresa: rojo y azul. </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="designer-oferta-detalle-content-column-2">
                <h2 className="designer-h3"> Pago</h2>
                    <div className="designer-oferta-detalle-description">
                        <div>
                            <p className="texto-oferta-detalle-description"> 1'800,000. </p>
                        </div>
                        <div>
                            <p className="texto-oferta-detalle-description"> Se dividirá el pago en 2: un pago inicial para empezar el proyecto y un pago al finalizar el trabajo. </p>
                        </div>
                    </div>
                    <h2 className="designer-h3"> Acerca de nosotros</h2>
                    <div className="designer-oferta-detalle-description">
                        <div>
                            <p className="texto-oferta-detalle-description"> Somos una empresa motivada por sus clientes. Nos encanta servirles. Tenemos una dinámica de trabajo muy amigable pero somos a la vez exigentes con la calidad de lo que se produce. </p>
                        </div>
                        
                    </div>
                </div>
                <div className="designer-oferta-detalle-content-column-3">
                <h2 className="designer-h3-right-1"> 03-02-22</h2>
                <h2 className="designer-h3-right-2"> 03-04-22</h2>

                <Link style={{ textDecoration: 'none'}} to='/designer/aplicar'>
                <div className="oferta-detalle-button-verde">
                <p className="landing-page-card-button-in-title">Aplicar</p>
                </div>
                </Link>
                               
                

                    
                </div>
            </div>
            
        </div>
    )
}

export default DesignerOfertaDetalleContent
