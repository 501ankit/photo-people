import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const check = localStorage.getItem("loginStatus")
  // console.log(check)
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-info py-3" style={{boxShadow:" 0 4px 8px rgba(0,0,0,0.5)"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">PhotoPeople</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {check ? 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Service Provider
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-danger bg-success" to="/organization">Agency</Link></li>
                  <li><Link className="dropdown-item text-danger bg-success" to="/photographer">Photographer</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/profile'>Profile</Link>
              </li>
            </ul> :
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/login">Login</Link>
             </li>
          </ul>
           } 
          </div>
        </div>
            </nav> 
    
    </>
  )
}

export default Navbar
