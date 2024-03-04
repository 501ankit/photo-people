import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import profileData from '../../Data/imgData'

const galleryType = ["All",...new Set(profileData.map((typeVal)=>typeVal.type))]
const OrganizationProfile = () => {
    const [photoArr, setPhotoArr] = useState(profileData)
    const [bookStatus, setBookStatus] = useState(false)
    const [photoType, setPhotoType] = useState(galleryType)
    const [reqDate, setReqDate] = useState()
    const [day, setDay] = useState()
    const [location, setLocation] = useState()
    const [type, setType] = useState()

   let oProfileName = localStorage.getItem("pName")
   let oProfileUser = localStorage.getItem("pUserName")
    let oProfileType = localStorage.getItem("pType")
    let oProfilePrice = localStorage.getItem("pPrice")

    const submitRequest = () =>{
        let requestOb = {
            date : reqDate,
            reqDay  : day,
            reqLocation : location,
            reqType : type
        }

        localStorage.setItem("ReqData",JSON.stringify([requestOb]))
    }

    const showPhoto = (category) =>{
        if(category === "All"){
            setPhotoArr(profileData)  
            return;
        }
        let selectType = profileData.filter((val)=>{return val.type === category})
        setPhotoArr(selectType)
    }


    return (
        <>
            <div className="orgProfile_section d-flex justify-content-center mt-4">
                    <div className="container">
                    <div className="orgProfile_container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="orgProfile_img">
                                    <img src="https://images.template.net/wp-content/uploads/2017/02/15123202/Team-Event-Company-Logo.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="orgProfile_box">
                                    <div className="section1 d-flex mb-3">
                                        <h2 className='pe-3'>{oProfileUser}</h2>
                                        <button className='btn btn-primary ms-3' onClick={()=>setBookStatus(true)}>Book Schedule</button>
                                        <span className='ms-3 mt-3' style={{fontSize:"18px",fontWeight:"700"}}>&#8377;{oProfilePrice}/day</span>
                                    </div>
                                    <div className="section2 mb-3">
                                       <p>54 clients</p> 
                                    </div>
                                    <div className="section3">
                                        <h4>{oProfileName}</h4>
                                        <h5>{oProfileType}</h5>
                                    </div>
                                    <div className="section4">
                                        <h4>Events : wedding, aniversery other events</h4>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div>


            <div className="prePage">
            <i className='fas fa-arrow-alt-circle-left fa-2x' style={{marginLeft: "8rem"}}></i>
                <Link to='/organization' target="_self" style={{marginTop:"-28px",display: "block",marginLeft: "11rem"}}> Previous Page</Link>
            </div>

            <div className="showGallery" style={{display:"flex",justifyContent:"center"}}>
                {photoType.map((catVal,catIndex)=>{
                    return <button type='button' className='btn btn-primary ms-3' key={catIndex} onClick={()=>showPhoto(catVal)}>{catVal}</button>

                })}
            </div>
           
           {showPhoto && <div className="orgPhoto_section mt-5">
                <div className="container">
                    <div className="row">
                       {photoArr.map((pval,pindex)=>{
                            return <div className="col-md-4 mb-4" key={pval.imgId}>
                                    <img src={pval.image} alt="" width = "300" height="300"/>
                            </div>
                       })}
                    </div>
                </div>
            </div>}

     {bookStatus && <div className="request_section">
            <div className="request_box">
            <div className="container">
                <form action="">
                    <div className="form-group">
                        <input type="date" placeholder="Event Date" className="form-control form-control-lg mb-3" onChange={(event)=>setReqDate(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Days" className="form-control form-control-lg mb-3" onChange={(event)=>setDay(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Location" className="form-control form-control-lg mb-3" onChange={(event)=>setLocation(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Type" className="form-control form-control-lg mb-3" onChange={(event)=>setType(event.target.value)}/>
                    </div>
                    <button className="btn btn-primary" type='button' onClick={submitRequest}>Send Request</button> 
                    <button className='btn btn-danger ms-3' type='button' onClick={()=>setBookStatus(false)}>Close</button>
                </form>
            </div>
            </div>
        </div>}
        </>
    )
}

export default OrganizationProfile

