import React from 'react'
import Logo from '../common/Logo'
import { Link } from 'react-router-dom'

const LandingPageNavBar = () => {
    return (
        <div className="landing-page-navbar">
            <div className="landing-page-navbar-logo-container">
                <Link style={{ textDecoration: 'none'}} to='/'>
                    <Logo/>
                </Link>
            </div>
        </div>
    )
}

export default LandingPageNavBar
