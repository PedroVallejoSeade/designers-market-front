import React from 'react'

const Button1 = (props) => {
    const {content} = props;
    return (
        <div className="button1">
            <div className="button-1-content-container">
                <props className="poppins-36">{content}</props>
            </div>
        </div>
    )
}

export default Button1