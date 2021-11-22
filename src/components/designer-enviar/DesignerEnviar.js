import React from 'react'
import DesignerNavBar from '../common/DesignerNavBar'
import DesignerEnviarContent from './DesignerAplicarContent'

const DesignerEnviar = () => {
    return (
        <div className="designer-pages-container">
            <DesignerNavBar/>
            <DesignerEnviarContent/>
        </div>
    )
}

export default DesignerEnviar
