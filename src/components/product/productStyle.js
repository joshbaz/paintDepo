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

  margin-top: 10px;
`;
export const ProductItem = styled.li`
  list-style: none;
  position: relative;
  margin-bottom: 40px;
  width: 100%;
  
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 13.9rem;
  width: 100vw;
  height: 49.32px;
  background: #fcfcfc;
  text-align: center;
  opacity: 0.7;
  border-radius:3px;
  margin:auto;
`;
export const ItemText = styled.h3`
  font-weight: bold;
  font-size: 17.26px;
  line-height: 19.85px;
  height: 100%;
  margin-top: 14px;
  font-family: Arial;
  color: #000000;
  text-align: center;
  width: 100%;

  @media all and (max-width: 280px) {
    font-size: 14.26px;
  }
`;

export const ItemImage = styled.img`
  width: 85vw;
  height: 271.37px;
`;