import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const OfferWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #FCFCFC;
  overflow:hidden;
`;

export const OfferContainer = styled.div`
  width: 90%;
  height: 100%;
  text-align: center;
  background-color: #fcfcfc;
  overflow: hidden;
  margin:auto;

  @media all and (min-width: 768px){
    width: 700px;
  }

  @media all and (min-width: 1151px){
    width: 800px;
  }
  @media all and (min-width: 1366px){
    width: 1090px;
  }
`;

export const OfferTitle = styled.h1`
font-weight: 400;
font-size: 29px;
text-align: center;
margin-bottom: 14px;
padding-top: 86px;
`;

export const OfferText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 133.2%;
  text-align: justify;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 72px;
  
`;

export const OfferButtonWrapper = styled.div`
  width: 100%;
  padding-bottom: 86px;
  
`;

export const OfferButton = styled(Link)`
  text-decoration: none;
  border: 3px solid black;
  outline: none;
  border-radius: 5px;
  height: 65px;
  width: 295.45px;
  font-size: 20px;
  line-height: 23px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  color:black;

  @media all and (max-width: 248px) {
    width: 50%;
    height: 50%;
    font-size: 10px;
    
  }
`;
