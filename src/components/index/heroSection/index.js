import React, { useState, useRef, useEffect } from 'react';

import {
  HeroWrapper,
  HeroContainer,
  HeroSlide,
  HeroSlider,
  HeroContent,
  HeroImage,
  HeroHead,
  HeroP,
  SliderButtons,
  PreviousArrow,
  NextArrow,
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
    return (
        <HeroWrapper id="home">
        <HeroContainer>
            {slides.map((slide, index)=>{
                return (
                    <HeroSlide key={index}>
                    {index === current && (
                    <HeroSlider>
                        <HeroImage src={slide.Image} alt={slide.alt}/>
                        <HeroContent>
                            <HeroHead>{slide.title}</HeroHead>
                            <HeroP>{slide.subText}</HeroP>
                        </HeroContent>
                    </HeroSlider>
                    )}
                   
                    </HeroSlide>
                )
            })}
            <SliderButtons>
                <PreviousArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/>
            </SliderButtons>
        </HeroContainer>
            
        </HeroWrapper>
    )
}

export default HeroSection
