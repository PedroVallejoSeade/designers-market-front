import React from 'react'
import { Link } from 'react-router-dom'

const LandingPageCard = () => {
    return (
        <div className="landing-page-card">
            <div className="landing-page-card-top">
                <div>
                    <p className="landing-page-card-title">Designer's Market</p>
                    <p className="landing-page-card-subtitle">contrataciones justas para diseñadores gráficos</p>
                </div>
                <div className="landing-page-card-button-container">
                    <div className="landing-page-card-button-container-disigners">
                        <p className="landing-page-card-button-title">Para diseñadores:</p>
                        <Link style={{ textDecoration: 'none' }} to='/disigner/profile'>
                            <div className="landing-page-card-button-disigners">
                                <p className="landing-page-card-button-in-title">Encuentra un trabajo</p>
                                <p className="landing-page-card-button-in-subtitle">freelance de diseño gráfico</p>
                            </div>
                        </Link>
                    </div>
                    <div className="landing-page-card-button-container-business">
                        <p className="landing-page-card-button-title">Para empresas:</p>
                        <Link style={{ textDecoration: 'none'}} to='/business/profile'>
                            <div className="landing-page-card-button-business">
                                <p className="landing-page-card-button-in-title">Publica un trabajo</p>
                                <p className="landing-page-card-button-in-subtitle">para encontrar un diseñador</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="landing-page-card-bottom">
                <p className="landing-page-contact-card-button-in-title">Contacto:</p>
                <p className="landing-page-contact-card-button-in-subtitle">designersmarket1@gmail.com​</p>
            </div>
        </div>
    )
}

export default LandingPageCard
