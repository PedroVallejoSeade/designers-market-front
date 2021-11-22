import React from 'react'

const BusinessJobCard = (props) => {
    const {title, description} = props
    return (
        <div className = "business-job-card">
            <div className = "business-job-card-title">
                <p className="poppins-30">{title}</p>
            </div>
            <div className = "business-job-card-description-container">
                <div className = "business-job-card-description" id="style-3">
                    <p className="poppins-14">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessJobCard
