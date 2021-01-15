import styled from "styled-components";
import { Link } from "react-router-dom";
export const ProductWrapper = styled.section`
  width: 100vw;
  height: 100%;
  margin-top: 80px;
  overflow: hidden;
`;

export const ProductContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ProductTitle = styled.h1`
  font-size: clamp(2rem, 2.5rem, 3rem);
  font-weight: 300;
  line-height: 43.36px;
  margin-bottom: 19px;
`;

export const ProductText = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-align: justify;
  line-height: 133.2%;
  width: 283px;
  height: 81px;
  margin: auto;

  @media all and (min-width: 768px) {
    width: 100%;
    margin: auto;
    text-align: center;
  }
`;

export const ProductContent = styled.ul`
  text-decoration: none;

  margin-top: 30px;
  @media all and (min-width: 768px) {
    display: flex !important;
    justify-content: center;
    width: 100%;
  }
  @media all and (min-width: 540px) {
    display: grid;
  }
`;
export const ProductItem = styled(Link)`
  list-style: none;
  position: relative;
  margin-bottom: 14px;
  @media all and (min-width: 768px) {
    width: 100%;
    bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;

  width: 100vw;
  height: 49.32px;
  background: #fcfcfc;
  text-align: center;
  opacity: 0.7;
  z-index: 200;
  bottom: 13px;
  @media all and (min-width: 985px) {
    bottom: 0;
    top: 42vh;
    left: 0;
    right: 0;
  }
  @media all and (min-width: 768px) {
    width: 100%;
    bottom: 3vh;
  }
  @media all and (min-width: 540px) {
    bottom: 4px;
  }
`;

export const ItemText = styled.h3`
  font-weight: bold;
  font-size: 17.26px;
  line-height: 19.85px;
  height: 100%;
  margin-top: 14px;
  font-family: Arial;
  color: #000000;
`;

export const ItemImage = styled.img`
  width: 90%;
  height: 271.37px;
  object-fit: cover;
  @media all and (min-width: 768px) {
    object-fit: contain;
    -o-object-fit: contain;
    height: 90%;
  }
  @media all and (min-width: 540px) {
    object-fit: contain;
  }
`;
