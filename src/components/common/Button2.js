import React from 'react'

const Button2 = (props) => {
    const {content} = props;
    return (
        <div className="button2">
            <div className="button-1-content-container">
                <props className="poppins-36">{content}</props>
            </div>
        </div>
    )
}

export default Button2