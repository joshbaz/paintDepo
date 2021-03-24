import styled from "styled-components";
import { Link } from "react-router-dom";
export const SideMenuContainer = styled.div``;
export const SideMenuLink = styled.div`
  display: flex;
  color:  #E5E5E5;
  justify-content: space-between;
  padding: 24px;
  padding-bottom: 10px;
  list-style: none;
  text-decoration: none;
  font-size: 14px;
  z-index: 2;
  position: relative;
  align-items: center;

  @media all and (min-width: 1342px) {
    display: none;
  }
`;

export const SideIcon = styled.div`
  font-size: 16px;
  position: relative;
  top: 3px;
  font-size: 20px;
`;
export const SideMenuWrap = styled.div``;
export const SideMenuItem = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: #e5e5e5;
  text-transform: uppercase;
  font-weight: 600;
  list-style: none;
  text-decoration: none;
  font-size: 20px;
  z-index: 2;
`;

export const SideMenuNItem = styled.p`
  color: #e5e5e5;
  text-transform: uppercase;
  font-weight: 600;
  height: 100%;
  z-index: 30;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  font-size: 20px;
`;
export const Wrapper = styled.div`
  position: relative;
`;
export const DropdownLink = styled(Link)`
  position: relative;
  height: 20px;
  margin-bottom: 10px;
  display: block;
  text-decoration: none;
  margin-top: 25px;
`;

export const SideMenuDropItem = styled.p`
  color: black;
  left: 20px;
  z-index: 400;
  position: relative;
  display: block;
  font-size: 20px;
  font-weight: 600;
`;
export const SideMenuDropSubText = styled.p`
  color: black;
  font-size: 12px;
  left: 15px;
  position: relative;
  color: #032613;
`;
