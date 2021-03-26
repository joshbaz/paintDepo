import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import GalleryMetaData from '../meta/Gallery';
import CookieAccept from "../components/Cookies";
import Cookies from "js-cookie";
import { SiteExamples } from "../components/common/ColorExamples";
import Loader from "../components/Loader";
import Navigation2 from "../components/common/Navigation2";
import MobileMenu2 from "../components/common/MobileMenu2";
import { useParams } from "react-router";
import GalleryS from '../components/common/Gallery/gallery'
import axios from "axios";
const Gallery = ({ ...props }) => {
  const [OpenMobileMenu, setMobileMenu] = useState(false);
  const [CloseFooterDetail, setFooterDetail] = useState(false);
  const [switchNavColor, setSwitchNavColor] = useState(false);
  const [cookieScroll, setCookieScroll] = useState(0);
  const [checkCookies, setCheckCookies] = useState();
  const [navSolid, setNavSolid] = useState(false);
  const [windowloading, setwindowloading] = useState(false);
  const [pins, setNewPins] = useState([]);

  const { id } = useParams();

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
  }, [checkCookies, id]);

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
    if (window.scrollY >= 0) {
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


   const getNewPins = () => {
     axios
       .get("https://josh-imageserver.herokuapp.com/image/v1/all/images")
       .then((response) => {
         let images = response.data;
         console.log(images);
         images.sort((a, b) => {
           return 0.5 - Math.random();
         });
         setNewPins(images);
       })
       .catch((error) => {
         console.log(error);
       });
   };
   useEffect(() => {
     getNewPins();
   }, []);
  return (
    <>
      {windowloading && <Loader />}
      {!windowloading && (
        <>
          <GalleryMetaData />
          <MobileMenu2 mobileActive={OpenMobileMenu} toggle={toggle} />
          <Navigation2
            toggle={toggle}
            navColor="#662583"
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

          <GalleryS Imgdata={ImageData} pins={pins} />
          <SiteExamples />
          <Footer
            bg={"white"}
            detailActive={CloseFooterDetail}
            clickMore={moreClick}
          />
        </>
      )}
    </>
  );
};

export default Gallery;
