import React from "react";
import LogoI from "../../../assets/images/Logo2.svg";
import SubMenu from "./subnav";
import { NavData } from "../../../data/navigationData";
import {
  MobileMenuContainer,
  
  CloseIcon,
  Icon,
  NavMenuWrap,
  NavMenu,
  
  Logo,
  LogoImage,
  HeadSection,
  
} from "./mobilestyles";
const MobileMenu = ({ mobileActive, toggle }) => {
  return (
    <MobileMenuContainer mobileActive={mobileActive}>
      <HeadSection>
        <Logo to="/">
          <LogoImage src={LogoI} />
        </Logo>
        <Icon>
          <CloseIcon onClick={toggle} />
        </Icon>
      </HeadSection>

      <NavMenuWrap>
        <NavMenu>
          {NavData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
          
        </NavMenu>
      </NavMenuWrap>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
