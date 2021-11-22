import React from 'react'
import BusinessNavBar from '../common/BusinessNavBar'
import BusinessJobListContent from './BusinessJobListContent'

const BusinessJobList = () => {
    return (
        <div className="business-pages-container">
            <BusinessNavBar/>
            <BusinessJobListContent/>
        </div>
    )
}

export default BusinessJobList
