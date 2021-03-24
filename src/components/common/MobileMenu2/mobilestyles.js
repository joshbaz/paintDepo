import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
export const MobileMenuContainer = styled.aside`
  height: 100%;
  width: 100%;
  position: fixed;
  align-items: center;
  transition: all 0.2s ease-in-out;
  opacity: ${({ mobileActive }) => (mobileActive ? "100%" : "0")};
  top: ${({ mobileActive }) => (mobileActive ? "0" : "-100%")};
  background-color: #662583;
  z-index: 50;
  overflow: hidden;
  @media all and (min-width: 1342px) {
    display: none;
  }
`;

export const HeadSection = styled.div`
position:relative;
height: 80px;
align-items: center;
display: flex;
justify-content:space-between;
`;

export const Logo = styled.div`

`;

export const LogoImage = styled.img`
color: white;
height: 40px;
`;
export const Icon = styled.div`

font-size: 2rem;
cursor: pointer;

`;
export const CloseIcon = styled(FaTimes)`
color: #E9E9E9;

`;
export const CancelIcon = styled.img``;
export const NavMenuWrap = styled.div`
  position: relative;
  top: 80px;
  width: 100%;
  z-index: 10;
  @media all and (min-width: 1342px) {
    display: none;
  }
`;
export const NavMenu = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const NavBtnWrap = styled.div`
  display: none;
`;

export const NavBtn = styled.div`
  color: #3a7a44;
  font-weight: 600;
  border: 3px solid #3a7a44;
  border-radius: 15px;
  padding: 5px 15px;
`;
