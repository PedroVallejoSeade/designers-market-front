import React from 'react'

const BusinessProfileComment = (props) => {
    const {comment} = props
    return (
        <div className="business-profile-comment-container">
            <div className="business-profile-comment-text-area">
                <p className="business-profile-comment">"{comment}"</p>
            </div>
        </div>
    )
}

export default BusinessProfileComment
