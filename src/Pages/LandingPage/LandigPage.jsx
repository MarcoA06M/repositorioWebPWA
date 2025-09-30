import React from 'react'
import HeroSection from './Components/HeroSection'
import SectionAbout from './Components/SectionAbout'
import ServicesSection from './Components/ServicesSection'
import OpinionSection from './Components/OpinionSection'
import {Footer} from '../../Layouts/Footer'
import NavbarLogin from '../../Layouts/NavbarLogin'

export const LandigPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
    <NavbarLogin />
    <HeroSection />
    <SectionAbout />
    <ServicesSection />
    <OpinionSection />
    <Footer />
  
</div>
  )
}
