import React from 'react'
import { useNavigate } from 'react-router';
const Nav = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <div >
                <span className="logo pointer"  onClick={()=>navigate('/')}>DailyTimes</span>
                <div>
                <ul>
                    <li>Top</li>
                    <li>Categories</li>
                </ul>
            </div>
            </div>
            
            
        </nav>
    )
}   

export default Nav;
