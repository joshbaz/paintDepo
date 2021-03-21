import React from 'react';
import paintSample from '../../../assets/images/Productbypaint.png';
import paintImage from '../../../assets/images/paintImage.png'
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
import { categoryData } from '../../../data/categoryData';
const viewProduct = ({ categorydata }) => {
  return (
    <ViewWrapper id="view">
      <ViewHeadWrap>
        <ViewHeadTitle>Welcome to The Paint depo</ViewHeadTitle>
        <ViewHeadText>
          Choose from our selection of paints, primers & decorative products
          from the Silkcoat Paints family
        </ViewHeadText>
      </ViewHeadWrap>
      <ViewWrap>
        {categoryData.map((data, index) => {
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
