import React, { useState } from 'react'
import FaqSection from '../components/FAQ'
import Footer from '../components/footer'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'
import {QuestionData} from '../data/faqData';
const Faq = () => {
    const [OpenMobileMenu, setMobileMenu] = useState(false);
    const [CloseFooterDetail, setFooterDetail] = useState(false);
      // eslint-disable-next-line no-unused-vars
      const [switchNavColor, setSwitchNavColor] = useState(false);
    const toggle = () => {
      setMobileMenu(!OpenMobileMenu);
    };

     const moreClick = () => {
       setFooterDetail(!CloseFooterDetail);
     };
    return (
      <>
        <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />

        <Navigation
          toggle={toggle}
          navColor="#662583"
          navigationChange={switchNavColor}
          changeColor="#662583"
        />
        <FaqSection faqData={QuestionData} />
        <Footer detailActive={CloseFooterDetail} clickMore={moreClick} />
      </>
    );
}

export default Faq
