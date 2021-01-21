import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const ProductWrapper = styled.section`
width: 100vw;
height: 100%;
margin-top: 80px;
overflow:hidden;
`;

export const ProductContainer = styled.div`
text-align: center;
width: 100%;
height: 100%;
overflow:hidden;
`;

export const ProductTitle = styled.h1`
  font-size: 29px;
  font-weight: 300;
  line-height: 43.36px;
  margin-bottom: 19px;
  @media all and (min-width: 768px) {
    font-size: 29px;
  }
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
    font-size: 28px;
  }

  @media all and (min-width: 500px) {
    width: 90%;
    font-size: 23px;
  }
`;

export const ProductContent = styled.ul`
  text-decoration: none;
  position:relative;
  height:100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 90%;
  margin:auto;
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
 top:0;
 bottom:0;
 left:0;
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
  @media all and (max-width:278px){
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