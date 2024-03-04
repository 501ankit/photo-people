import React, { useState, } from 'react'
import { Link } from 'react-router-dom'
import providerData from '../../Data/Data2'
import { useEffect } from 'react'



const ProviderList = (props) => {

  const [arr1, setArr1] = useState(providerData)

  useEffect(()=>{
    if(props.spArr){
      setArr1(props.spArr)
    }
    else{
      setArr1(providerData)
    }
  },[])
 
  const getProfileInfo = (name) => {
    const getInfo = arr1.filter((getVal, getIndex) => { return getVal.name === name })
    console.log(getInfo[0].userName)
    let pusername = getInfo[0].userName
    let pname = getInfo[0].name
    let pemail = getInfo[0].email
    let pphone = getInfo[0].phone
    let ptype = getInfo[0].type
    let pprice = getInfo[0].price

    localStorage.setItem("pName", pname)
    localStorage.setItem("pUserName", pusername)
    localStorage.setItem("pType", ptype)
    localStorage.setItem("pPrice", pprice)

  }


  return (
    <>
      <h1 className='text-center py-3'>Provider List</h1>
      <div className="container">
          <div className="row my-4">
            {arr1.map((arrValue,arrIndex)=>{
                let {name,phone,type,address} = arrValue
              return  <div className="col-xl-4 mb-3" key={arrIndex}>
              <div className="card">
                <div className="card-body d-flex flex-column align-item-center">
                  <h2 className="card-title text-center">{name}</h2>
                  <h4 className='text-center'>{phone}</h4>
                  <h5 className='text-center'>{type}</h5>
                  <p className="card-text text-center">{address}</p>
                  <Link to="/providerprofile"  onClick={() => getProfileInfo(name)}className="btn btn-primary">View Profile</Link>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
    </>
  )
}

export default ProviderList
