import React, { useState } from 'react'
import Footer from '../components/footer'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'
import PolicySection from '../components/policy'

const Policy = () => {
    const [OpenMobileMenu, setMobileMenu] = useState(false);
    const [CloseFooterDetail, setFooterDetail] = useState(false);
    const toggle = () => {
      setMobileMenu(!OpenMobileMenu);
    };
     const moreClick = () => {
       setFooterDetail(!CloseFooterDetail);
     };
    return (
      <>
        <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />
        <Navigation toggle={toggle} />
        <PolicySection />
        <Footer detailActive={CloseFooterDetail} clickMore={moreClick} />
      </>
    );
}

export default Policy
