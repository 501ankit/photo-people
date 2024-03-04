import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SetInfo, InfoFilter} from '../App'

const HomeSearch = () => {
  const navigate = useNavigate()

  const setInfo = useContext(SetInfo)
  const infoFilter = useContext(InfoFilter)

  const searchProviderInfo = () =>{
   
    infoFilter()
    navigate("/providerlist")
  }
  return (
    <>
        <div className="banner_search_section d-flex justify-content-center" style={{position:"absolute",top:"50%",left:"25%"}}>
            <input type="text" placeholder='Search For Providers' className='form-control form-control-lg px-5 me-2' onChange = {(event)=>setInfo(event.target.value)}/>
            <button type='button' className='searchBtn' onClick={searchProviderInfo}>Search</button>  
        </div>
    </>
  )
}

export default HomeSearch
