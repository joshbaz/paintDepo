import styled from "styled-components";
import { Link } from "react-router-dom";

export const ViewWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fcfcfc;
  padding-top: 65px;
  padding-bottom: 75px;
  overflow: hidden;
`;

export const ViewHeadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: auto;
  padding-top: 27px;
  margin-bottom: 35px;
  @media all and (min-width: 768px) {
    width: 700px;
  }

  @media all and (min-width: 1151px) {
    width: 800px;
  }
  
  @media all and (min-width: 1366px) {
    width: 1090px;
    margin: auto;
    margin-top: 27px;
    margin-bottom: 35px;
  }
`;

export const ViewHeadTitle = styled.h1`
  font-weight: 400;
  font-size: 29px;
  text-align: center;
  text-transform: uppercase;
  @media all and (min-width: 1366px) {
    height: 47px;
    font-size: 40px;
    font-weight: 300;
    line-height: 47px;
    text-transform: uppercase;
  }
`;

export const ViewHeadText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 133.2%;
  text-align: justify;
  @media all and (min-width: 1366px) {
    width: 65%;
    height: 100%;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #838386;
    margin: auto;
    margin-top: 20px;
  }
`;

export const ListsWrap = styled.div`
  position: relative;
  width: 90%;
  margin: auto;

  @media all and (min-width: 768px) {
    width: 700px;
  }

  @media all and (min-width: 1151px) {
    width: 800px;
  }
 
  @media all and (min-width: 1366px) {
    width: 1090px;
    margin: auto;
  }
`;

export const ListsContainer = styled(Link)`
  width: 161.28px;
  height: 161.28px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 1366px) {
    :nth-child(6) {
      grid-column: span 1 / 2;
      padding-left: 170px;
    }
    :nth-child(7) {
      padding-left: 170px;
    }
    :nth-child(8) {
      padding-left: 170px;
    }
    :nth-child(9) {
      padding-left: 170px;
    }

    :nth-child(10) {
      grid-column: 1;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 161.28px;
  height: 161.28px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: drop-shadow(0px 8.73036px 11.6405px rgba(0, 0, 0, 0.12));
  }
`;
export const ListImage = styled.img`
  width: 161.28px;
  height: 161.28px;
`;

export const ListTextWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ListText = styled.p`
  width: 80%;
  text-align: center;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #fcfcfc;
  text-transform: uppercase;
`;

export const SliderNavigation = styled.div``;
export const NavigationWrapper = styled.div`
  display: flex;
  width: 45px !important;
  height: 32px !important;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SliderLeft = styled.div`
  color: red;
  path {
    fill: ${({ PrevColor }) => PrevColor};
    opacity: ${({ opacityPrev }) => opacityPrev};
  }
  svg {
    width: 76px;
    height: 43px;
  }
  position: absolute;
  top: 170px;
  z-index: 20;
  left: -20px;
  @media all and (max-width: 412px) {
    top: 60px;
    left: -45px;
  }
  @media all and (min-width: 413px) {
    top: 60px;
    left: -55px;
  }
  @media all and (min-width: 1366px) {
    top: 60px;
    left: -60px;
  }
`;

export const SliderRight = styled.div`
  color: blue;

  path {
    fill: ${({ nextColor }) => nextColor};
    opacity: ${({ opacityNext }) => opacityNext};
  }
  svg {
    width: 76px;
    height: 43px;
  }
  margin-left: 20px;
  position: absolute;
  top: 0;
  z-index: 10;

  right: -20px;
  @media all and (max-width: 412px) {
    top: 60px;
    right: -45px;
  }
  @media all and (min-width: 413px) {
    top: 60px;
    right: -55px;
  }
  @media all and (min-width: 1366px) {
    top: 60px;
    right: -60px;
  }
`;
