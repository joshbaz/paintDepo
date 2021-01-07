
import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    LogoImage
} 
from './navStyle';
const Navigation = () => {
    return (
      <Nav>

        <NavLogo to ="/" >
          <LogoImage src ={Logo}/>
        </NavLogo>

        <MobileIcon>
          <FaBars/>
        </MobileIcon>


        <NavMenu>
          <NavItem>
            <NavLink to="home">HOME</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to ="products">PRODUCTS</NavLink>
          </NavItem>

          <NavItem> 
            <NavLink to="ourstory">OUR STORY</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="contactus">CONTACT US</NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
    );
}

export default Navigation
