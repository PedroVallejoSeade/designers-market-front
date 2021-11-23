import React from 'react'
import BusinessJobApplicantCard from './BusinessJobApplicantCard'
import axios from 'axios'
import Button1 from '../common/Button1'
import Button2 from '../common/Button2'
import { Link } from 'react-router-dom'

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

    return (
        <div className="content-card">
            <div className="business-job-selection-content-container">
                <div className="business-job-selection-content-row-1">
                    <p className="poppins-64">Aplicantes</p>
                </div>
                <div className="business-job-selection-content-row-2">
                    <svg className = "up-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </div>
                <div className="business-job-selection-content-row-3">
                    <div className="business-job-applicant-card">
                      <div className="business-job-applicant-name">
                          <p className ="poppins-36">Isabela Ortiz</p>
                      </div>
                      <div className="business-job-applicant-buttons">
                          <Link style={{ textDecoration: 'none'}} to='/business/designer-profile'>
                                <div className="business-job-applicant-button-container">
                                    <Button2 content ="Ver Perfil"/>
                                </div>
                          </Link>
                          <Link style={{ textDecoration: 'none'}} to='/business/designer-selected'>
                                <div className="business-job-applicant-button-container" onClick={()=>recarga()}>
                                    <Button1 content ="Seleccionar"/>
                                </div>
                          </Link>
                      </div>
                  </div>
                    <BusinessJobApplicantCard name= "Emma Ocampo"></BusinessJobApplicantCard>
                    <BusinessJobApplicantCard name= "Martin Varon"></BusinessJobApplicantCard>
                    <BusinessJobApplicantCard name= "Jacqueline Canal"></BusinessJobApplicantCard>
                </div>
                <div className="business-job-selection-content-row-4">
                    <svg className = "down-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </div>
            </div>
        </div>
    )
}

export default BusinessJobSelectionContent
