import React, { useEffect, useState } from "react";
import "./Default_page_body.css"
import LoginForm from "../forms/LoginForm"
import SignUpForm from "../forms/SignupForm";

function BodyDefault () {
   
   const [modal, setModal] = useState(false)
   const [loginpopup, setLoginPopup] = useState(false)
   const [signuppopup, setSignupPopup] = useState(false)
   const [loggedin, setLoggedin] = useState(false)

   

   const login = () =>{
    setLoginPopup(true)
}

const signup = () =>{
    setModal(true)
    setSignupPopup(true)

}
  
   return(
        <div>
            <div className="default_page_container">
            <h1 className="default"> Welcome</h1>
            
            <div className="default_page_container_input">
           <button onClick={signup}>Sign In</button>
           <p>or</p>
           <button onClick={login}>Log In</button>
           </div>

           </div>

           {
               loginpopup? <LoginForm logen={setLoggedin} validation={loginpopup} function={setLoginPopup}/>    
                : ""
           }

            {
               signuppopup? <SignUpForm logen={setLoggedin} validation={signuppopup} function={setSignupPopup}/>    
                : ""
           }
            </div>
        
    )
}

export default BodyDefault