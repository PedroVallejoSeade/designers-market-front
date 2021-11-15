import React from 'react'
import BusinessProfileJob from './BusinessProfileJob'

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

                </div>
            </div>
        </div>
    )
}

export default BusinessProfileContent
