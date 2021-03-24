import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import ArrowDown from "../../../assets/images/ArrowDown.png";

import {
  Wrapper,
  HeadContentWrapper,
  HeadWrapper,
  HeadContainer,
  TextHead,
  Headp,
  BackButtonWrapper,
  Button,
  BtnText,
  ImageWrapper,
  Image,
  ButtonDownWrapper,
  ButtonDown,
  ButtonArrow,
} from "./styles";
const HeadWrap = ({Colordata}) => {
  return (
    <Wrapper>
      <HeadContentWrapper>
        <HeadWrapper txcolor={Colordata.color} color={Colordata.hex}>
          <HeadContainer>
            <TextHead>{Colordata.productName}</TextHead>
            <Headp>
              From warm taupes to a soft beige with a hint of purple,
              <br /> these are complex and beautiful.
            </Headp>
            <BackButtonWrapper color={Colordata.hex}>
              <Button to="/products" color={Colordata.hex}>
                <FaArrowLeft />
                <BtnText>BACK PRODUCTS</BtnText>
              </Button>
            </BackButtonWrapper>
          </HeadContainer>
        </HeadWrapper>

        <ImageWrapper>
          <Image src={Colordata.coverphoto} />
          <ButtonDownWrapper>
            <ButtonDown>
              <ButtonArrow src={ArrowDown} />
            </ButtonDown>
          </ButtonDownWrapper>
        </ImageWrapper>
      </HeadContentWrapper>
    </Wrapper>
  );
};

export {HeadWrap};
