import React from 'react'
import "./signupform.css"
import {AiOutlineClose} from "react-icons/ai"
import axios from 'axios'
import {useState} from 'react'




  function SignUpForm(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
  
    const submitLogin = () => {
      const user = {email: email, password: password}

      axios.post('http://localhost:3001/user/login', user).then(
        console.log("logged in"),
        props.logen(true)

      )
    }
  
  
    const submitSignup = () => {

    const newUser = {name: name, email: email, password: password}
    
    axios.post ('http://localhost:3001/user/register', newUser)
    .then(
      console.log("Success User Created"),
      props.function(false),


      submitLogin()

      
  
  ) .catch( err=> {
    console.log(err.response.data)
  } )

}


 return (
 
    props.validation? 
          <div className='shadow'>
        <div className='form_container'>
        <h1>Sign Up</h1>
        
        <div className="form_input_container">
        <label for="name">Enter Your Name</label>
        <input id="name" type="text" placeholder="Enter your Name" onChange={(event) => setName(event.target.value)} />
        </div>

        <div className="form_input_container">
        <label for="email">Enter your email</label>
        <input id="email" type="email" placeholder="Enter your email"  onChange={(event) => setEmail(event.target.value)} />
        </div>
        
        <div className="form_input_container">
        <label for="password">Enter your password</label>
        <input id="password" type="password" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)}/>
        </div>

        <button onClick={submitSignup}>Sign Up</button>
        <AiOutlineClose onClick={() => {props.function(false)}} className="close" />
 
    </div> 
    </div>

    : ""

    
    
  
    )
} 




export default SignUpForm