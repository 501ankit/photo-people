import React, { useRef, useState,  useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    let check =  localStorage.getItem("loginStatus")
     if(check){
         navigate("/")
     }
 })

    let cemailid = useRef()
    let cpass = useRef() 
    let submitLogin = (event) =>{
        event.preventDefault()
            let cEmailId  = cemailid.current.value; 
            let cPass = cpass.current.value; 
            let checkEmail = localStorage.getItem("customerEmail")
            let checkPassword = localStorage.getItem("customerPassword")
            
           if(checkEmail === cEmailId && checkPassword === cPass){
              localStorage.setItem("loginStatus", true)
              navigate("/")
            }
            else{
                alert("Login Failed")
            }

  }
  return (
    <>
       <div className="login_section section">
        <div className="login_box box">
              <h2> Login Customer</h2>
            <form action=" " method=" " enctype=" " onSubmit={submitLogin}>
                <div className="form-group">
                      <input type="email" className="form-control form-control-lg mb-3" placeholder="Enter Email" name=" " id=" " required ref={cemailid}/> 
                </div>
                <div className="form-group">
                <input type="password" className="form-control form-control-lg mb-3" placeholder="Enter Password" name=" " id=" " required  ref={cpass}/>
                </div>
                <Link to="/register">Create User</Link>
               <button type='submit' className="btn btn-primary btn-lg">Login</button>
            </form>
    </div>   
        </div>
    </>
  )
}

export default Login
