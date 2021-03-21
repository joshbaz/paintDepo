import styled from "styled-components";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const HeroWrap = styled.div`
  display: flex;
`;
export const HeroSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: contain;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-bottom: 130px;
`;

export const ContentTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.8rem;
  text-align: center;
  color: #ffffff;
  @media all and (min-width: 1000px) {
    font-size: 90px;
  }
`;

export const ContentText = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  @media all and (max-width: 440px) {
    width: 80%;
    text-align:center;
  }
  @media all and (min-width: 1000px) {
    font-size: 28px;
   
  }
`;

export const CircleButtonWrap = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 30px;
  right: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CircleButton = styled.div`
  margin-left: 20px;
  transition: all 0.6s ease-in-out;

  &.swiperpagination {
    display: flex;
    justify-content: space-between;
    height: 50px;
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    top: 0 !important;

    .swiper-pagination-bullet {
      background-color: white;
      margin-left: 5px !important;
      width: 10px;
      height: 10px;
      opacity: 1;
      transform: scale(0.9);
    }

    .swiper-pagination-bullet-active {
      border: 2px solid white;
      background: transparent;
      transform: scale(1.2);
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  z-index: 10;
`;

export const DownButton = styled(Link)`
  height: 50px;
  width: 50px;
`;

export const ButtonImg = styled.img`
  width: 30px;
  height: 15px;
`;
