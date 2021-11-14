import React from 'react'
import BusinessNavBar from '../common/BusinessNavBar'
import BusinessProfileContent from './BusinessProfileContent'

const BusinessProfile = () => {
    return (
        <div className="business-pages-container">
            <BusinessNavBar/>
            <BusinessProfileContent/>
        </div>
    )
}

export default BusinessProfile
