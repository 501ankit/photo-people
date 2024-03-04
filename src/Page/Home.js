import React from 'react'
import Footer from '../Components/Footer'
import ServiceProviderCard from './ServiceProviderCard'
import Services from './Services'
import Banner from '../Components/Banner'
import HomeSearch from '../Components/HomeSearch'

const Home = () => {
  return (
    <>
      <Banner/>
      <HomeSearch/>
     <Services/>
     <ServiceProviderCard/>
     <Footer/>
    </>
  )
}

export default Home
