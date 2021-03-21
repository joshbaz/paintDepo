import React from "react";
import ArrowDown from "../../../assets/images/ArrowDown.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

import {
  HeroContainer,
  HeroSlider,
  ImageWrapper,
  ContentWrapper,
  ContentTitle,
  ContentText,
  CircleButtonWrap,
  CircleButton,
  ButtonWrapper,
  DownButton,
  ButtonImg,
} from "./styles2";

SwiperCore.use([Autoplay, Pagination]);
const HeroSliderCheck = {
  containerClass: "swipperContainer hero-slider",
  parallax: true,
  centeredSlides: true,
  spaceBetween: 0,
  effect: "slide",
};
const HeroSection2 = ({ slides }) => {
   
  

  return (
    <HeroContainer>
      <Swiper
        {...HeroSliderCheck}
        pagination={{
          el: ".swiperpagination",
          clickable: true,
        }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <HeroSlider>
                <ImageWrapper>
                  <img src={slide.Image} alt="" />
                </ImageWrapper>

                <ContentWrapper>
                  <ContentTitle>{slide.title}</ContentTitle>
                  <ContentText>{slide.subText}</ContentText>
                </ContentWrapper>
              </HeroSlider>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <CircleButtonWrap>
        <CircleButton className="swiperpagination"></CircleButton>
      </CircleButtonWrap>

      <ButtonWrapper>
        <DownButton
          to="view"
          smooth={true}
          duration={400}
          spy={true}
          exact="true"
          offset={-80}
        >
          <ButtonImg src={ArrowDown} />
        </DownButton>
      </ButtonWrapper>
    </HeroContainer>
  );
};

export default HeroSection2;
