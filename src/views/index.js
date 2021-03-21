import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import ChooseSection from "../components/index/choose";
import HeroSection2 from "../components/index/Hero2";
import OfferSection from "../components/index/offerSection";
import Product from "../components/index/productSection";
import ViewProduct from "../components/index/viewProduct";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";
import { SliderInfo } from "../data/heroSlider";
import { categoryData } from "../data/categoryData";

import CookieAccept from "../components/Cookies";
import Cookies from "js-cookie";
import Loader from '../components/Loader';

const Home = () => {
  const [OpenMobileMenu, setMobileMenu] = useState(false);
  const [CloseFooterDetail, setFooterDetail] = useState(false);
  const [switchNavColor, setSwitchNavColor] = useState(false);
  const [cookieScroll, setCookieScroll] = useState(0);
  const [checkCookies, setCheckCookies] = useState();
  const [navSolid, setNavSolid] = useState(false);

  

  const [windowloading, setwindowloading] = useState(false);

  useEffect(() => {
    
    
    const cookieAccepted = Cookies.get("AcceptedCookies");
    if (cookieAccepted) {
      setCheckCookies(true);
    } else {
      setCheckCookies(false);
    }

    if (document.readyState === "loading") {
      setwindowloading(true);
    } else if (document.readyState === "interactive") {
      setwindowloading(true);
    } else if (document.readyState === "complete") {
      setwindowloading(false);
    }
  }, [checkCookies]);

  const clickCookies = () => {
    Cookies.set("AcceptedCookies", "true");
    setCheckCookies(true);
  };

  const toggle = () => {
    setMobileMenu(!OpenMobileMenu);
  };

  const moreClick = () => {
    setFooterDetail(!CloseFooterDetail);
  };

  const navChange = () => {
    if (window.scrollY >= 400) {
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

  const navSolidChange = () => {
    if (window.scrollY >= 400) {
      setNavSolid(true);
    } else {
      setNavSolid(false);
    }
  };
  window.addEventListener("scroll", navSolidChange);

  const loadedHandler = () => {
    if (document.readyState === "loading") {
      setwindowloading(true);
    } else if (document.readyState === "interactive") {
      setwindowloading(true);
    } else if (document.readyState === "complete") {
      setwindowloading(false);
    }
  };

  document.addEventListener("readystatechange", loadedHandler);
  return (
    <>
      {windowloading && <Loader />}
      
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
      <CookieAccept
        scroll={cookieScroll}
        checkCookies={checkCookies}
        click={clickCookies}
      />
      <HeroSection2 slides={SliderInfo} />
      <ViewProduct categorydata={categoryData}/>
      <OfferSection />
      <ChooseSection />
      <Product />
      <Footer detailActive={CloseFooterDetail} clickMore={moreClick} />
    </>
  );
};

export default Home;
