import React from 'react';
import paintSample from '../../../assets/images/paintSample.png';
import paintImage from '../../../assets/images/paintImage.png'
import {
    ViewWrapper,
    ObjectImageWrapper,
    ObjectImage,
    ProductWrapper,
    ImageWrapper,
    ProductImage,
    ProductContent,
    ContentTitle,
    ContentText,
    ContentButton,
    ContentButtonWrapper,
    ViewContainer
} from './viewStyle';
const viewProduct = () => {
    return (
      <ViewWrapper id="view">
        <ViewContainer>
          <ObjectImageWrapper>
            <ObjectImage src={paintSample} />
          </ObjectImageWrapper>

          <ProductWrapper>
            <ImageWrapper>
              <ProductImage src={paintImage} />
            </ImageWrapper>

            <ProductContent>
              <ContentTitle>VIEW BY PRODUCT</ContentTitle>
              <ContentText>
                Whatever the room,we have a product for you.
              </ContentText>
              <ContentButtonWrapper>
                <ContentButton to="/products">VIEW PRODUCTS</ContentButton>
              </ContentButtonWrapper>
            </ProductContent>
          </ProductWrapper>
        </ViewContainer>
      </ViewWrapper>
    );
}

export default viewProduct
