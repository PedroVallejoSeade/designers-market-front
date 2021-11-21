import React from 'react'
import Button1 from '../common/Button1'

const BusinessCreateJobContent = () => {
    return (
        <div className="content-card">
            <div className = "bussiness-create-job-container">
                <div className = "bussiness-create-job-content-row-1">
                    <p className="poppins-64">Crear oferta</p>
                </div>
                <div className = "bussiness-create-job-content-row-2">
                    <div className = "bussiness-create-job-content-row-2-column-1">
                        <div className = "bussiness-create-job-content-row-2-column-1-element">
                            <p className = "poppins-36">Tipo de Trabajo:</p>
                        </div>
                        <div className = "bussiness-create-job-content-row-2-column-1-element">
                            <p className = "poppins-36">Experiencia:</p>
                        </div>
                        <div className = "bussiness-create-job-content-row-2-column-1-element">
                            <p className = "poppins-36">Calificación:</p>
                        </div>
                        <div className = "bussiness-create-job-content-row-2-column-1-element">
                            <p className = "poppins-36">Descripción:</p>
                        </div>
                        <div className = "bussiness-create-job-content-row-2-column-1-element">
                            <p className = "poppins-36">Fecha de entrega:</p>
                        </div>
                        <div className = "bussiness-create-job-content-row-2-column-1-element">
                            <p className = "poppins-36">Pago:</p>
                        </div>
                    </div>
                    <div className = "bussiness-create-job-content-row-2-column-2">
                        <div className = "bussiness-create-job-content-row-2-column-2-element">
                            <div className = "bussiness-create-job-content-row-2-column-2-element-container">
                                <div className = "bussiness-create-job-content-text-area">
                                    <textarea className = "bussiness-create-job-content-text-area-content" placeholder="Escriba acá el tipo de trabajo ..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div className = "bussiness-create-job-content-row-2-column-2-element">
                            <div className = "bussiness-create-job-content-row-2-column-2-element-container">
                                <div className = "bussiness-create-job-content-text-area">
                                    <textarea className = "bussiness-create-job-content-text-area-content" placeholder="Escriba acá la experiencia que desea ..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div className = "bussiness-create-job-content-row-2-column-2-element">
                            <div className = "bussiness-create-job-content-row-2-column-2-element-container">
                                <div className = "bussiness-create-job-content-text-area">
                                    <textarea className = "bussiness-create-job-content-text-area-content" placeholder="Escriba acá el rango de calificacion que desea ..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div className = "bussiness-create-job-content-row-2-column-2-element">
                            <div className = "bussiness-create-job-content-row-2-column-2-element-container">
                                <div className = "bussiness-create-job-content-text-area">
                                    <textarea className = "bussiness-create-job-content-text-area-content" placeholder="Escriba acá la descripción del trabajo ..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div className = "bussiness-create-job-content-row-2-column-2-element">
                            <div className = "bussiness-create-job-content-row-2-column-2-element-container">
                                <div className = "bussiness-create-job-content-text-area">
                                    <textarea className = "bussiness-create-job-content-text-area-content" placeholder="DD/MM/AAAA"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className = "bussiness-create-job-content-row-2-column-2-element">
                            <div className = "bussiness-create-job-content-row-2-column-2-element-container">
                                <div className = "bussiness-create-job-content-text-area">
                                    <textarea className = "bussiness-create-job-content-text-area-content" placeholder="Escriba acá el monto de pago para el trabajo ..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "bussiness-create-job-content-row-3">
                    <Button1 content = "Crear"/>
                </div>
            </div>
        </div>
    )
}

export default BusinessCreateJobContent
