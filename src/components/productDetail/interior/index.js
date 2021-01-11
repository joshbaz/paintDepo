import React from 'react';
import {FaArrowLeft} from 'react-icons/fa';
import InteriorBg from "../../../assets/images/InteriorImage.png";
import ArrowDown from '../../../assets/images/ArrowDown.png'
import Silkomat from "../../../assets/images/silkomat.svg";
import Velvetto from '../../../assets/images/Velvetto.svg';
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
} from "./interiorStyle";
const InteriorSection = () => {
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
                <Button>
                  <FaArrowLeft />
                  <BtnText>BACK PRODUCTS</BtnText>{" "}
                </Button>
              </BackButtonWrapper>
            </HeadContainer>
          </HeadWrapper>

          <ImageWrapper>
            <Image src={InteriorBg} />
            <ButtonDown>
              <ButtonArrow src={ArrowDown} />
            </ButtonDown>
          </ImageWrapper>

          <InteriorPaintsWrapper>
            <CategoryWrapper>
              <CategoryType>Normal</CategoryType>
              <CategoryType>Decorative</CategoryType>
            </CategoryWrapper>

            <CategoryDetails1>
              <PaintImage src={Silkomat} />
              <PaintTitle>Silkomat</PaintTitle>
              <PaintType>silk Finish</PaintType>
            </CategoryDetails1>

            <CategoryDetails2>
              <PaintImage src={Velvetto} />
              <PaintTitle>Velvetto</PaintTitle>
              <PaintType>Smooth Fine Texture</PaintType>
            </CategoryDetails2>
          </InteriorPaintsWrapper>
        </InteriorContainer>
      </InteriorWrapper>
    );
}

export default InteriorSection
