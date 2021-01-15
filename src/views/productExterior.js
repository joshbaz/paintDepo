import React, { useState } from 'react'
import Footer from "../components/footer";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";
import ExteriorSection from '../components/productDetail/exterior';

const ProductExterior = () => {
  const [OpenMobileMenu, setMobileMenu] = useState(false);

  const toggle = () => {
    setMobileMenu(!OpenMobileMenu);
  };
    return (
      <>
        <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />
        <Navigation toggle={toggle} />
        <ExteriorSection />
        <Footer />
      </>
    );
}

export default ProductExterior
