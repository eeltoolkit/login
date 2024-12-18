import React, { useState } from 'react'
import './Login.css'

const Login = () => {

const [action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
           
        </div>
        <div className="inputs">
            <div className="input">
                <input type="email" placeholder="Email" />
            </div>
            <div className="input">
                <input type="password" placeholder="Password" />
            </div>
            <div className="input">       
                <input type="password" placeholder="Confirm Password" />
            </div>
        </div>
        
        <div className="submit-container">
            <div className="submit">Sign Up</div>
        </div>
        <div className="have-account"> Already have an account ?</div>
    </div>
  )
}

export default Login
