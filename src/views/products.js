import React, { useState } from 'react'
import Footer from '../components/footer'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'
import Product from '../components/product'

const Products = () => {
    const [OpenMobileMenu, setMobileMenu] = useState(false);

    const toggle = () => {
      setMobileMenu(!OpenMobileMenu);
    };
    return (
      <>
        <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />
        <Navigation toggle={toggle} />
        <Product />
        <Footer />
      </>
    );
}

export default Products
