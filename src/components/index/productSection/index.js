import React from 'react'
import Interior from '../../../assets/images/interior.png';
import Exterior from '../../../assets/images/exterior.png';
import {
  ProductWrapper,
  ProductContainer,
  ProductTitle,
  ProductText,
  ProductContent,
  ProductItem,
  ProductItem1,
  TextWrapper,
  TextWrapper1,
  ItemText,
  ItemImage,
} from "./productstyle";
const Product = () => {
    return (
      <ProductWrapper>
        <ProductContainer>
          <ProductTitle>OUR PRODUCTS</ProductTitle>
          <ProductText>
            Choose from our selection of decorative products from the Silkcoat
            Paints family
          </ProductText>
          <ProductContent>
            <ProductItem to="/products/interior">
            <ItemImage src={Interior} />
              <TextWrapper>
                <ItemText>INTERIOR PAINTS & PRIMERS</ItemText>
              </TextWrapper>
            </ProductItem>

            <ProductItem to="/products/exterior">
            <ItemImage src={Exterior} />
              <TextWrapper>
                <ItemText>EXTERIOR PAINTS & PRIMERS</ItemText>
              </TextWrapper>
              
            </ProductItem>
          </ProductContent>
        </ProductContainer>
      </ProductWrapper>
    );
}

export default Product
