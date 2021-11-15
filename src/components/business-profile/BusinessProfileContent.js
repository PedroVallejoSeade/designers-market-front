import React from 'react'
import BuisinessCard from './BuisinessCard'

const BusinessProfileContent = () => {
    const obj = [
        {
            id: 1,
            atr1: "Hola",
            atr2: "adios"
        },
        {
            id: 2,
            atr1: "Hola2",
            atr2: "adios2"
        },
        {
            id: 3,
            atr1: "HHHH",
            atr2: "AAAAA"
        },
    ]

    return (
        <div className="content-card">
            <div className="buiness-profile-content-container">
                <div className="buiness-profile-content-column-1">
                    <div className="buiness-profile-content-column-1-row-1">
                        <p className="poppins-64">AVS Colombia SAS</p>
                    </div>
                    <div className="buiness-profile-content-column-1-row-2">
                        <div className="buiness-profile-picture-container">
                            <div className="buiness-profile-picture"></div>
                        </div>
                        <div className="buiness-profile-description-container">
                            <div className="buiness-profile-description">
                                <div className="buiness-profile-description-text-area" id="style-1">
                                    <p className="poppins-14">Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buiness-profile-content-column-1-row-3">
                        
                    </div>
                    <div className="buiness-profile-content-column-1-row-4">
                        
                    </div>
                </div>
                <div className="buiness-profile-content-column-2">
                    {obj.map((element) => (
                    <BuisinessCard
                        hola={element.atr1}
                        adios={element.atr2}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}

export default BusinessProfileContent
