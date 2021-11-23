import React from 'react'

const DesignerOfertaCard = (props) => {
    const {title, description} = props
    return (
        <div className = "designer-job-card">
            <div className = "designer-job-card-title">
                <p className="poppins-30">{title}</p>
            </div>
            <div className = "designer-job-card-description-container">
                <div className = "designer-job-card-description" id="style-3">
                    <p className="poppins-14">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default DesignerOfertaCard
