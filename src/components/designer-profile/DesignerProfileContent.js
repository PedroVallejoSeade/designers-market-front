import React from 'react'

const DesignerProfileContent = () => {
    return (
        <div className="content-card">
            <div className="designer-profile-content-container">
                <div className="designer-profile-content-column-1">
                    <div className="designer-profile-content-column-1-row-1">
                        <p className="designer-poppins-64">Isabela Ortiz</p>
                        
                    </div>
                    <div>
                    <h2 className="designer-h3"> Proyectos destacados</h2>
                    </div>
                   
                        <div className="designer-profile-content-card">
                            <div className="designer-profile-picture"></div>
                        </div>
                        
                    <div className="buiness-profile-content-column-1-row-3">
                        <p className="poppins-36">Acceder al portafolio completo en: </p>
                    </div>
                    <div ><a href="https://www.behance.net/iortiz495f" style={{ textDecoration: 'none' }} ><h3 className="designer-h3-2">Behance</h3></a></div>
                   
                </div>

                <div className="designer-profile-content-column-2">
                    <div>
                    <h2 className="designer-h3-3"> Áreas de interés y especialización</h2>
                    </div>
                    <div className="designer-profile-description">
                        <div>
                            <p className="texto-profile-description">Me interesa el diseño gráfico, en especial la creación de afiches para branding. Soy muy buena utilizando la suite de Adobe. Me gusta además la edición de videos publicitatios. </p>
                        </div>
                    </div>
                    <div>
                    <h2 className="designer-h3-3"> Calificación</h2>
                    <div className="designer-profile-description-2">
                        <div>
                            <p className="texto-profile-description">Buena diseñadora, fue muy cumplida con los tiempos y receptiva a los cambios que le solicité. </p>
                        </div>
                    </div>
                   
                    <div className="designer-profile-description-2">
                        <div>
                            <p className="texto-profile-description">Tuvimos un contratiempo en el diseño porque no hubo comunicación clara de qué era lo que se quería, pero se logró resolver al final.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignerProfileContent
