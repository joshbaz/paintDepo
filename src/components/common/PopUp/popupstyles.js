import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top:0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

export const Container = styled.div`
width: 1000px;
height:auto;
min-height: 550px;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background: #fff;

display:grid;
grid-template-columns: 1fr 1fr;
position:relative;

`;

export const Icon = styled.div`
  cursor: pointer;
  font-size: 2rem;
  color: #662583;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
  width: 40px;
  float: right;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 5;
`;
export const ImageWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 249.98px;
    height: 239px;
    object-fit: cover;

    &.adjust {
      width: 320px !important;
      height: 269px !important;
      
      
    }
  }
`;

export const DocTitle = styled.div`
  font-size: 31.0149px;
  line-height: 40px;
  color: #000000;
  margin-top:20px;
`;
export const ButtonWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:10px;
`;
export const DocDownload = styled.a`
  width: auto;
  min-width: 177px;
  height: 65.49px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #662583;
  margin-bottom: 10px;
  font-size: 21.5189px;
  line-height: 25px;
  color: #662583;
  text-decoration: none;
`;

export const ContentWrapper = styled.div`
  padding-top: 50px;
`;

export const ProductTitle = styled.h5`
  font-weight: 500;
  font-size: 27px;
  line-height: 20px;
  margin-bottom:10px;
`;

export const ProductText = styled.p`
  font-size: 19px;
  line-height: 24px;
  text-align: justify;
  width:430px;
  margin-bottom:20px;
`;

export const ProductSize = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
  font-size: 21.0648px;
  line-height: 29px;
  text-align: justify;
  p {
    margin-left: 10px;
    font-size: 17px;
    line-height: 29px;
  }
`;

export const ProductFeatures = styled.div`
  margin-bottom: 10px;
  h5 {
    font-size: 19px;
    line-height: 29px;
  }
  p {
    margin-left: 10px;
    font-size: 17px;
    line-height: 21px;
  }
`;

export const ProductSurface = styled.div`
  margin-bottom: 20px;
  width:450px;
  text-align:justify;
  h5 {
      margin-bottom:5px;
    font-size: 19px;
    line-height: 29px;
  }
  p {
    
    font-size: 17px;
    line-height: 21px;
  }
`;
