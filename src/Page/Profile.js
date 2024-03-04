import React, { useState, useRef, useEffect} from 'react'
import ChangePassword from './ChangePassword'


const Profile = () => {
    const [editStatus, setEditStatus] = useState(false)
    const [userName, setUserName] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [viewCard, setViewCard] = useState(false)
    const [viewPassCard, setViewPassCard] = useState(false)
    

    let newCusername = useRef() 
    let newCname = useRef() 
    let newCemail = useRef() 
    let newCphone = useRef() 



    const changeStatus = () => {
        setEditStatus(true)
        let cUsername = localStorage.getItem("customerUserName")
        let cName = localStorage.getItem("customerName")
        let cEmail = localStorage.getItem("customerEmail")
        let cPhone = localStorage.getItem("customerPhone")
        
        setUserName(cUsername)
        setName(cName)
        setEmail(cEmail)
        setPhone(cPhone)
    }


    const getValue = () =>{
       newCusername.current.value = userName
       newCname.current.value =  name
       newCemail.current.value =  email
       newCphone.current.value =  phone 
    }

    const updateValue = () =>{
       let newUserName =  newCusername.current.value
       let newName =  newCname.current.value
       let newEmail = newCemail.current.value 
       let newPhone = newCphone.current.value

        setUserName(newUserName)
        setName(newName)
        setEmail(newEmail)
        setPhone(newPhone)

      
        localStorage.setItem("customerUserName",newUserName)
        localStorage.setItem("customerName",newName)
        localStorage.setItem("customerEmail",newEmail)
        localStorage.setItem("customerPhone",newPhone)
          
    }

    return (
        <>
            <div className="profile_section d-flex justify-content-center mt-4">
                    <div className="container">
                    <div className="profile_container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="profile_img">
                                    <img src="https://www.pngmart.com/files/10/User-Account-PNG-Clipart.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="profile_box">
                                    <div className="section1 d-flex mb-3">
                                        <h2 className='pe-3'>{localStorage.getItem("customerUserName")}</h2>
                                        <button className='profileBtn me-3' onClick={changeStatus}>Edit Profile</button>
                                        <span onClick={()=>setViewCard(true)} style={{cursor:"pointer",position:"relative"}}><i className='fab fa-gg-circle fa-2x'></i></span>
                                    </div>
                                    <div className="section2 mb-3">
                                       <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#resModal">show response</button> 
                                    </div>
                                    <div className="section3">
                                        <h4>{localStorage.getItem("customerName")}</h4>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div>
            
           {editStatus &&   <div className="editProfile_section">
            <div className="editProfile_container">
                <h2>Edit Profile</h2>
                    <form action="">
                        <div className="row">
                            <div className="col">
                            <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" placeholder='' value={userName} className='form-control form-control-lg mb-3' onChange={(event)=>setUserName(event.target.value)}/>
                        </div>
                                </div>  
                        <div className="col">
                        <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder='' value={name} className='form-control form-control-lg mb-3' onChange={(event)=>setName(event.target.value)}/>
                      </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='' value = {email} className='form-control form-control-lg mb-3' onChange={(event)=>setEmail(event.target.value)}/>
                      </div>
                            </div>
                            <div className="col">
                            <div className="form-group">
                                <label htmlFor="">Mobile Number</label>
                                <input type="number" placeholder='' value= {phone} className='form-control form-control-lg mb-3' onChange={(event)=>setPhone(event.target.value)}/>
                      </div> 
                            </div>
                        </div>   
                        </div>
                        <button type="button" className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#myModal" onClick={getValue}>Edit</button>
                      <button type="button" className="btn btn-danger" onClick={()=>setEditStatus(false)}>close</button>
                  </form>
            </div>
          </div>}

          {/* edit model */}
          <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
          <form action="">
          <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" placeholder=''  className='form-control form-control-lg mb-3' ref={newCusername}/>
                        </div>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='' className='form-control form-control-lg mb-3' ref={newCname}/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder='' className='form-control form-control-lg mb-3' ref={newCemail}/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Mobile Number</label>
                  <input type="number" placeholder='' className='form-control form-control-lg mb-3' ref={newCphone}/>
              </div> 
              <button type="button" className="btn btn-primary" onClick={updateValue}>Save</button>
                  </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>
      </div>
      </div>
        </div>

        {/* logout card */}
        <div className="card" style={{width: "18rem",position:"absolute",top:"21%",right:"10%",display:`${viewCard ? "block" : "none"}`}} id="myCard">
            <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{cursor:"pointer"}}onClick={()=>setViewPassCard(true)}>Change Password</li>
                <li className="list-group-item" onClick={()=>localStorage.clear()} style={{cursor:"pointer"}}>Logout</li>
                <li className="list-group-item" onClick={()=>setViewCard(false)} style={{cursor:"pointer"}}>Cancel</li>
            </ul>
        </div>
        
           {viewPassCard && <ChangePassword closeCard = {setViewPassCard}/>}
            {/* response model */}
            <div className="modal" id="resModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1>Service Provider Available</h1>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>
      </div>
      </div>
        </div>
        </>
    )
}

export default Profile
