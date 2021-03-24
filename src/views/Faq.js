import React, { useState } from 'react'
import FaqSection from '../components/FAQ'
import Footer from '../components/footer'

import Navigation2 from "../components/common/Navigation2";
import MobileMenu2 from "../components/common/MobileMenu2";
import {QuestionData} from '../data/faqData';
const Faq = () => {
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
        <MobileMenu2 mobileActive={OpenMobileMenu} toggle={toggle} />

        <Navigation2
          toggle={toggle}
          navColor="#662583"
          navigationChange={switchNavColor}
          changeColor="#662583"
          navSolid={navSolid}
        />
        <FaqSection faqData={QuestionData} />
        <Footer detailActive={CloseFooterDetail} clickMore={moreClick} />
      </>
    );
}

export default Faq
