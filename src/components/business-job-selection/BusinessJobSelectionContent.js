import React from 'react'
import BusinessJobApplicantCard from './BusinessJobApplicantCard'

const BusinessJobSelectionContent = () => {
    return (
        <div className="content-card">
            <div className="business-job-selection-content-container">
                <div className="business-job-selection-content-row-1">
                    <p className="poppins-64">Aplicantes</p>
                </div>
                <div className="business-job-selection-content-row-2">
                    <svg className = "up-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </div>
                <div className="business-job-selection-content-row-3">
                    <BusinessJobApplicantCard></BusinessJobApplicantCard>
                </div>
                <div className="business-job-selection-content-row-4">
                    <svg className = "down-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </div>
            </div>
        </div>
    )
}

export default BusinessJobSelectionContent
