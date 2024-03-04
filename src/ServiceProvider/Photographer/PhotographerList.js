import React, { useState } from 'react'
import photographerData from '../../Data/Data1'
import { Link } from 'react-router-dom'

const PhotographerList = () => {
  const [photoArr, setPhotoArr] = useState(photographerData)
  const [searchInfo, setSearchInfo] = useState()

  const searchPhotogarpher = () =>{
    photographerData.find((val, index) => { 
      if(val.name === searchInfo)
     { 
      const getPhotographerByName = photographerData.filter((val, index) => { return val.name === searchInfo })
      setPhotoArr(getPhotographerByName)
    }
    if(val.address === searchInfo)
    { 
        const getPhotographerByLocation = photographerData.filter((val, index) => { return val.address === searchInfo })
        setPhotoArr(getPhotographerByLocation) 
   }
     })
  }

  const getPhotProfileInfo = (name) =>{
    const getPhotoInfo = photoArr.filter((getVal,getIndex)=>{return getVal.name === name})
    console.log(getPhotoInfo[0].userName)
    let pPhotousername = getPhotoInfo[0].userName
    let pPhotoname = getPhotoInfo[0].name
    let pPhotoemail = getPhotoInfo[0].email
    let pPhotophone = getPhotoInfo[0].phone
    let pPhototype = getPhotoInfo[0].type
    let pprice = getPhotoInfo[0].price

    localStorage.setItem("pPhotoName",pPhotoname)
    localStorage.setItem("pPhotoUserName",pPhotousername)
    localStorage.setItem("pPhotoType",pPhototype)
    localStorage.setItem("pPrice", pprice)
  }
  return <div className="organization_list-section" style={{background:"#ea8685"}}>

        <div className="search_section d-flex justify-content-center pt-5">
       <div className="search_box">
        <div className="form-group d-flex">
            <input type="search" name="" id="" placeholder='search photographer' className='form-control form-control-lg' onChange={(event)=> setSearchInfo(event.target.value)}/>
            <button className='btn btn-primary ms-3' onClick={searchPhotogarpher} style={{fontFamily: "font-family: 'Raleway', sans-serif",fontWeight:600}}>Search</button>
        </div>
      </div>
        </div>
     
        <div className="card_section" style={{marginTop:"5%"}}>
         <div className="container">
      <div className="row">
        {photoArr.map((val,index)=>{
          return <div className='col-md-4 mb-3' key={index}>
           <div className="card" style={{backgroundColor:"#778beb",boxShadow:"0 4px 8px rgba(0,0,0,0.3)"}}>
             <div className="card-body">
               <h5 className="card-title" style={{fontFamily: "'Source Sans Pro', sans-serif",fontWeight:700}}>{val.name}</h5>
               <h6 className="card-subtitle mb-2 text-muted" style={{fontFamily: "'Source Sans Pro', sans-serif",fontWeight:600}}>Email : {val.email}</h6>
               <p className="card-text"  style={{fontFamily: "'Source Sans Pro', sans-serif",fontWeight:400}}>Location : {val.address}</p>
              <Link to="/photographerprofile" className="card-link" onClick={()=>getPhotProfileInfo(val.name)} style={{fontFamily: "font-family: 'Raleway', sans-serif",fontWeight:600,padding:"8px 15px",backgroundColor: "#dfe6e9",color: "red",
                      borderRadius: "5px",boxShadow:"0 3px 5px rgba(0,0,0,0.3)"}}>View Profile</Link>
         </div>
       </div>
           </div>
        })}
      </div>
     </div>
      </div>
    </div>
}

export default PhotographerList
