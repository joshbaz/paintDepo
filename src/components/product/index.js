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
            <ProductText>
              Find the perfect colors for your home.
            </ProductText>
            <ProductContent>
              <ProductItem>
                <TextWrapper>
                  <ItemText>INTERIOR PAINTS & PRIMERS</ItemText>
                </TextWrapper>

                <ItemImage src={Interior} />
              </ProductItem>

              <ProductItem>
                <TextWrapper>
                  <ItemText>EXTERIOR PAINTS & PRIMERS</ItemText>
                </TextWrapper>
                <ItemImage src={Exterior} />
              </ProductItem>
            </ProductContent>
          </ProductContentContainer>
        </ProductContainer>
      </ProductWrapper>
    );
}

export default Product
