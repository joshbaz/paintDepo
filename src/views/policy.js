import React, { useState } from 'react'
import Footer from '../components/footer'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'
import PolicySection from '../components/policy'

const Policy = () => {
    const [OpenMobileMenu, setMobileMenu] = useState(false);

    const toggle = () => {
      setMobileMenu(!OpenMobileMenu);
    };
    return (
      <>
        <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />
        <Navigation toggle={toggle} />
        <PolicySection />
        <Footer />
      </>
    );
}

export default Policy
