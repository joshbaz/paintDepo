import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: auto;
  padding-top: 27px;
  margin-bottom: 35px;
  @media all and (min-width: 1366px) {
    width: 1090px;
    margin: auto;
    margin-bottom: 40px;
    margin-top: 60px;
  }
`;

export const HeadTitle = styled.h1`
  font-weight: 400;
  font-size: 29px;
  text-align: center;
  
  @media all and (min-width: 1366px) {
    font-weight: 300;
    font-size: 40px;
    line-height: 47px;
    color: #272727;
    display: flex;
    justify-content: center;
  }
`;

export const HeadText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 133.2%;
  text-align: center;
  color: #838386;
  margin-top:10px;
  @media all and (min-width: 1366px) {
    font-size: 20px;
    line-height: 23px;
    color: #838386;
    display: flex;
    justify-content: center;
  }
`;

export const ListsWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-row-gap: 10px;

  @media all and (min-width: 360px) {
    width: 70%;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    margin-top: 20px;
  }

  @media all and (min-width: 522px) {
    width: 342px;
  }
  @media all and (min-width: 698px) {
    width: 70%;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    margin-top: 20px;
  }
  @media all and (min-width: 768px) {
    width: 498px;
    margin: auto;
    margin-top: 20px;
  }

  @media all and (min-width: 1170px) {
    width: 768px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media all and (min-width: 1366px) {
    width: 800px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 20px;
  }
`;

export const ListsContainer = styled(Link)`
  width: 161.28px;
  height: 161.28px;
  oultine:none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
 
  @media all and (min-width: 1366px) {
    :nth-child(6) {
      grid-column: span 1 / 2;
      padding-left: 170px;
    }
    :nth-child(7) {
      padding-left: 170px;
    }
    :nth-child(8) {
      padding-left: 170px;
    }
    :nth-child(9) {
      padding-left: 170px;
    }

    :nth-child(10) {
      grid-column: 1;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 161.28px;
  height: 161.28px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: drop-shadow(0px 8.73036px 11.6405px rgba(0, 0, 0, 0.12));
  }
`;
export const ListImage = styled.img`
  width: 161.28px;
  height: 161.28px;

 
`;

export const ListTextWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ListText = styled.p`
width:80%;
text-align:center;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #fcfcfc;
  text-transform: uppercase;

`;
