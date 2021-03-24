import React from 'react';

import {
  ViewWrapper,
  ViewContent,
  ViewContainer,
  ViewItem,
  ViewImage,
  ViewTextWrapper,
  ViewText,
  ViewWrap,
  ViewHeadWrap,
  ViewHeadTitle,
  ViewHeadText,
} from "./viewStyle";

const viewProduct = ({ categorydata, head, text, url }) => {

  return (
    <ViewWrapper id="view">
      <ViewHeadWrap>
        <ViewHeadTitle>{head}</ViewHeadTitle>
        <ViewHeadText>
          {text}
        </ViewHeadText>
      </ViewHeadWrap>
      <ViewWrap>
        {categorydata.map((data, index) => {
          return (
            <ViewContainer key={index} to={data.path}>
              <ViewContent>
                <ViewItem>
                  <ViewImage src={data.image} alt="" />
                </ViewItem>
              </ViewContent>
              <ViewTextWrapper>
                <ViewText>{data.title}</ViewText>
              </ViewTextWrapper>
            </ViewContainer>
          );
        })}
      </ViewWrap>
    </ViewWrapper>
  );
};

export default viewProduct
