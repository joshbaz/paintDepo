import React, { useState } from 'react'
import Footer from '../components/footer'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'
import InteriorSection from '../components/productDetail/interior'

const ProductInterior = () => {
 const [OpenMobileMenu, setMobileMenu] = useState(false);
 
  const toggle = () => {
    setMobileMenu(!OpenMobileMenu);
  };
    return (
      <>
        <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />
        <Navigation toggle={toggle} />
        <InteriorSection />
        <Footer />
      </>
    );
}

export default ProductInterior
