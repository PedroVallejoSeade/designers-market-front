import React from 'react'

const BusinessProfileJob = (props) => {
    const {jobDescription} = props
    return (
        <div className="business-profile-job-container">
            <div className="business-profile-job-text-area">
                <p className="poppins-14">{jobDescription}</p>
            </div>
        </div>
    )
}

export default BusinessProfileJob
