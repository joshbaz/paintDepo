import React, { useRef } from "react";
import {
  SideMenuLink,
  SideIcon,
  SideMenuItem,
  SideMenuNItem,
  SideMenuWrap,
  DropdownLink,
  SideMenuDropItem,
  Wrapper,
  SideMenuContainer,
  SideMenuDropSubText,
  WrapContainer,
} from "./substyles";

import { useDetectOutsideClick } from "../../Hooks/DetectOutisdeClicks";
const SubMenu = ({
  item,
  textColor,
  navColor,
  navigationChange,
  changeColor,
}) => {
  const dropRef = useRef(null);
  const [subnav, setSubnav] = useDetectOutsideClick(dropRef, false);

  const showSubnav = () => {
    //setSubnav(!subnav);
    setSubnav((prevState) => !prevState);
  };

  return (
    <>
      <SideMenuContainer ref={dropRef}>
        {item.Checkpath === true ? (
          <SideMenuLink to={item.path} onClick={item.subNav && showSubnav}>
            <SideMenuWrap>
              <SideMenuItem
                navColor={navColor}
                navigationChange={navigationChange}
                changeColor={changeColor}
                textcolor={textColor}
                to={item.path}
              >
                {item.title}
              </SideMenuItem>
            </SideMenuWrap>

            <SideIcon
              navColor={navColor}
              navigationChange={navigationChange}
              changeColor={changeColor}
              textcolor={textColor}
            >
              {item.subNav ? item.icon : item.subNav ? item.icon : null}
            </SideIcon>
          </SideMenuLink>
        ) : (
          <SideMenuLink onClick={item.subNav && showSubnav}>
            <SideMenuWrap>
              <SideMenuNItem
                navColor={navColor}
                navigationChange={navigationChange}
                changeColor={changeColor}
                textcolor={textColor}
              >
                {item.title}
              </SideMenuNItem>
            </SideMenuWrap>

            <SideIcon
              navColor={navColor}
              navigationChange={navigationChange}
              changeColor={changeColor}
              textcolor={textColor}
            >
              {item.subNav ? item.icon : item.subNav ? item.icon : null}
            </SideIcon>
          </SideMenuLink>
        )}

        {subnav && (
          <Wrapper checkdropdown={item.title}>
            <WrapContainer checkdropdown={item.title}>
              {item.subNav.map((item, index) => {
                return (
                  <DropdownLink to={item.path} key={index}>
                    <div>
                      <SideMenuDropItem>{item.title}</SideMenuDropItem>
                    </div>
                  </DropdownLink>
                );
              })}
            </WrapContainer>
          </Wrapper>
        )}
      </SideMenuContainer>
    </>
  );
};

export default SubMenu;
