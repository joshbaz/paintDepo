import React, { useState } from 'react'
import Footer from '../components/footer'
import PolicyMetaRoute from '../meta/policy';

import Navigation2 from "../components/common/Navigation2";
import MobileMenu2 from "../components/common/MobileMenu2";
import PolicySection from '../components/policy'

const Policy = () => {
    const [OpenMobileMenu, setMobileMenu] = useState(false);
    const [CloseFooterDetail, setFooterDetail] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [switchNavColor, setSwitchNavColor] = useState(false);
    const [navSolid, setNavSolid] = useState(false);
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
        <PolicyMetaRoute />
        <MobileMenu2 mobileActive={OpenMobileMenu} toggle={toggle} />
        <Navigation2
          toggle={toggle}
          navColor="#662583"
          navigationChange={switchNavColor}
          changeColor="#662583"
          navSolid={navSolid}
        />
        <PolicySection />
        <Footer
          bg={"white"}
          detailActive={CloseFooterDetail}
          clickMore={moreClick}
        />
      </>
    );
}

export default Policy
