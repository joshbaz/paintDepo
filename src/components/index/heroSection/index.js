import React, { useState, useRef, useEffect } from 'react';
import ArrowDown from '../../../assets/images/ArrowDown.png';
import {
  HeroWrapper,
  HeroContainer,
  HeroSlide,
  HeroSlider,
  HeroContent,
  HeroImage,
  HeroHead,
  HeroP,
  SliderButtonRight,
  SliderButtonLeft,
  PreviousArrow,
  NextArrow,
  ButtonWrapper,
  DownButton,
  ButtonImg,
  CircleButtonWrap,
  CircleButton,
} from "./heroStyles";


const HeroSection = ({slides}) => {
 const [current, setCurrent] =useState(0);
 
 const length = slides.length;
 const timeout = useRef(null);

 useEffect(()=>{
     const nextSlide=()=>{
        setCurrent(current=>(current===length-1? 0: current + 1))
        }

        timeout.current = setTimeout(nextSlide, 15000);

        return function() {
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        }
 }, [current, length])
 const nextSlide = ()=> {
     if (timeout.current) {
       clearTimeout(timeout.current);
     }
     setCurrent(current === length - 1 ? 0: current + 1)
 }

 const prevSlide = ()=> {
     if (timeout.current) {
       clearTimeout(timeout.current);
     }
     setCurrent(current === 0 ? length - 1 : current - 1)
 }

 if(!Array.isArray(slides) || slides.length <=0) {
     return null
 }

 const getClicked = (event)=> {
     let theindex= parseInt(event.target.id)
     setCurrent(theindex)
 }
 const dotButtons = slides.map((slide, index)=>{
     
     return <CircleButton key={index} circleActive={index} currentActive={current} id={index} onClick={getClicked}></CircleButton>;
 })
    return (
      <HeroWrapper id="home">
        <HeroContainer>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage src={slide.Image} alt={slide.alt} />
                    <HeroContent>
                      <HeroHead>{slide.title}</HeroHead>
                      <HeroP>{slide.subText}</HeroP>
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}
          <CircleButtonWrap>{dotButtons}</CircleButtonWrap>
          <ButtonWrapper>
            <DownButton to="/">
              <ButtonImg src={ArrowDown} />
            </DownButton>
          </ButtonWrapper>
          <SliderButtonLeft>
            <PreviousArrow onClick={prevSlide} />
          </SliderButtonLeft>
          <SliderButtonRight>
            <NextArrow onClick={nextSlide} />
          </SliderButtonRight>
        </HeroContainer>
      </HeroWrapper>
    );
}

export default HeroSection
