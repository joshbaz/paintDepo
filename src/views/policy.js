import React from 'react'
import Footer from '../components/footer'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'
import PolicySection from '../components/policy'

const policy = () => {
    return (
        <>
           <MobileMenu/>
           <Navigation/> 
           <PolicySection/>
           <Footer/>
        </>
    )
}

export default policy
