import React from 'react';
import ViewProduct from "../components/index/viewProduct";
import { categoryData } from "../data/categoryData";
import {
  ProductWrapper,
  ProductContainer,
  ProductHeadSection,
  ProductHeadTitle,
  ProductContentContainer,
} from "./productStyle";
const Product = () => {
    return (
      <ProductWrapper>
        <ProductContainer>
          <ProductHeadSection>
            <ProductHeadTitle>Products</ProductHeadTitle>
          </ProductHeadSection>

          <ProductContentContainer>
            <ViewProduct categorydata={categoryData} />
          </ProductContentContainer>
        </ProductContainer>
      </ProductWrapper>
    );
}

export default Product
