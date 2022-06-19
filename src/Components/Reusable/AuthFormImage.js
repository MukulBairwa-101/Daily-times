import React from 'react'
import "../pages/Authentication/auth.css";

const AuthFormImage = () => {
    return (
        <div className="auth-form-image-container">
            
            {/* <div className="auth-form-image-holder"> */}
                <img  src ="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt ="alt-image" className="form-side-image"/>
                {/* <img  src ="https://www.positive.news/wp-content/uploads/2022/06/phil-hearing-wNlLElAJaqM-unsplash-e1654519361752-740x492-c-center.jpg" alt ="alt-image" className="form-side-image"/> */}
           {/* </div>         */}
        </div>
    )
}

export default AuthFormImage;
