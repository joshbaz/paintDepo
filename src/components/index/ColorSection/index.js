import React, { useState } from "react";


import {
  ViewWrapper,
  ListsContainer,
  ListText,
  ListImage,
  ListTextWrap,
  ImageWrapper,
  ListsWrap,
  ViewHeadWrap,
  ViewHeadTitle,
  ViewHeadText,
  SliderNavigation,
  NavigationWrapper,
  SliderLeft,
  SliderRight,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Navigation]);
const HeroSliderCheck = {
  containerClass: "swipperContainer hero-slider",
  parallax: true,
  centeredSlides: true,
  spaceBetween: 0,
  effect: "slide",
};

const ColorSection = ({ Colordata, head, text, url }) => {
     const [prevColor, setPrevColor] = useState("grey");
     const [opacityPrev, setOpacityPrev] = useState("0.3");
     const [nextColor, setNextColor] = useState("#838386");
     const [opacityNext, setOpacityNext] = useState("1");
    const length = Colordata.colorchart.length;

    const changeColor = (slide) => {
      if (
        slide.realIndex < length - 1 &&
        slide.realIndex !== length - 1 &&
        slide.realIndex !== 0
      ) {
        setPrevColor("#838386");
        setOpacityPrev("1");
      } else if (slide.realIndex === length- 1 ) {
        setOpacityNext("0.3");
        setNextColor("grey");
      } else {
        setOpacityPrev("0.3");
        setPrevColor("grey");
        setNextColor("#838386");
        setOpacityNext("1");
      }
    };

  return (
    <ViewWrapper id="view">
      <ViewHeadWrap>
        <ViewHeadTitle>{head}</ViewHeadTitle>
        <ViewHeadText>{text}</ViewHeadText>
      </ViewHeadWrap>
      <ListsWrap>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            350: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            444: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            561: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            569: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            1366: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          onSlideChange={changeColor}
        >
          {Colordata.colorchart.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <ListsContainer key={index} to={`/colorfamily/${data.id}`}>
                  <ImageWrapper>
                    <ListImage src={data.imageIndex} />

                    <ListTextWrap>
                      <ListText>{data.shortName}</ListText>
                    </ListTextWrap>
                  </ImageWrapper>
                </ListsContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <SliderNavigation>
          <NavigationWrapper>
            <SliderLeft
              className="prev"
              PrevColor={prevColor}
              opacityPrev={opacityPrev}
            >
              <svg
                width="119"
                height="119"
                viewBox="0 0 119 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M77.8814 26.2438C79.8177 28.1801 79.8177 31.3196 77.8814 33.2559L51.6375 59.4998L77.8814 85.7438C79.8177 87.6801 79.8177 90.8196 77.8814 92.7559C75.945 94.6923 72.8056 94.6923 70.8693 92.7559L41.1193 63.0059C39.1829 61.0696 39.1829 57.9301 41.1193 55.9938L70.8693 26.2438C72.8056 24.3074 75.945 24.3074 77.8814 26.2438Z"
                  fill="#9C9FA1"
                />
              </svg>
            </SliderLeft>

            <SliderRight
              className="next"
              nextColor={nextColor}
              opacityNext={opacityNext}
            >
              <svg
                width="119"
                height="119"
                viewBox="0 0 119 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.8693 26.4938C42.8056 24.5574 45.945 24.5574 47.8814 26.4938L77.6314 56.2438C79.5677 58.1801 79.5677 61.3196 77.6314 63.2559L47.8814 93.0059C45.945 94.9423 42.8056 94.9423 40.8693 93.0059C38.9329 91.0696 38.9329 87.9301 40.8693 85.9938L67.1132 59.7498L40.8693 33.5059C38.9329 31.5696 38.9329 28.4301 40.8693 26.4938Z"
                  fill="#9C9FA1"
                />
              </svg>
            </SliderRight>
          </NavigationWrapper>
        </SliderNavigation>
      </ListsWrap>
    </ViewWrapper>
  );
};

export default ColorSection;
