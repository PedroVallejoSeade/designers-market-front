import React from 'react'
import Button1 from '../common/Button1'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BuinessJobWorkingContent = () => {
    
    const transfer=()=>{
        axios.post('http://localhost:3737/', {
            "sender": "empresa",
            "contract": "my_token",
            "method": "transfer",
            "args": {
            "amount":275000,
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
                <div className="business-job-working-container">
                    <div className="business-job-working-column-1">
                        <div className="business-job-working-image-container">
                            <div className="business-job-working-image"></div>
                        </div>
                    </div>
                    <div className="business-job-working-column-2">
                        <p className="poppins-30">*Recuerda que debes pagar antes de poder descargar la imagen sin marca de agua en su resolución completa</p>
                        <div className="separator"></div>
                        <div className="separar">
                        <Link style={{ textDecoration: 'none'}} to='/business/job-done'>
                                <Button1 content= "Pedir entrega" ></Button1>
                          </Link>
                          
                          </div>

                          <div className="separar">
                        <Link style={{ textDecoration: 'none'}} to='/business/job-done'>
                                <Button1 content= "Comentarios" ></Button1>
                          </Link>
                          </div>

                        <div onClick={()=>transfer()}> 
                            <Link style={{ textDecoration: 'none'}} to='/business/job-done'>
                                <Button1 content= "Pagar" ></Button1>
                          </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuinessJobWorkingContent
