import React from "react";
import { useRouteMatch } from "react-router-dom";
import {
  Wrapper,
  Container,
  HeadWrap,
  HeadTitle,
  HeadText,
  ListsWrap,
  ListsContainer,
  ListImage,
  ListText,
  ListTextWrap,
  ImageWrapper,
} from "./listsytle";
const Lists = ({ Colordata }) => {
    const {url} = useRouteMatch();
  return (
    <Wrapper>
      <Container>
        <HeadWrap>
          <HeadTitle>Choose A Color Family</HeadTitle>
          <HeadText>We have over 1000 paints colors to choose from </HeadText>
        </HeadWrap>

        <ListsWrap>
          {Colordata.colorchart.map((data, index) => {
            return (
              <ListsContainer key={index} to={`${url}/${data.id}`}>
                <ImageWrapper>
                  <ListImage src={data.imageIndex} />

                  <ListTextWrap>
                    <ListText>{data.shortName}</ListText>
                  </ListTextWrap>
                </ImageWrapper>
              </ListsContainer>
            );
          })}
        </ListsWrap>
      </Container>
    </Wrapper>
  );
};

export { Lists };
