import React from 'react'
import DesignerNavBar from '../common/DesignerNavBar'
import DesignerProfileContent from './DesignerProfileContent'

const DesignerProfile = () => {
    return (
        <div className="designer-pages-container">
            <DesignerNavBar/>
            <DesignerProfileContent/>
        </div>
    )
}

export default DesignerProfile
