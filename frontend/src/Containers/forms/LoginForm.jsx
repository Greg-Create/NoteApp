import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import "./signupform.css"
import axios from 'axios'
import {useState} from 'react'
import { response } from 'express' 
import {navigate} from 'react-router-dom'


  function LoginForm(props) {
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const submitLogin = () => {
      const user = {email: email, password: password}

      axios.post('http://localhost:3001/user/login', user).then(
        console.log("logged in"),
        props.function(false),
        props.logen(true),
        console.log(response.header)
      ).catch(err => {
        console.log(err.response.data)
      })
    }
  
 return (
 
    props.validation? 
         <div className="shadow">
        <div className='form_container'>
        <h1>Login</h1>
        <div className="form_input_container">
        <label for="email">Enter your email</label>
        <input id="email" type="email" placeholder="Enter your email"  onChange={(event) => setEmail(event.target.value)}></input>
        </div>
        
        <div className="form_input_container">
        <label for="password">Enter your password</label>
        <input id="password" type="password" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)}></input>
        </div>

        <button onClick={submitLogin}>Login</button>
        <AiOutlineClose onClick={() => {props.function(false)}} className="close2" />
    </div> 
    </div> 

    : ""

    
    
  
    )
} 




export default LoginForm