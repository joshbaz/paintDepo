import React, { useState } from "react";
import Footer from "../components/footer";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";
import Product from "../components/product";
import { CommonHero } from "../components/common";
import { SliderProductChart } from "../data/heroSlider";

const Products = () => {
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
   if (window.scrollY >= 300) {
     setNavSolid(true);
     setSwitchNavColor(true);
   } else {
     setNavSolid(false);
     setSwitchNavColor(false);
   }
  };
  window.addEventListener("scroll", navSolidChange);
  return (
    <>
      <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />
      <Navigation
        toggle={toggle}
        navColor="white"
        navigationChange={switchNavColor}
        changeColor="#662583"
        navSolid={navSolid}
        bgColor="linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(250, 250, 250, 0) 107.5%);
opacity: 0.9"
      />
      <CommonHero slides={SliderProductChart} />
      <Product />
      <Footer detailActive={CloseFooterDetail} clickMore={moreClick} />
    </>
  );
};

export default Products;
