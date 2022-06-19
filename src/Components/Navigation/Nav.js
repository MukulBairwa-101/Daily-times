import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router';
import {AppContext} from "../../Context/AppContext";
import {FaUserCircle} from "react-icons/fa";
const Nav = () => {
    const appContext = useContext(AppContext);
    const navigate = useNavigate();

    // const authRoute = appContext.value7;
    const setAuthRoute = appContext.value8;

    const isLoggedin = appContext.value15;
    const setIsloggedin = appContext.value16;

    const [dropdownlistActive,setDropdownListActive] =useState(false);
    const handleAuthRoute =(path)=>{
        // if(path === 'login' || path === 'signup'){
        //     setAuthRoute(true);
        // }
        // else setAuthRoute(false);

        navigate(`/${path}`);
        // console.log('auuth route',authRoute);
    }

    const handleRoute = (path) => {
        navigate(`/${path}`);
      };


    //   console.log(isLoggedin,'check');
    return (
        <nav>
            <div >
                <span className="logo pointer"  onClick={()=>navigate('/')}>DailyTimes</span>
                {/* <div> */}
                <ul>
                    <li onClick={()=>navigate('/articles')} className="pointer" >Top Articles</li>
                    {/* <li>Categories</li> */}
                </ul>
            {/* </div> */}
            </div>
            {
                isLoggedin.active ?
                    <div className="isLoggedin-post-ui">
                        <span>{isLoggedin.name}</span>
                        <FaUserCircle className="user-icon pointer" 
                            onClick={()=>setDropdownListActive(!dropdownlistActive)}           
                        /> 
                       
                    </div>
                    :
                <div className="auth-btns">
                <button className="btn btn-auth btn-login pointer" onClick={()=>handleAuthRoute('login')}>Login</button>
                <button className="btn btn-auth btn-signup pointer" onClick={()=>handleAuthRoute('signup')}>Signup</button>
            </div>
            }

            {dropdownlistActive 
            ?
            <ul className="dropdown-list">
            <li className="dropdown-item" onClick={() => {
                    handleAuthRoute("signup");
                }}>

            Signup
                </li>
                <li className="dropdown-item" onClick={() => {
                    handleRoute("login");
                    setIsloggedin({
                      name: "",
                      active: false,
                    });
                    setDropdownListActive(false);
                  }}>
               logout 
                </li>
            </ul>
            :''



        
        
        }

            
            
        </nav>
    )
}   

export default Nav;
