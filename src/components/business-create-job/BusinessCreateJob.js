import React from 'react'
import BusinessNavBar from '../common/BusinessNavBar'
import BusinessCreateJobContent from './BusinessCreateJobContent'

const BusinessCreateJob = () => {
    return (
        <div className="business-pages-container">
            <BusinessNavBar/>
            <BusinessCreateJobContent/>        
        </div>
    )
}

export default BusinessCreateJob
