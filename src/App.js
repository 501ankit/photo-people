import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Private from './Components/Private'
import Home from './Page/Home'
import Profile from './Page/Profile'
import Login from './Page/Login'
import Registration from './Page/Registration'
import Organization from './ServiceProvider/Organization/Organization'
import Photographer from './ServiceProvider/Photographer/Photographer'
import OrganizationProfile from './ServiceProvider/Organization/OrganizationProfile'
import PhotographerProfile from './ServiceProvider/Photographer/PhotographerProfile'
import ProviderList from './ServiceProvider/Provider/ProviderList' 
import providerData from './Data/Data2'
import ProviderProfile from './ServiceProvider/Provider/ProviderProfile'

export const SetInfo = createContext()
export const InfoFilter = createContext()
export const SetInfoArr = createContext()


const App = () => {
  const [providerInfo, setProviderInfo] = useState()
  const [providerArr, setProviderArr] = useState()
  

  const searchProvider = () =>{
    providerData.find((val, index) => { 
        if(val.name === providerInfo)
       { 
        const getProviderByName = providerData.filter((val, index) => { return val.name === providerInfo })
        setProviderArr(getProviderByName)
      }
       else if(val.address === providerInfo)
      { 
          const getProviderByLocation = providerData.filter((val, index) => { return val.address === providerInfo })
          setProviderArr(getProviderByLocation) 
     }
      else if(val.type === providerInfo)
     { 
         const getProviderByType = providerData.filter((val, index) => { return val.type === providerInfo })
         setProviderArr(getProviderByType) 
    }
       })
  }
  return (
    <>
     <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route element={<Private/>}>
              <Route path="/" element = {
                    <SetInfo.Provider value={setProviderInfo}>
                      <InfoFilter.Provider value={searchProvider}>
                        <Home/>
                      </InfoFilter.Provider>
                    </SetInfo.Provider>
                  }/>
               <Route path="/profile" element = {<Profile/>}/>
                <Route path="/organization" element = {<Organization/>}/>
                <Route path="/photographer" element = {<Photographer/>}/>
                <Route path="/organizationprofile" element = {<OrganizationProfile/>}/>
                <Route path="/photographerProfile" element = {<PhotographerProfile/>}/>
                <Route path="/providerlist" element = {<ProviderList spArr = {providerArr}/>}/>
                <Route path="/providerprofile" element = {<ProviderProfile/>}/>
            </Route>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/register" element = {<Registration/>}/>
        </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
