import React from 'react'
import BusinessJobCard from './BusinessJobCard'

const BusinessJobListContent = () => {
    const jobs = [
        {
            title: "Diseño de logo",
            description: "Como pequeña empresa que busca crecer, estamos necesitando un nuevo logo que se alinee con las espectativas de nuestros futuros clientes. Buscamos un logo innovador, alegre pero también minimalista"
        },
        {
            title: "Diseño de publicidad",
            description: "Estamo en busqueda de un diseñador que nos ayude con el proceso creativo para un anuncio de publicidad el cual se planea mostrar en la web"
        },
        {
            title: "Diseño afiche oficina",
            description: "Queremos tener un afiche llamativo y amigable con el ambiente de nuestra empresa para ubicar en nuestra oficina. Se busca un diseñador que nos ayude con el proceso de creación de este."
        },
        {
            title: "Diseño mural",
            description: "Tenemos un muro de 100x100 m en nuestra fabrica. Estamos en busqueda de un diseñador gráfico para diseañar un mural creativo que refleje la estetica de la empresa."
        },
        {
            title: "Diseño animación mesa",
            description: "Estamos promoviendo una nueva mesa. Para nuestra pagina web deseamos tener una animación en 3D de dicha mesa que sea llamativa"
        },
        {
            title: "Diseño landing page",
            description: "Estamos renovando nuestra pagina web y para esto estamos en busquda de un diseñador que nos ayude a crear nuestra nueva landing page."
        },
    ]
    
    return (
        <div className="content-card">
            <div className="business-job-list-content-container">
                <div className="business-job-list-content-row-1">
                    <p className="poppins-64">Mis Ofertas</p>
                </div>
                <div className="business-job-list-content-row-2">
                    <div className="business-job-list-content-row-2-column-1">
                        <svg className = "left-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                    </div>
                    <div className="business-job-list-content-row-2-column-2">
                        {jobs.map((element) =>(
                            <BusinessJobCard
                                title ={element.title} description ={element.description}
                            />
                        ))}
                    </div>
                    <div className="business-job-list-content-row-2-column-3">
                        <svg className = "right-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessJobListContent
