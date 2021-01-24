import React, { useState } from "react";
import Footer from "../components/footer";
import ChooseSection from "../components/index/choose";
import HeroSection from "../components/index/heroSection";
import OfferSection from "../components/index/offerSection";
import Product from "../components/index/productSection";
import ViewProduct from "../components/index/viewProduct";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";
import { SliderInfo } from "../data/heroSlider";
import GlobalStyle from "../globalStyles";
const Home = () => {
  const [OpenMobileMenu, setMobileMenu] = useState(false);
  const [CloseFooterDetail, setFooterDetail] = useState(false);
  const [switchNavColor, setSwitchNavColor] = useState(false);
  const toggle = () => {
    setMobileMenu(!OpenMobileMenu);
  };

  const moreClick = () => {
    setFooterDetail(!CloseFooterDetail);
  };

  const navChange = () => {
    if (window.scrollY >= 100) {
      setSwitchNavColor(true);
    } else {
      setSwitchNavColor(false);
    }
  };

  window.addEventListener("scroll", navChange);
  return (
    <>
      <GlobalStyle />
      <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />
      <Navigation toggle={toggle} navColor="white" navigationChange={switchNavColor} changeColor="#662583" />
      <HeroSection slides={SliderInfo} />
      <ViewProduct />
      <OfferSection />
      <ChooseSection />
      <Product />
      <Footer detailActive={CloseFooterDetail} clickMore={moreClick} />
    </>
  );
};

export default Home;
