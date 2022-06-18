import React,{useContext,useEffect} from 'react'
import { AppContext } from '../../Context/AppContext';
import {useNavigate} from "react-router-dom";

import Swal from 'sweetalert2'

const Popupmodel = () => {
    const navigate = useNavigate();
    const appContext = useContext(AppContext);
    const popupActive = appContext.value21;
    const setPopupActive = appContext.value22;
    const isLoggedin = appContext.value15;

    useEffect(()=>{
     setTimeout(()=>{

        setPopupActive({
            name: '',
            status:false
        })
        if(popupActive.popupActivePath === 'signup'){
            navigate("/login");
         }
        if(popupActive.popupActivePath === 'login'){
            if(isLoggedin.active){
                navigate("/");

            }
        }
      
     
        },3000)
     })   


     const setSweetAlert =()=>{
        if(popupActive.popupActivePath === 'signup'){
            if(popupActive.name){
                Swal.fire({
                    title: 'Success!',
                    text:  `${popupActive.name} you are registered succesfully`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                    
                  })

            }
            else {
                Swal.fire({
                    title: 'error!',
                    text:  'You are Already Registered Please login',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                    
                  })
            }
        }
        else if( popupActive.popupActivePath === 'login'){
            if(popupActive.name){
                Swal.fire({
                    title: 'Success!',
                    text:`Welcome back ${popupActive.name} `,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })

            }
            else {
                Swal.fire({
                    title: 'error!',
                    text:'Login details invalid',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            }
        }
     }
     setSweetAlert();


    

    return (
        <div>
            {/* {
                popupActive.popupActivePath === 'signup' ? 
                <h1>{popupActive.name  ? `${popupActive.name} you are registered succesfully`  : 'You are Already Registered Please login' }</h1>
                : popupActive.popupActivePath === 'login' ?
                <h1>{popupActive.name  ? `Welcome back ${popupActive.name} `  : 'Login details invalid' }</h1>
                :''
            } */}
        </div>
    )
}

export default Popupmodel;
