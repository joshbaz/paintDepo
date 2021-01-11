import React from 'react'
import Footer from "../components/footer";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";
import ExteriorSection from '../components/productDetail/exterior';

const productExterior = () => {
    return (
      <>
        <MobileMenu />
        <Navigation />
        <ExteriorSection/>
        <Footer />
      </>
    );
}

export default productExterior
