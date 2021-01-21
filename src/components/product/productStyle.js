import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductWrapper = styled.section`
width: 100vw;
height: 100%;


`;
export const ProductContainer = styled.div`
width:100vw;
height: 100%;
`;

export const ProductHeadSection = styled.div`

width: 100%;
  background: rgba(50, 186, 0, 0.3);
  height: 252px;
`;
export const ProductHeadTitle = styled.h1`
  font-weight: 300;
  font-size: 40px;
  line-height: 47px;
  color: #272727;
  text-align: center;
  position: relative;
  top: 152px;
`;

export const ProductContentContainer = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
`;

export const ProductTitle = styled.h1`
  font-size: 34px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 19px;
  margin-top: 30px;
`;

export const ProductText = styled.p`
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  line-height: 20px;
  height: 81px;
`;

export const ProductContent = styled.ul`
  text-decoration: none;
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 90%;
  margin: auto;
  margin-top: 30px;
  grid-gap: 2rem;

  @media all and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
export const ProductItem = styled(Link)`
  list-style: none;
  position: relative;
  margin: 0;
  text-decoration: none;
  width: 100%;

  @media all and (min-width: 768px) {
    width: 100%;
    bottom: 0;
  }
`;

export const ProductItem1 = styled(Link)`
  list-style: none;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  text-decoration: none;

  z-index: 2;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50;
  bottom: 0;

  display: flex;
  justify-content: center;
  width: 100%;
  height: 49.32px;
  background: #fcfcfc;
  text-align: center;
  opacity: 0.7;
  z-index: 200;
`;

export const ItemText = styled.h3`
  font-weight: bold;
  font-size: 17.26px;
  line-height: 19.85px;
  height: 100%;
  margin-top: 14px;
  font-family: Arial;
  color: #000000;
  @media all and (max-width: 278px) {
    font-size: 12px;
  }
`;

export const ItemImage = styled.img`
  position: relative;
  width: 100%;
  height: 271.37px;
  object-fit: contain;
  @media all and (min-width: 768px) {
    object-fit: contain;
    -o-object-fit: contain;
    height: 100%;
  }
  @media all and (min-width: 540px) {
    object-fit: contain;
  }

  @media all and (max-width: 398px) {
    object-fit: cover;
    -o-object-fit: cover;
  }
`;