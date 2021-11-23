import React from 'react'

const BusinessCalificacionContent = () => {
    return (
        <div className="content-card">
            <div className="designer-calificacion-content-container">
               
                <p className="designer-poppins-titulo">Califica al diseñador</p>
                <div className="designer-calificacion-content-column-1">
                    <div className="designer-calificacion-picture" id ="imagen2">      
                    </div>
                    <div><h3 className="h3-calificacion">Isabela Ortiz</h3></div>
                    <svg className = "designer-calificacion-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "designer-calificacion-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "designer-calificacion-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "designer-calificacion-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "designer-calificacion-fifth-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    
                    <div><h3 className="h3-calificacion-2">¿Tienes algún comentario sobre tu experiencia?</h3></div>
                    <div className="calificacion-texto">
                    <textarea className = "designer-calificacion-content-text-area-content" placeholder="Escriba acá el comentario ..."></textarea>

                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default BusinessCalificacionContent
