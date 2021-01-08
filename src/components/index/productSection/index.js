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
    TextWrapper,
    ItemText,
    ItemImage
} from './productstyle';
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
            <ProductItem>
              <TextWrapper>
                <ItemText >INTERIOR PAINTS & PRIMERS</ItemText>
              </TextWrapper>

              <ItemImage src={Interior} />
            </ProductItem>

            <ProductItem>
              <TextWrapper>
                <ItemText >EXTERIOR PAINTS & PRIMERS</ItemText>
              </TextWrapper>
              <ItemImage src={Exterior} />
            </ProductItem>
          </ProductContent>
        </ProductContainer>
      </ProductWrapper>
    );
}

export default Product
