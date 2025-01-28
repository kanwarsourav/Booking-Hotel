import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Destination from '../Destination/Destination'
import BestHotel from '../Hotel/BestHotels'
import Servicess from '../Services/Services'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="home-container">
    <Destination/>
    <BestHotel/>
    <Servicess/>
    <Newsletter/>
    <Footer/>
    </div>
    </>
  )
}

export default Home