import React, { useState } from 'react'
import ContactSection from '../components/contact'
import Footer from '../components/footer'
import Navigation from '../components/Navigation'
import Success from '../components/contact/sucess';
import MobileMenu from '../components/MobileMenu';

const Contact = () => {

    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [OpenMobileMenu, setMobileMenu] = useState(false);

    function submitForm() {
        setSubmitSuccess(true)
    }
     const toggle = () => {
       setMobileMenu(!OpenMobileMenu);
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
        <Footer />
      </>
    );
}

export default Contact
