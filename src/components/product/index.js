import React from 'react';
import Interior from '../../assets/images/interior.png';
import Exterior from '../../assets/images/exterior.png';
import {
  ProductWrapper,
  ProductContainer,
  ProductHeadSection,
  ProductHeadTitle,
  ProductContentContainer,
  ProductTitle,
  ProductText,
  ProductContent,
  ProductItem,
  TextWrapper,
  ItemText,
  ItemImage,
} from "./productStyle";
const Product = () => {
    return (
      <ProductWrapper>
        <ProductContainer>
          <ProductHeadSection>
            <ProductHeadTitle>Products</ProductHeadTitle>
          </ProductHeadSection>

          <ProductContentContainer>
            <ProductTitle>Paint Samples</ProductTitle>
            <ProductText>Find the perfect colors for your home.</ProductText>
            <ProductContent>
              <ProductItem to="/interior">
                <ItemImage src={Interior} />
                <TextWrapper>
                  <ItemText>INTERIOR PAINTS & PRIMERS</ItemText>
                </TextWrapper>
              </ProductItem>

              <ProductItem to="/exterior">
                <ItemImage src={Exterior} />
                <TextWrapper>
                  <ItemText>EXTERIOR PAINTS & PRIMERS</ItemText>
                </TextWrapper>
              </ProductItem>
            </ProductContent>
          </ProductContentContainer>
        </ProductContainer>
      </ProductWrapper>
    );
}

export default Product
