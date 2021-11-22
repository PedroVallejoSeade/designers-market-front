import React from 'react'
import BusinessProfileJob from './BusinessProfileJob'
import BusinessProfileComment from './BusinessProfileComment'

const BusinessProfileContent = () => {
    const jobs = [
        {
            jobTitle: "Diseño de logo"
        },
        {
            jobTitle: "Diseño de publicidad"
        },
        {
            jobTitle: "Diseño afiche oficina"
        },
        {
            jobTitle: "Diseño mural"
        },
        {
            jobTitle: "Diseño animación mesa"
        },
        {
            jobTitle: "Diseño landing page"
        }
    ]

    const comments = [
        {
            comment: "Es una buena empresa, pagan a tiempo y son muy respetuosos"
        },
        {
            comment: "De las mejores empresas para las que he hecho un trabajo"
        },
        {
            comment: "Volveria a trabajar con ellos"
        },
        {
            comment: "La experiencia de trabajo con AVS es muy amena"
        },
        {
            comment: "Muy razonables con los tiempos de entrega"
        }
    ]
    
    return (
        <div className="content-card">
            <div className="buiness-profile-content-container">
                <div className="buiness-profile-content-column-1">
                    <div className="buiness-profile-content-column-1-row-1">
                        <p className="poppins-64">AVS Colombia SAS</p>
                    </div>
                    <div className="buiness-profile-content-column-1-row-2">
                        <div className="buiness-profile-picture-container">
                            <div className="buiness-profile-picture"></div>
                        </div>
                        <div className="buiness-profile-description-container">
                            <div className="buiness-profile-description">
                                <div className="buiness-profile-description-text-area" id="style-1">
                                    <p className="poppins-14">Son 33 años de experiencia que nos han dado visión y conocimiento para crear espacios con nuevas perspectivas. Compartimos nuestra esencia y trabajamos para cumplir los objetivos de nuestros clientes, logrando un equilibrio perfecto entre ideas y resultados.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buiness-profile-content-column-1-row-3">
                        <p className="poppins-36">Trabajos que solicita la empresa:</p>
                    </div>
                    <div className="buiness-profile-content-column-1-row-4">
                        <div className="buiness-profile-jobs-container" id="style-2">
                            {jobs.map((job) => (
                                <BusinessProfileJob
                                    jobDescription = {job.jobTitle}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="buiness-profile-content-column-2">
                    <div className="buiness-profile-num-des">
                        <p className="poppins-30">Numero de dieñadores contratados:</p>
                        <div className="buiness-profile-num-des-container">
                            <p className="poppins-36">57</p>
                        </div>
                    </div>
                    <div className="buiness-profile-rating">
                        <p className="poppins-30">Calificación:</p>
                        <svg className = "buiness-profile-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "buiness-profile-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "buiness-profile-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "buiness-profile-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <svg className = "buiness-profile-fifth-star" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    </div>
                    <div className="buiness-profile-comments">
                        <p className="poppins-30">Comentarios:</p>
                        <div className="buiness-profile-comments-conatiner" id="style-1">
                            {comments.map((element) =>(
                                <BusinessProfileComment
                                    comment ={element.comment}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessProfileContent
