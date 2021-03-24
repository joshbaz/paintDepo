import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import { ProductLists } from "../components/common";

import Navigation2 from "../components/common/Navigation2";
import MobileMenu2 from "../components/common/MobileMenu2";

import CookieAccept from "../components/Cookies";
import Cookies from "js-cookie";
import Loader from "../components/Loader";
import {  useParams } from "react-router";
import productExterior from "../data/products_exterior.json";
import productInterior from "../data/products_interior.json";
import productDecorative from "../data/products_decorative.json";
import productSilk from "../data/products_silkplaster.json";
import ProductPopup from "../components/common/PopUp";

const ProductsLists = ({ ...props }) => {
  const [OpenMobileMenu, setMobileMenu] = useState(false);
  const [CloseFooterDetail, setFooterDetail] = useState(false);
  const [switchNavColor, setSwitchNavColor] = useState(true);
  const [cookieScroll, setCookieScroll] = useState(0);
  const [checkCookies, setCheckCookies] = useState();
  const [navSolid, setNavSolid] = useState(true);
  const [paintData, setPaintData] = useState({});
  const [paintLists, setPaintLists] = useState([]);
  const [windowloading, setwindowloading] = useState(false);
  const [renderdisplay, setRenderDisplay] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [productID, setProductID] = useState();

  const openModal = (e) => {
    let productId = parseInt(e.target.id);
    setProductID(productId);
    setShowModal((prev) => !prev);
    
  };
  const { item } = useParams();
  useEffect(() => {
    
    if (item === "exterior") {
      setPaintData(productExterior.ProductList);
      setPaintLists(productExterior.ExteriorPaint);
      setRenderDisplay(false);
    } else if (item === "decorative") {
      setPaintData(productDecorative.ProductList);
      setPaintLists(productDecorative.PaintProducts);
      setRenderDisplay(false);

    } else if (item === "silkplaster") {
      setPaintData(productSilk.ProductList);
      setPaintLists(productSilk.PaintProducts);
       setRenderDisplay(false);
    } else if (item === "interior") {
      setPaintData(productInterior.ProductList);
      setPaintLists(productInterior.PaintProducts);
         setRenderDisplay(false);
    } 
    
    else {

      props.history.replace(`/${item}`);
      setwindowloading(true);
    }

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
  }, [checkCookies,props, item]);

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
      {!windowloading && (
        <>
          {!renderdisplay ? (
            <>
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

              <ProductLists
                openModal={openModal}
                paintdata={paintData}
                paintlist={paintLists}
              />
              <ProductPopup
                product={productID}
                paintlist={paintLists}
                showModal={showModal}
                setShowModal={setShowModal}
              />
              <Footer detailActive={CloseFooterDetail} clickMore={moreClick} />
            </>
          ) : (
            <Loader />
          )}
        </>
      )}
    </>
  );
};

export default ProductsLists;
