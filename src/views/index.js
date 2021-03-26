import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import ChooseSection from "../components/index/choose";
import HeroSection2 from "../components/index/Hero2";
import OfferSection from "../components/index/offerSection";
import colorchart from "../data/color_chart.json";
import ColorSection from '../components/index/ColorSection';
import ViewProduct from "../components/index/viewProduct";

import Navigation2 from '../components/common/Navigation2'
import MobileMenu2 from '../components/common/MobileMenu2';
import { SliderInfo } from "../data/heroSlider";
import { categoryData } from "../data/categoryData";
import HomeMetaRoute from "../meta/Home";

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
      <HomeMetaRoute />
      <MobileMenu2 mobileActive={OpenMobileMenu} toggle={toggle} />
      <Navigation2
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
      <ViewProduct
        categorydata={categoryData}
        head={"Welcome to The Paint depo"}
        text={
          "Choose from our selection of paints, primers & decorative products from the Silkcoat Paints family"
        }
      />
      <OfferSection />
      <ChooseSection />
      <ColorSection
        Colordata={colorchart}
        head={"CHOOSE A COLOR FAMILY"}
        text={
          "Choose from our selection of decorative products from the Silkcoat Paints family"
        }
      />
      <Footer
        bg={"#fcfcfc"}
        detailActive={CloseFooterDetail}
        clickMore={moreClick}
      />
    </>
  );
};

export default Home;
