import React, { useState } from 'react'
import Footer from '../components/footer'
import MobileMenu from '../components/MobileMenu'
import Navigation from '../components/Navigation'
import InteriorSection from '../components/productDetail/interior'
import {InteriorDataNormal, InteriorDataDecorative} from '../data/InteriorData';

const ProductInterior = () => {
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
        <InteriorSection
          Normal={InteriorDataNormal}
          Decorative={InteriorDataDecorative}
        />
        <Footer detailActive={CloseFooterDetail} clickMore={moreClick} />
      </>
    );
}

export default ProductInterior
