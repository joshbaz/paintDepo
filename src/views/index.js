import React, { useEffect, useState } from "react";
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
import CookieAccept from "../components/Cookies";
import Cookies from "js-cookie";

const Home = () => {
  const [OpenMobileMenu, setMobileMenu] = useState(false);
  const [CloseFooterDetail, setFooterDetail] = useState(false);
  const [switchNavColor, setSwitchNavColor] = useState(false);
  const [cookieScroll, setCookieScroll] = useState(0);
  const [checkCookies, setCheckCookies] = useState();

  useEffect(() => {
    const cookieAccepted = Cookies.get("AcceptedCookies");
    if (cookieAccepted) {
      setCheckCookies(true);
    } else {
      setCheckCookies(false);
    }
  }, [checkCookies]);

  const clickCookies = () => {
    Cookies.set("AcceptedCookies", "true");
    setCheckCookies(true)
  };

  const toggle = () => {
    setMobileMenu(!OpenMobileMenu);
  };

  const moreClick = () => {
    setFooterDetail(!CloseFooterDetail);
  };

  const navChange = () => {
    if (window.scrollY >= 700) {
      setSwitchNavColor(true);
    } else {
      setSwitchNavColor(false);
    }
  };

  window.addEventListener("scroll", navChange);

  const scrollChange = () => {
    setCookieScroll(window.scrollY);
  };
  window.addEventListener("scroll", scrollChange);
  return (
    <>
      <GlobalStyle />
      <MobileMenu mobileActive={OpenMobileMenu} toggle={toggle} />
      <Navigation
        toggle={toggle}
        navColor="white"
        navigationChange={switchNavColor}
        changeColor="#662583"
      />
      <CookieAccept scroll={cookieScroll} checkCookies={checkCookies} click={clickCookies}/>
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
