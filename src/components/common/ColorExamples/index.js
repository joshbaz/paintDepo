import React from "react";

import {
  Wrapper,
  Container,
  TextWrapper,
  TextContent,
  SubText,
  ImageWrapper,
  TextContentContainer,
  ContentButtonWrap,
  ButtonText,
} from "./styles";
const SiteExamples = () => {
  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <TextContentContainer>
            <TextContent>
              “Arteco, which allows for facade designs, creates antique and
              serene spaces.”
            </TextContent>
          </TextContentContainer>

          <ContentButtonWrap widthchange={true}>
            <ButtonText to={"/contact"}>START NOW</ButtonText>
          </ContentButtonWrap>
        </TextWrapper>

        <ImageWrapper>
          <img
            src="https://ik.imagekit.io/dk30bxu4rix/Paint_Depo/Website/Assets/gallery/red_9GY0vucufM.png"
            alt=""
          />

          <img
            src="https://ik.imagekit.io/dk30bxu4rix/Paint_Depo/Website/Assets/gallery/brown_Fu4iXsjG9t.png"
            alt=""
          />

          <img
            src="https://ik.imagekit.io/dk30bxu4rix/Paint_Depo/Website/Assets/gallery/blue_mlqhdx_RB.png"
            alt=""
          />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

export { SiteExamples };
