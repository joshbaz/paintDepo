import React, { useState } from 'react'
import ContactSection from '../components/contact'
import Footer from '../components/footer'
import Navigation from '../components/Navigation'
import Success from '../components/contact/sucess';
import MobileMenu from '../components/MobileMenu';

const Contact = () => {

    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [OpenMobileMenu, setMobileMenu] = useState(false);
    const [CloseFooterDetail, setFooterDetail] = useState(false);

    function submitForm() {
        setSubmitSuccess(true)
    }
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
        {!submitSuccess ? (
          <ContactSection submitForm={submitForm} />
        ) : (
          <Success />
        )}
        <Footer detailActive={CloseFooterDetail} clickMore={moreClick} />
      </>
    );
}

export default Contact
