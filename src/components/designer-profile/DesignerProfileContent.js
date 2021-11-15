import React from 'react'

const DesignerProfileContent = () => {
    return (
        <div className="content-card">
            <div className="designer-profile-content-container">
                <div className="designer-profile-content-column-1">
                    <div className="designer-profile-content-column-1-row-1">
                        <p className="designer-poppins-64">Elisa Arroyo</p>
                        
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
                <div className="buiness-profile-content-column-2">

                </div>
            </div>
        </div>
    )
}

export default DesignerProfileContent
