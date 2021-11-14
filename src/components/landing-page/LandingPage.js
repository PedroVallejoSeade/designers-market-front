import React from 'react'
import LandingPageCard from './LandingPageCard'
import LandingPageNavBar from './LandingPageNavBar'

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <LandingPageNavBar/>
            <LandingPageCard/>
        </div>
    )
}

export default LandingPage
