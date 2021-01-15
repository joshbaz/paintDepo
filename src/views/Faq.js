import React, { useState } from 'react'
import FaqSection from '../components/FAQ'
import Footer from '../components/footer'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'

const Faq = () => {
    const [OpenMobileMenu, setMobileMenu] = useState(false);

    const toggle = () => {
      setMobileMenu(!OpenMobileMenu);
    };
    return (
      <>
        <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />
        <Navigation toggle={toggle} />
        <FaqSection />
        <Footer />
      </>
    );
}

export default Faq
