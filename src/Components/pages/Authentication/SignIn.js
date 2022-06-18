import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../Context/AppContext";
import Authentication from "./Authentication";
import AuthFormImage from "../../Reusable/AuthFormImage";
// import {FaUserLock} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Popupmodel from "../../Reusable/Popupmodel";

const Signup = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const { handleChange ,formSubmit, validationErrors, } = Authentication();
  
  const signingInUser = appContext.value9;
  const popupActive = appContext.value21;

  return (
    <>

  {popupActive.status ? <Popupmodel />:'' }
    <div className="form-container " id="signin">
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
        <h3>Sign In</h3>
        <div className="form-input-wrap">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            className="form-input"
            value={signingInUser.email}
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
            value={signingInUser.password}
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        {validationErrors.passwordError !== "" ? (
          <span className="error-text">{validationErrors.passwordError}</span>
        ) : (
          ""
        )}
      
        <div className="form-input-wrap">
          <button className="btn btn-auth btn-signup pointer">Sign In</button>
        </div>
        <div className="form-alt-wrap text-center">
          <p>Don't have an account yet ?</p>
          <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signup;
