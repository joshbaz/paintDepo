import React, { useRef } from "react";
import {
  SideMenuLink,
  SideIcon,
  SideMenuItem,
  SideMenuWrap,
  DropdownLink,
  SideMenuDropItem,
  Wrapper,
  SideMenuContainer,
  SideMenuNItem,
} from "./subnavstyles";
import { useDetectOutsideClick } from "../../Hooks/DetectOutisdeClicks";
const SubMenu = ({ item }) => {
  const dropRef = useRef(null);
  const [subnav, setSubnav] = useDetectOutsideClick(dropRef, false);

  const showSubnav = () => {
    setSubnav((prevState) => !prevState);
  };
  return (
    <>
      <SideMenuContainer ref={dropRef}>
        {item.Checkpath === true ? (
          <SideMenuLink to={item.path} onClick={item.subNav && showSubnav}>
            <SideMenuWrap>
              <SideMenuItem to={item.path}>{item.title}</SideMenuItem>
            </SideMenuWrap>

            <SideIcon>
              {item.subNav && subnav
                ? item.icon
                : item.subNav
                ? item.icon
                : null}
            </SideIcon>
          </SideMenuLink>
        ) : (
          <SideMenuLink onClick={item.subNav && showSubnav}>
            <SideMenuWrap>
              <SideMenuNItem>{item.title}</SideMenuNItem>
            </SideMenuWrap>

            <SideIcon>
              {item.subNav && subnav
                ? item.icon
                : item.subNav
                ? item.icon
                : null}
            </SideIcon>
          </SideMenuLink>
        )}
        {subnav && (
          <Wrapper>
            {item.subNav.map((item, index) => {
              return (
                <DropdownLink to={item.path} key={index}>
                  <div>
                    <SideMenuDropItem>{item.title}</SideMenuDropItem>
                  </div>
                </DropdownLink>
              );
            })}
          </Wrapper>
        )}
      </SideMenuContainer>
    </>
  );
};

export default SubMenu;
