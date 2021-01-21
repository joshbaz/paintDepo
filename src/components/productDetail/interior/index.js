import React, { useState } from 'react';
import {FaArrowLeft} from 'react-icons/fa';
import InteriorBg from "../../../assets/images/InteriorImage.png";
import ArrowDown from '../../../assets/images/ArrowDown.png'

import {
  InteriorWrapper,
  InteriorContainer,
  HeadWrapper,
  TextHead,
  Headp,
  BackButtonWrapper,
  Button,
  ImageWrapper,
  ButtonDown,
  InteriorPaintsWrapper,
  CategoryWrapper,
  CategoryType,
  CategoryDetails1,
  PaintImage,
  PaintTitle,
  PaintType,
  CategoryDetails2,
  BtnText,
  HeadContainer,
  Image,
  ButtonArrow,
  ButtonDownWrapper,
  CategoryDetailWrapper,
} from "./interiorStyle";
const InteriorSection = ({Normal, Decorative}) => {
  const [normalActive, setNormalActive] = useState(true);
  const [decorativeActive, setDecorativeActive] = useState(false);

  const normalClicked = ()=>{
    if (normalActive){
      return;
    } else {
      setNormalActive(!normalActive);
      setDecorativeActive(!decorativeActive);
    }
  }

  const  decorativeClicked = () => {
    if (decorativeActive) {
      return;
    } else {
      setDecorativeActive(!decorativeActive);
      setNormalActive(!normalActive);
      
    }
  };
    return (
      <InteriorWrapper>
        <InteriorContainer>
          <HeadWrapper>
            <HeadContainer>
              <TextHead>Interior Paints & Premiers</TextHead>
              <Headp>
                From warm taupes to a soft beige with a hint of purple, these
                are complex and beautiful.
              </Headp>
              <BackButtonWrapper>
                <Button to="/products">
                  <FaArrowLeft />
                  <BtnText>BACK PRODUCTS</BtnText>
                </Button>
              </BackButtonWrapper>
            </HeadContainer>
          </HeadWrapper>

          <ImageWrapper>
            <Image src={InteriorBg} />
            <ButtonDownWrapper>
              <ButtonDown>
                <ButtonArrow src={ArrowDown} />
              </ButtonDown>
            </ButtonDownWrapper>
          </ImageWrapper>

          <InteriorPaintsWrapper>
            <CategoryWrapper>
              <CategoryType onClick={normalClicked}>Normal</CategoryType>
              <CategoryType onClick={decorativeClicked}>
                Decorative
              </CategoryType>
            </CategoryWrapper>

            <CategoryDetails1 activeState={normalActive}>
              {Normal.map((product, index) => {
                return (
                  <CategoryDetailWrapper key={index}>
                    <PaintImage src={product.image} />
                    <PaintTitle>{product.title}</PaintTitle>
                    <PaintType>{product.type}</PaintType>
                  </CategoryDetailWrapper>
                );
              })}
            </CategoryDetails1>

            <CategoryDetails2 activeState={decorativeActive}>
              {Decorative.map((product, index) => {
                return (
                  <CategoryDetailWrapper key={index}>
                    <PaintImage src={product.image} />
                    <PaintTitle>{product.title}</PaintTitle>
                    <PaintType>{product.type}</PaintType>
                  </CategoryDetailWrapper>
                );
              })}
            </CategoryDetails2>
          </InteriorPaintsWrapper>
        </InteriorContainer>
      </InteriorWrapper>
    );
}

export default InteriorSection
