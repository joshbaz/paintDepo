import React from "react";
import Logo from "../../../assets/images/Logo.svg";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  MobileIcon,
  NavMenu,
  NavBtnWrap,
  NavBtn,
  NavMenuWrap,
  LogoIcon,
  MenuIconWrap,
  WebLogoIcon,
  ContainerWrap,
  NavLogo,
  LogoImage,
} from "./navstyles";
import SubMenu from "../SubMenu";
import { NavData } from "../../../data/navigationData";
const Navigation2 = ({
  toggle,
  navColor,
  navigationChange,
  changeColor,
  navSolid,
  bgColor,
}) => {
  return (
    <Nav change={navSolid} bgcolor={bgColor} >
      <ContainerWrap>
        <MenuIconWrap>
          <NavLogo to="/">
            <LogoImage src={Logo} />
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </MenuIconWrap>

        <NavMenuWrap>
          <NavLogo to="/">
            <LogoImage src={Logo} />
          </NavLogo>
          <NavMenu>
            {NavData.map((item, index) => {
              return (
                <SubMenu
                  textColor={navColor}
                  item={item}
                  key={index}
                  navColor={navColor}
                  navigationChange={navigationChange}
                  changeColor={changeColor}
                />
              );
            })}
          </NavMenu>
        </NavMenuWrap>
      </ContainerWrap>
    </Nav>
  );
};

export default Navigation2;
