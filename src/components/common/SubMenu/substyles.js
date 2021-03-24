import styled from "styled-components";
import { Link } from "react-router-dom";
export const SideMenuContainer = styled.div``;
export const SideMenuLink = styled.div`
  display: flex;
  color: green;
  justify-content: space-between;
  padding: 24px;
  list-style: none;
  text-decoration: none;
  font-size: 14px;
  z-index: 2;
  position: relative;
  align-items: center;
`;

export const SideIcon = styled.div`
  font-size: 16px;
  position: relative;
  top: 3px;
  margin-left: 8px;
  color: ${({ navigationChange, changeColor, navColor }) =>
    navigationChange ? changeColor : navColor}; ;
`;
export const SideMenuWrap = styled.div``;
export const SideMenuItem = styled(Link)`
  color: ${({ navigationChange, changeColor, navColor }) =>
    navigationChange ? changeColor : navColor};
  text-transform: uppercase;
  font-weight: 600;
  height: 100%;
  z-index: 30;
  text-decoration: none;
  outline: none;
  &:hover {
    color: ${({ textcolor }) =>
      textcolor === "white" ? "#BDCCC0" : "#3A7A44"};
  }
`;

export const SideMenuNItem = styled.p`
  color: ${({ navigationChange, changeColor, navColor }) =>
    navigationChange ? changeColor : navColor};
  text-transform: uppercase;
  font-weight: 600;
  height: 100%;
  z-index: 30;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${({ textcolor }) =>
      textcolor === "white" ? "#BDCCC0" : "#3A7A44"};
  }
`;
export const Wrapper = styled.div`
  position: absolute;
  background: #662583;
  width: 240px;
  height: 240px;
  top: 60px;
  right: ${({ checkdropdown }) =>
    checkdropdown === "Services" ? `470px` : `330px`};
  z-index: 20;

  .display {
    display: none;
  }
  .created {
    display: block;
  }
`;
export const DropdownLink = styled(Link)`
  position: relative;
  height: 100%;
width:100%;
  margin-bottom: 5px;
  padding-top: 20px;
  padding-bottom: 10px;
  display: block;
  text-decoration: none;


`;

export const SideMenuDropItem = styled.h1`
  color: #e5e5e5;
  
  z-index: 40;
  position: relative;
  display: block;
  font-weight:normal;
  font-size: 20px;
text-align:center;
  &:hover {
    color: #ffde00;
  }
`;
export const SideMenuDropSubText = styled.p`
  color: black;
  font-size: 12px;
  left: 15px;
  position: relative;
  color: #032613;
`;
export const WrapContainer = styled.div`
  display: block;
  
`;
