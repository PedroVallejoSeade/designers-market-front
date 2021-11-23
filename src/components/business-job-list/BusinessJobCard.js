import React from 'react'
import { Link } from 'react-router-dom'

const BusinessJobCard = (props) => {
    const {title, description} = props
    return (
        <div className = "business-job-card">
            <Link style={{ textDecoration: 'none'}} to='/business/1/job/1/selection'>
                <div className = "business-job-card-title">
                    <p className="poppins-30">{title}</p>
                </div>
            </Link>
            <div className = "business-job-card-description-container">
                <Link style={{ textDecoration: 'none'}} to='/business/job-working'>
                    <div className = "business-job-card-description" id="style-3">
                        <p className="poppins-14">{description}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BusinessJobCard
