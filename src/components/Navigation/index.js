import React from "react";
import Logo from "../../assets/images/Logo.svg";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  LogoImage,
} from "./navStyle";
const Navigation = ({ toggle, navColor, navigationChange, changeColor, navSolid, bgColor }) => {
  return (
    <Nav change={navSolid} bgcolor={bgColor}>
      <NavLogo to="/">
        <LogoImage src={Logo} />
      </NavLogo>

      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>

      <NavMenu>
        <NavItem>
          <NavLink
            to="/"
            navColor={navColor}
            navigationChange={navigationChange}
            changeColor={changeColor}
          >
            HOME
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="products"
            navColor={navColor}
            navigationChange={navigationChange}
            changeColor={changeColor}
          >
            PRODUCTS
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="#"
            navColor={navColor}
            navigationChange={navigationChange}
            changeColor={changeColor}
          >
            OUR STORY
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="contact"
            navColor={navColor}
            navigationChange={navigationChange}
            changeColor={changeColor}
          >
            CONTACT US
          </NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navigation;
