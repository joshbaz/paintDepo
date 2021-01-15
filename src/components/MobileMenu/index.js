import React from 'react';
import LogoI from '../../assets/images/Logo2.svg';
import {
    MenuContainer,
    Icon,
    CloseIcon,
    MenuWrap,
    MenuItem,
    Logo,
    LogoImage,
    HeadSection,
    MenuLink

} from './mobilestyle';
const MobileMenu = ({mobileActive, toggle}) => {
    return (
      <MenuContainer activeMenu={mobileActive} onclick={toggle}>
        <HeadSection>
          <Logo to="home">
            <LogoImage src={LogoI} />
          </Logo>
          <Icon>
            <CloseIcon onClick={toggle} />
          </Icon>
        </HeadSection>

        <MenuWrap>
          <MenuItem>
            <MenuLink to="/" onClick={toggle}>
              HOME
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink to="products" onClick={toggle}>
              PRODUCTS
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink to="ourstory" onClick={toggle}>
              OUR STORY
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink to="contact" onClick={toggle}>
              CONTACT US
            </MenuLink>
          </MenuItem>
        </MenuWrap>
      </MenuContainer>
    );
}

export default MobileMenu
