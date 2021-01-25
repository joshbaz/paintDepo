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
    // eslint-disable-next-line no-unused-vars
    const [switchNavColor, setSwitchNavColor] = useState(false);
    const [navSolid, setNavSolid] = useState(false);

    function submitForm() {
        setSubmitSuccess(true)
    }
     const toggle = () => {
       setMobileMenu(!OpenMobileMenu);
     };
      const moreClick = () => {
        setFooterDetail(!CloseFooterDetail);
      };

      const navSolidChange = () => {
        if (window.scrollY >= 100) {
          setNavSolid(true);
        } else {
          setNavSolid(false);
        }
      };
      window.addEventListener("scroll", navSolidChange);
    return (
      <>
        <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />
        <Navigation
          toggle={toggle}
          navColor="#662583"
          navigationChange={switchNavColor}
          changeColor="#662583"
          navSolid={navSolid}
        />
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
