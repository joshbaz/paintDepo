import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  background-color: ${({ change, bgcolor }) => (change ? "#fcfcfc" : bgcolor)};
  box-shadow: ${({ change }) =>
    change ? "0px 4px 20px rgba(0, 0, 0, 0.04)" : "0px"};
  position: -webkit-sticky;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  z-index: 40;
`;

export const ContainerWrap = styled.div`
  width: 100%;
  height: 80px;

 

`;

export const NavLogo = styled(Link)`
justify-self: flex-start;
cursor: pointer;
padding-left: 5px;
@media all and (min-width: 768px){
    padding-left: 5vw;
}
`;
export const LogoImage = styled.img`
height: 40px;
width:200px;
`;
export const MenuIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  @media all and (min-width: 1342px) {
    display: none;
  }
`;

export const LogoIcon = styled(Link)`
  margin-left: 30px;
  display: ${({ displayfalse }) => (displayfalse ? "none" : "block")};
  img {
    width: 53.42px;
    height: 66.12px;
  }
  .aleroGreen {
    display: ${({ displaywhite }) => (displaywhite ? "none" : "block")};
  }

  .aleroWhite {
    display: ${({ displaywhite }) => (displaywhite ? "block" : "none")};
  }
`;
export const MobileIcon = styled.div`
 color: #662583;
padding-right:5px;
 cursor: pointer;
 position relative;
 height: 40px;
 top: 0.3rem;
 font-size: 20px;
@media all and (min-width: 1000px) {
 display: none;   
}
`;

export const NavMenuWrap = styled.div`
  display: flex;
align-items:center;
  margin: auto;

  @media all and (max-width: 1341px) {
    display: none;
  }
`;
export const WebLogoIcon = styled(Link)`
  margin-left: 20px;

  .whiteLogo {
    width: 154.42px;
    height: 70.12px;
    display: ${({ displaywhite }) => (displaywhite ? "block" : "none")};
  }

  .GreenLogo {
    width: 154.42px;
    height: 70.12px;
    display: ${({ displaywhite }) => (displaywhite ? "none" : "block")};
  }
  @media all and (min-width: 999px) {
    display: ${({ displayfalse }) => (displayfalse ? "none" : "block")};
  }
`;
export const NavMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const NavBtnWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

export const NavBtn = styled(Link)`
  text-decoration: none;

  color: ${({ textcolor }) => (textcolor === "white" ? "#ffffff" : "#3a7a44")};
  font-weight: 600;
  border: ${({ textcolor }) =>
    textcolor === "white" ? "2.9px solid #ffffff" : "2.9px solid #3a7a44"};
  border-radius: 22px;
  padding: 10px 27px;

  &:hover {
    color: ${({ textcolor }) => (textcolor === "white" ? "black" : "#3a7a44")};
    background: ${({ textcolor }) =>
      textcolor === "white" ? "#ffffff" : "rgba(58, 122, 68, 0.23)"};
    border: ${({ textcolor }) =>
      textcolor === "white" ? "2.9px solid #ffffff" : "2.9px solid #3A7A44"};
    transition-duration: 0.4s;
  }
  @media all and (max-width: 797px) {
    padding: 5px 10px;
    font-size: 13px;
  }
`;
