import React, { useState } from 'react'
import organizationData from '../../Data/Data'
import { Link } from 'react-router-dom'

const OrganizationList = () => {
  const [orgArr, setOrgArr] = useState(organizationData)
  const [searchInfo, setSearchInfo] = useState()


  const searchOrganization = () => {
  organizationData.find((val, index) => { 
      if(val.name === searchInfo)
     { 
      const getOrganizationByName = organizationData.filter((val, index) => { return val.name === searchInfo })
      setOrgArr(getOrganizationByName)
    }
    if(val.address === searchInfo)
    { 
        const getOrganizationByLocation = organizationData.filter((val, index) => { return val.address === searchInfo })
      setOrgArr(getOrganizationByLocation) 
   }
     })
  }

  const getProfileInfo = (name) => {
    const getInfo = orgArr.filter((getVal, getIndex) => { return getVal.name === name })
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
      <div className="organization_list-section" style={{background:"#55efc4"}}>
        <div className="search_section d-flex justify-content-center pt-5">
          <div className="search_box">
            <div className="form-group d-flex">
              <input type="search" name="" id="" placeholder='search organization' className='form-control form-control-lg' onChange={(event) => setSearchInfo(event.target.value)} />
              <button className='btn btn-primary ms-3' onClick={searchOrganization} style={{fontFamily: "font-family: 'Raleway', sans-serif",fontWeight:600}}>Search</button>
            </div>
            
          </div>
        </div>
        <div className="card_section" style={{ marginTop: "5%" }}>
          <div className="container">
            <div className="row">
              {orgArr.map((val, index) => {
                return <div className='col-md-4 mb-3' key={index}>
                  <div className="card" style={{backgroundColor:"#ffeaa7",boxShadow:"0 4px 8px rgba(0,0,0,0.3)"}}>
                    <div className="card-body">
                      <h5 className="card-title" style={{fontFamily: "'Source Sans Pro', sans-serif",fontWeight:700}}>{val.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted" style={{fontFamily: "'Source Sans Pro', sans-serif",fontWeight:600}}>Email : {val.email}</h6>
                      <p className="card-text" style={{fontFamily: "'Source Sans Pro', sans-serif",fontWeight:400}}>Location : {val.address}</p>
                      <Link to="/organizationprofile" className="card-link" onClick={() => getProfileInfo(val.name)} style={{fontFamily: "font-family: 'Raleway', sans-serif",fontWeight:600,padding:"8px 15px",backgroundColor: "#dfe6e9",color: "red",
                      borderRadius: "5px",boxShadow:"0 3px 5px rgba(0,0,0,0.3)"}}>View Profile</Link>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrganizationList
