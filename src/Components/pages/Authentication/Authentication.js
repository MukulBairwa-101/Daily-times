import React, { useState, useContext } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
// import bcrypt from "bcryptjs";

const Authentication = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const signingInUser = appContext.value9;
  const setSigningInUser = appContext.value10;
  const signingUpUser = appContext.value11;
  const setSigningUpUser = appContext.value12;

  const signedUpUsers = appContext.value13;
  // const setSignedUpUsers = appContext.value14;

  const setIsloggedin = appContext.value16;
  const imageUpload = appContext.value19;
  const setImageUpload = appContext.value20;
  const popupActive = appContext.value21;
  const setPopupActive = appContext.value22;

  const [validationErrors, setValidationErrors] = useState({});

  const getUniqueId = () => {
    const uId = uuid().slice(0, 4);
    return uId;
  };

  // const getHashPassword = (plainPassword) => {
  //   const salt = bcrypt.genSalt(10);
  //   let encrypted = bcrypt.hash(plainPassword,salt); 
  //   return encrypted;
  // }

  const handleChange = (e) => {
    if (window.location.pathname === "/signup") {
      const { name, value } = e.target;
      setSigningUpUser({ ...signingUpUser, [name]: value });
    }
    if (window.location.pathname === "/login") {
      const { name, value } = e.target;
      setSigningInUser({ ...signingInUser, [name]: value });  
    }
    // console.log(signingInUser);
  };


  const handleImage = (e) => {
    const fileRead = new FileReader();
    fileRead.onload = () => {
      if (fileRead.readyState === 2) setImageUpload(fileRead.result);
  
    };
    fileRead.readAsDataURL(e.target.files[0]);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setValidationErrors(validate());
  };

  const validate = () => {
    let validationError = {};

    const checkFields = () => {
      // for signup credentials check
      if (window.location.pathname === "/signup") {


        if (signingUpUser.name.length === 0) {
          validationError.nameError = "Username Required";
        } else if (signingUpUser.name.length < 3)
          validationError.nameError =
            "Username should be at least 3 characters";
        else if (!signingUpUser.email) {
          validationError.emailError = "email Required";
        } else if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            signingUpUser.email
          )
        ) {
          validationError.emailError = "Email is not valid";
        } else if (!signingUpUser.password) {
          validationError.passwordError = "Password Required";
        } else if (signingUpUser.password.length < 2)
          validationError.passwordError =
            "Password must be at least 8 characters";
        else if (!signingUpUser.cpassword) {
          validationError.cpasswordError = "reenter password to proceed";
        } else if (signingUpUser.password !== signingUpUser.cpassword)
          validationError.cpasswordError = "Password not match";
        else {
          signingUpUser.id = getUniqueId();
          signingUpUser.profileImage = imageUpload;
          // let encyptedPassword=getHashPassword(signingUpUser.password);
          // setSigningInUser.password = encyptedPassword;

          // localStorage.setItem("SIGNED_UP_USERS", JSON.stringify([...signedUpUsers,signingUpUser]));

          if (!localStorage.getItem("AUTHENTICATED_USERS")) {
            // alert("Authentication key added");
            signedUpUsers.push(signingUpUser);
            localStorage.setItem(
              "AUTHENTICATED_USERS",
              JSON.stringify(signedUpUsers)
            );
            setPopupActive(
              {
                name:signingUpUser.name,
                status:true,
                popupActivePath:'signup'
              }
            )
            // setSigningUpUser(
            //   {
            //     name: "",
            //     email: "",
            //     password: "",
            //     cpassword: "",
            //     id: 0,
            //     profileImage:'',
            
            // })

          } else {
            //   alert("Authentication key already present proceed further");
            
            let getData = JSON.parse(
              localStorage.getItem("AUTHENTICATED_USERS")
            );

            let temp = getData.find(
              (item) => item.email === signingUpUser.email
            );
            if (temp) {
              // alert("already Registered ");
              setPopupActive(
                {
                  name:'',
                  status:true,
                  popupActivePath:'signup'

                }
              )
            } else {
              signedUpUsers.push(signingUpUser);
              localStorage.setItem(
                "AUTHENTICATED_USERS",
                JSON.stringify(signedUpUsers)
              );
              setPopupActive(
                {
                  name:signingUpUser.name,
                  status:true,
                  popupActivePath:'signup'
                }
              )
            }
            setSigningUpUser(
              {
                name: "",
                email: "",
                password: "",
                cpassword: "",
                id: 0,
                profileImage:'',
            
            })
          }
        }
      }

      // for login credentials check

      if (window.location.pathname === "/login") {

        if (!signingInUser.email) {
          validationError.emailError = "email Required";
        } else if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            signingInUser.email
          )
        )
        {

            validationError.emailError = "Email is not valid";
        }
        else if (!signingInUser.password) {
          validationError.passwordError = "Password Required";
        } else if (signingInUser.password.length < 2){

            validationError.passwordError =
              "Password must be at least 8 characters";
        }
        else {
          let getData = JSON.parse(localStorage.getItem("AUTHENTICATED_USERS"));
          console.log(getData);
          let temp = getData.find(
            (item) =>
              item.email === signingInUser.email &&
              item.password === signingInUser.password
          );
          if (temp) {
            // alert("succesful login");
            setIsloggedin({
              name: temp.name,
              active: true,
              profileImage:imageUpload
            });
            setPopupActive(
              {
                name:temp.name,
                status:true,
                popupActivePath:'login'
              }
            )
            setSigningInUser(
              {
                email: "",
                password: ""
            }
            )
            // navigate("/");
  
          } else {
            // setExists(false);
            // alert("login details invalid");

            setIsloggedin({
              name: "",
              active: false,
              profileImage:''
            });
            setPopupActive(
              {
                name:'',
                status:true,
                popupActivePath:'login'
              }
            )
            // setSigningInUser(
            //   {
            //     email: "",
            //     password: signingInUser.password
            // }
            // )
            
          }
        }
      }
    };
    checkFields();

    return validationError;
  };

  return { handleChange, formSubmit, validationErrors ,handleImage };
};

export default Authentication;
