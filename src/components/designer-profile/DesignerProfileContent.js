import React from 'react'
import DesignerProfileComment from './DesignerProfileComment'

const DesignerProfileContent = () => {
  
        
    
        const comments = [
            {
                comment: "Buena diseñadora, fue muy cumplida con los tiempos y receptiva a los cambios que le solicité."
            },
            {
                comment: "Tuvimos un contratiempo en el diseño porque no hubo comunicación clara de qué era lo que se quería, pero se logró resolver al final."
            },
            {
                comment: "Volvería a trabajar con ella"
            }
        ]
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
                        <p className="poppins-30-3">Acceder al portafolio completo en: </p>
                    </div>
                    <div ><a href="https://www.behance.net/iortiz495f" style={{ textDecoration: 'none' }} ><h3 className="designer-h3-2">Behance</h3></a></div>
                   
                </div>

                <div className="designer-profile-content-column-2">
                    <div>
                    <h2 className="designer-h3-3"> Áreas de interés y especialización</h2>
                    </div>
                    <div className="designer-profile-description">
                        <div>
                            <p className="texto-profile-description">Me interesa el diseño gráfico, en especial la creación de afiches para branding. Soy muy buena utilizando la suite de Adobe. </p>
                        </div>
                    </div>
                    <div>
                    <div className="buiness-profile-rating">
                        <p className="poppins-30-d">Calificación:</p>
                        <svg className = "buiness-profile-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "buiness-profile-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "buiness-profile-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "buiness-profile-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "buiness-profile-fifth-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    </div>
                    <div className="buiness-profile-comments">
                        <p className="poppins-30-d-1">Comentarios:</p>
                        <div className="designer-profile-comments-conatiner" id="style-2">
                            {comments.map((element) =>(
                                <DesignerProfileComment
                                    comment ={element.comment}
                                />
                            ))}
                        </div>
                    </div>
                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignerProfileContent
