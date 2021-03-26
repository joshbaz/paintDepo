import React, { useState } from "react";
import Footer from "../components/footer";
import ProductsMetaRoute from '../meta/Products';

import ViewProduct from "../components/index/viewProduct";
import { CommonHero } from "../components/common";
import { SliderProductChart } from "../data/heroSlider";
import { categoryData } from "../data/categoryData";
import Navigation2 from "../components/common/Navigation2";
import MobileMenu2 from "../components/common/MobileMenu2";
import {
  
  useRouteMatch,
} from "react-router";



const Products = () => {
  const [OpenMobileMenu, setMobileMenu] = useState(false);
  const [CloseFooterDetail, setFooterDetail] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [switchNavColor, setSwitchNavColor] = useState(false);
  const [navSolid, setNavSolid] = useState(false);

  //route match
  const {url} = useRouteMatch();
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
      <ProductsMetaRoute />
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
      <CommonHero slides={SliderProductChart} />
      <ViewProduct
        url={url}
        categorydata={categoryData}
        head={"Find the Perfect Colors For Your Home"}
        text={
          "Our catalogue will help you navigate the product list, like a pro so that you can choose the perfect finish for your rooms"
        }
      />
      <Footer
        bg={"white"}
        detailActive={CloseFooterDetail}
        clickMore={moreClick}
      />
    </>
  );
};

export default Products;
