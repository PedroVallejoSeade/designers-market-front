import React from 'react'
import Button1 from '../common/Button1'
import { Link } from 'react-router-dom'

const BuinessJobDoneContent = () => {

    return (
        <div className="content-card">
            <div className="business-job-selection-content-container">
                <div className="business-job-working-container">
                    <div className="business-job-working-column-1">
                        <div className="business-job-working-image-container">
                            <div className="business-job-working-image" id = "imagen"></div>
                        </div>
                        <div className="separator"></div>
                        <Button1 content= "Descargar" ></Button1>
                    </div>
                    <div className="business-job-working-column-2">
                        <p className="poppins-30">Por favor califica tu experiencia con el diseñador</p>
                        <div className="separator"></div>
                        <div> 
                            <Link style={{ textDecoration: 'none'}} to='/business/calification'>
                                <Button1 content= "Calificar" ></Button1>
                          </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuinessJobDoneContent
