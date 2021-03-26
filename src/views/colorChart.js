import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import {CommonHero, Lists} from '../components/common'
import ColorMetaData from '../meta/ColorFamily'

import { SliderColorChart } from "../data/heroSlider";
import colorchart from '../data/color_chart.json'
import CookieAccept from "../components/Cookies";
import Cookies from "js-cookie";
import Loader from "../components/Loader";
import Navigation2 from "../components/common/Navigation2";
import MobileMenu2 from "../components/common/MobileMenu2";

const ColorChart = () => {
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

    

       const scrollChange = () => {
         setCookieScroll(window.scrollY);
       };
       window.addEventListener("scroll", scrollChange);

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
        <ColorMetaData />
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
        <CommonHero slides={SliderColorChart} />

        <Lists Colordata={colorchart} />

        <Footer
          bg={"white"}
          detailActive={CloseFooterDetail}
          clickMore={moreClick}
        />
      </>
    );
}

export default ColorChart
