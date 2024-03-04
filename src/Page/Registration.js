import React, { useRef,  useEffect } from 'react'
// import { Link } from 'react-router-dom'm
import { useNavigate } from 'react-router-dom'


const Registration = () => {
    const navigate = useNavigate()

    let cid = useRef()
    let cusername = useRef()
    let cname = useRef() 
    let cemail = useRef() 
    let cphone = useRef() 
    let cpassword = useRef() 

    useEffect(()=>{
        let checkData = localStorage.getItem("cObj")
         if(checkData){
            navigate("/login")
        }
    })

    let submitCustomer = (event) =>{
        event.preventDefault()
            let cId  = cid.current.value;
            let cUsername  = cusername.current.value;
            let cName = cname.current.value; 
            let cEmail = cemail.current.value; 
            let cPhone  = cphone.current.value; 
            let cPassword = cpassword.current.value; 
        
       
        localStorage.setItem("customerId",cId)
        localStorage.setItem("customerUserName",cUsername)
        localStorage.setItem("customerName",cName)
        localStorage.setItem("customerEmail",cEmail)
        localStorage.setItem("customerPhone",cPhone)
        localStorage.setItem("customerPassword",cPassword)

        navigate("/login")
    }

  return (
    <>
         <div className="register_section section">
        <div className="register_box box">
                <h2>Register Customer</h2>
    <div className="container">
            <form action=" " method=" " enctype=" " onSubmit={submitCustomer}>
                <div className="form-group">
                     <input type="number" className="form-control form-control-lg mb-3" placeholder="Enter Id" name=" " id=" " required ref = {cid}/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg mb-3" placeholder="Enter Name" name=" " id=" " required ref = {cname}/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg mb-3" placeholder="Enter UserName" name=" " id=" " required ref = {cusername}/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control form-control-lg mb-3" placeholder="Enter Email" name=" " id=" " required ref = {cemail}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg mb-3" placeholder="Enter Mobile Number" maxlength="10" name=" " id=" " required ref = {cphone}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control form-control-lg mb-3" placeholder="Enter Password" name=" " id=" " required ref = {cpassword}/>
                </div>
               <button type='submit' className="btn btn-primary btn-lg">Register</button>
               
            </form>
        
    </div>
        </div>
    
    </div>
    </>
  )
}

export default Registration
