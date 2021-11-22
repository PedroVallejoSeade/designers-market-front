import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import Cartera from './Cartera'
import {useState} from 'react'

const BusinessNavBar = () => {
    const [buttonPopup, setButtonPopup] = useState(false)

    const money = 10000000
    
    return (
        <div className="business-navbar">
            <div className="business-navbar-logo-container">
                <Link style={{ textDecoration: 'none'}} to='/'>
                    <Logo/>
                </Link>
            </div>
            <div className="business-navbar-icons-container">
                <Link style={{ textDecoration: 'none'}} to='/business/createOffer'>
                    <svg className= "icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </Link>
                <svg className= "icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M2.001 9.352c0 1.873.849 2.943 1.683 3.943.031 1 .085 1.668-.333 3.183 1.748-.558 2.038-.778 3.008-1.374 1 .244 1.474.381 2.611.491-.094.708-.081 1.275.055 2.023-.752-.06-1.528-.178-2.33-.374-1.397.857-4.481 1.725-6.649 2.115.811-1.595 1.708-3.785 1.661-5.312-1.09-1.305-1.705-2.984-1.705-4.695-.001-4.826 4.718-8.352 9.999-8.352 5.237 0 9.977 3.484 9.998 8.318-.644-.175-1.322-.277-2.021-.314-.229-3.34-3.713-6.004-7.977-6.004-4.411 0-8 2.85-8 6.352zm20.883 10.169c-.029 1.001.558 2.435 1.088 3.479-1.419-.258-3.438-.824-4.352-1.385-.772.188-1.514.274-2.213.274-3.865 0-6.498-2.643-6.498-5.442 0-3.174 3.11-5.467 6.546-5.467 3.457 0 6.546 2.309 6.546 5.467 0 1.12-.403 2.221-1.117 3.074zm-7.563-3.021c0-.453-.368-.82-.82-.82s-.82.367-.82.82.368.82.82.82.82-.367.82-.82zm3 0c0-.453-.368-.82-.82-.82s-.82.367-.82.82.368.82.82.82.82-.367.82-.82zm3 0c0-.453-.368-.82-.82-.82s-.82.367-.82.82.368.82.82.82.82-.367.82-.82z"/></svg>
                <Link style={{ textDecoration: 'none'}} to='/business/jobs'>
                    <svg className= "icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"/></svg>
                </Link>
                <Cartera trigger ={buttonPopup} money = {money}></Cartera>
                <svg onClick = {()=>setButtonPopup(!buttonPopup)} className= "icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M4 8v12h20v-12h-20zm10 10c-2.209 0-4-1.792-4-4s1.791-4 4-4 4 1.792 4 4-1.791 4-4 4zm.2-2.021v.421h-.4v-.399c-.413-.007-.843-.105-1.2-.291l.183-.657c.383.148.892.306 1.289.216.46-.104.555-.577.047-.805-.373-.172-1.512-.322-1.512-1.297 0-.546.415-1.034 1.193-1.141v-.426h.4v.407c.289.008.614.058.978.168l-.146.659c-.307-.107-.646-.206-.977-.185-.596.035-.649.551-.232.767.684.321 1.577.561 1.577 1.418 0 .687-.537 1.053-1.2 1.145zm7.8-8.979h-19v11h-1v-12h20v1zm-2-2h-19v11h-1v-12h20v1z"/></svg>
                <Link style={{ textDecoration: 'none'}} to='/business/profile'>
                    <svg className= "icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/></svg>
                </Link>
                <svg className= "icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z"/></svg>
            </div>
        </div>
    )
}

export default BusinessNavBar
