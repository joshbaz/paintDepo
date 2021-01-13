import styled from 'styled-components';

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
font-size: 37px;
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
`;

export const ProductContent = styled.ul`
text-decoration: none;

margin-top: 30px;

`;
export const ProductItem = styled.li`
list-style: none;
position: relative;
margin-bottom: 14px;

`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 13.9rem;
  width: 100vw;
  height: 49.32px;
  background: #fcfcfc;
  text-align: center;
  opacity: 0.7;
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
  @media all and (max-width: 540px){
    object-fit:contain;
  }
  
`;