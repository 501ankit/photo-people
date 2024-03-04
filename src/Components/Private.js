import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


const Private = () => {
    const navigate = useNavigate()
    const check =  localStorage.getItem("loginStatus")
  return (
    <>
      {check ? <Outlet/> : navigate("/login")}
    </>
  )
}

export default Private
