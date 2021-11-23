import React from 'react'
import BusinessJobApplicantCard from './BusinessJobApplicantCard'
import axios from 'axios'

const BusinessJobSelectionContent = () => {
    const recarga=()=>{
        axios.post('http://localhost:3737/', {
            "sender": "empresa",
            "contract": "my_token",
            "method": "recarga",
            "args": {
            "amount":100000
            }
          })
          .then(response => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const transfer=()=>{
        axios.post('http://localhost:3737/', {
            "sender": "empresa",
            "contract": "my_token",
            "method": "transfer",
            "args": {
            "amount":100000,
            "receiver":"disenador"
            }
          })
          .then(response => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="content-card">
            <div className="business-job-selection-content-container">
                <div className="business-job-selection-content-row-1">
                    <p className="poppins-64">Aplicantes</p>
                </div>
                <div className="business-job-selection-content-row-2">
                    <svg onClick={()=>recarga()} className = "up-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </div>
                <div className="business-job-selection-content-row-3">
                    <BusinessJobApplicantCard></BusinessJobApplicantCard>
                </div>
                <div className="business-job-selection-content-row-4">
                    <svg onClick={()=>transfer()} className = "down-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </div>
            </div>
        </div>
    )
}

export default BusinessJobSelectionContent
