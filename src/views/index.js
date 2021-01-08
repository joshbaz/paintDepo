import React, { useState } from 'react'
import HeroSection from '../components/index/heroSection'
import ViewProduct from '../components/index/viewProduct'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'

const Home = () => {
    const [OpenMobileMenu, setMobileMenu] = useState(false);

    const toggle = ()=> {
        setMobileMenu(!OpenMobileMenu)
    }
    return (
        <>
          <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle}/>
          <Navigation toggle={toggle}/>
          
          <ViewProduct/>
        </>
    )
}

export default Home
