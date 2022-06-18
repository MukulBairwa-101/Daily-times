import React from 'react'
import { useNavigate } from 'react-router';


const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer-container">
            <div className="logo-wrapper">

            <span className="logo logo-footer  pointer"  onClick={()=>navigate('/')}>DailyTimes</span>            
            </div>
            <p className="white-text">Created by Mukul Kumar Bairwa</p>
        </div>
    )
}

export default Footer;
