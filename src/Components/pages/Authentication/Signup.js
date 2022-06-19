import React, { useContext, useEffect ,useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import Authentication from "./Authentication";
import AuthFormImage from "../../Reusable/AuthFormImage";
// import {FaUserLock} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Popupmodel from "../../Reusable/Popupmodel";
import {BiShow,BiHide} from "react-icons/bi";


const Signup = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const { handleChange ,formSubmit, validationErrors,handleImage } = Authentication();
  
  const signingUpUser = appContext.value11;
  const imageUpload = appContext.value19;
  const popupActive = appContext.value21;

  const [togglePassword,setTogglePassword]  = useState(false);



  const togglePasswordVisibility =(type)=>{
    let fieldId = document.getElementById(type);

    if(fieldId.type === 'password'){
      fieldId.type = 'text';
      setTogglePassword(true);
    }
    else{ 
      fieldId.type = 'password'
      setTogglePassword(false);
    }
    





    // let pass = document.getElementById("password");
    // let confirm =document.getElementById("confirmpassword");



    // if(type === pass.type){
    //   setTogglePasswordField({
    //     passwordField:true,
    //     confirmPasswordField:false
    //   })
    // }
    // if(type === confirm.type){
    //   setTogglePasswordField({
    //     passwordField:false,
    //     confirmPasswordField:true
    //   })
    // }
    // const setVisibility =()=>{
    //   // alert('hhoooo')

    //   togglePasswordField.passwordField ?  pass.type = 'text' :  pass.type = 'password'

    //   togglePasswordField.confirmPasswordField ?  confirm.type = 'text' : confirm.type = 'password'


    //   // if(togglePasswordField.passwordField){
    //   //   pass.type === 'text'
    //   // }
    //   // else{
    //   //   pass.type === 'password'
    //   // }
  
    //   // if(togglePasswordField.confirmPasswordField){
    //   //   confirm.type === 'text'
    //   // }
    //   // else{
    //   //   confirm.type === 'password'
    //   // }
    // }

    // setVisibility();
   

  
    

  }

  // console.log(popupActive);



  return (
    <>
    {popupActive.status ? <Popupmodel />:'' }
    {/* <Popupmodel /> */}
    <div className="form-container " id="signup">
      <div className="form-wrapper ">
        <AuthFormImage />
      </div>
      <form className="form-control" onSubmit={(e)=>formSubmit(e)}>
        <span
          className="logo pointer auth-logo text-center"
          onClick={() => navigate("/")}
        >
          DailyTimes
        </span>
        <h3>Sign Up</h3>
        {/* <div>
          <img  src={imageUpload} alt="profile-image" className="profile-image"  />
          <input
              type="file"
              name="image-upload"
              id="input-image"
              accept="image/*"
              onChange={handleImage}
              required="true"
            />
        </div> */}
        
        <div className="form-input-wrap">
          <label>Username</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Username"
            className="form-input"
            value={signingUpUser.name}
            onChange={handleChange}
            autoComplete="on"
            // pattern="[a-Za-z]"
          />
        </div>
        {validationErrors.nameError !== "" ? (
          <span className="error-text">{validationErrors.nameError}</span>
        ) : (
          ""
        )}
        <div className="form-input-wrap">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            className="form-input"
            value={signingUpUser.email}
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        {validationErrors.emailError !== "" ? (
          <span className="error-text">{validationErrors.emailError}</span>
        ) : (
          ""
        )}
        <div className="form-input-wrap">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-input"
            value={signingUpUser.password}
            onChange={handleChange}
            autoComplete="on"
            id="password"
          />
          {
            !togglePassword ? <BiShow onClick={()=>togglePasswordVisibility('password')} className="eyeIcon" />: <BiHide onClick={()=>togglePasswordVisibility(('password'))} className="eyeIcon" />
          }
          
        </div>
        {validationErrors.passwordError !== "" ? (
          <span className="error-text">{validationErrors.passwordError}</span>
        ) : (
          ""
        )}
        <div className="form-input-wrap">
          <label>Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            placeholder="Re-enter password to confirm"
            className="form-input"
            value={signingUpUser.cpassword}
            onChange={handleChange}
            autoComplete="on"
            id="confirmpassword"
          />
          {
            !togglePassword ? <BiShow  onClick={()=>togglePasswordVisibility('confirmpassword')} className="eyeIcon" />: <BiHide  onClick={()=>togglePasswordVisibility('confirmpassword')}  className="eyeIcon"/>
          }
          
        </div>
        {validationErrors.cpasswordError !== "" ? (
          <span className="error-text">{validationErrors.cpasswordError}</span>
        ) : (
          ""
        )}
        <div className="form-input-wrap">
          <button className="btn btn-auth btn-signup pointer">Sign Up</button>
        </div>
        <div className="form-alt-wrap text-center">
          <p>Already have an account ?</p>
          <a href="/login">Sign in</a>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signup;
