import React from 'react'
import Footer from '../components/footer'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'
import InteriorSection from '../components/productDetail/interior'

const ProductInterior = () => {
    return (
        <>
          <MobileMenu/>
          <Navigation/>
          <InteriorSection/>
          <Footer/>  
        </>
    )
}

export default ProductInterior
