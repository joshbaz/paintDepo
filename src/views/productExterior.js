import React, { useState } from 'react'
import Footer from "../components/footer";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";
import ExteriorSection from '../components/productDetail/exterior';
import {
  ExteriorDataNormal,
  ExteriorDataDecorative,
} from "../data/exteriorData";
const ProductExterior = () => {
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
        <ExteriorSection
          Normal={ExteriorDataNormal}
          Decorative={ExteriorDataDecorative}
        />
        <Footer detailActive={CloseFooterDetail} clickMore={moreClick} />
      </>
    );
}

export default ProductExterior
