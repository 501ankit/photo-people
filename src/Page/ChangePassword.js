import React,{useState} from 'react'

let currentPwd = localStorage.getItem("customerPassword")
const ChangePassword = (props) => {
    const [password, setPassword] = useState("")
    const [newPassWord, setNewPassword] = useState("")
    const [confirmNewPassWord, setConfirmNewPassWord] = useState("")

    const updatePassword = () =>{
        if(currentPwd === password){
            if(newPassWord === confirmNewPassWord){
              localStorage.setItem("customerPassword",newPassWord) 
            }
            else{
                alert("password does not match")
            }
        }
        else{
            alert("wrong password")
        }
    }

  return (
    <>
       <div className="editProfile_section">
            <div className="editProfile_container">
                <h2>Change Password</h2>
                    <form action="">
                            <div className="form-group">
                            <label htmlFor="">Old Password</label>
                            <input type="text" placeholder='Enter Old Password' className='form-control form-control-lg mb-3' onChange={(event)=>setPassword(event.target.value)}/>
                        </div>
        
                        <div className="form-group">
                                <label htmlFor="">New Password</label>
                                <input type="text" placeholder='Enter New Passwod' className='form-control form-control-lg mb-3' onChange={(event)=>setNewPassword(event.target.value)}/>
                      </div>
                            <div className="form-group">
                                <label htmlFor="">Confirm New Password</label>
                                <input type="email" placeholder='Re-Enter Password' className='form-control form-control-lg mb-3' onChange={(event)=>setConfirmNewPassWord(event.target.value)}/>
                      </div>
                            
                        <button type="button" className="btn btn-primary me-3" onClick={updatePassword}>save</button>
                        <button type="button" className="btn btn-danger me-3" onClick={()=>props.closeCard(false)}>close</button>
                  </form>
            </div>
          </div>
    </>
  )
}

export default ChangePassword
