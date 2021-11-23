import React from 'react'
import Button1 from '../common/Button1'
import Button2 from '../common/Button2'
import { Link } from 'react-router-dom'

const BusinessJobApplicantCard = (props) => {
    return (
        <div className="business-job-applicant-card">
            <div className="business-job-applicant-name">
                <p className ="poppins-36">{props.name}</p>
            </div>
            <div className="business-job-applicant-buttons">
                <Link style={{ textDecoration: 'none'}} to='/business/designer-profile'>
                    <div className="business-job-applicant-button-container">
                        <Button2 content ="Ver Perfil"/>
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none'}} to='/business/designer-profile'>
                    <div className="business-job-applicant-button-container">
                        <Button1 content ="Seleccionar"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BusinessJobApplicantCard
