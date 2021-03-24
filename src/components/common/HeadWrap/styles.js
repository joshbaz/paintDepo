import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
width:100%;
height:100%;
`;
export const HeadContentWrapper = styled.div`
  display: block;
  @media all and (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "col1 col2";
    height: 355px;
    width: 90%;
    margin: auto;
    padding-top: 80px;
    margin-bottom: 90px;
  }
`;
export const HeadWrapper = styled.div`
  text-align: center;
  background-color: ${({ color }) => color};
  color: ${({ txcolor }) => txcolor};
  height: 355px;
  width: 100%;

  @media all and (min-width: 768px) {
    grid-area: col2;
    height: 355px;
  }
`;
export const HeadContainer = styled.div`
  position: relative;
  top: 121px;
  @media all and (max-width: 286px) {
    top: 90px;
  }
`;
export const TextHead = styled.h1`
  font-size: 40px;
  font-weight: 300;
  line-height: 47px;
  position: relative;
  width: 80%;
  margin: auto;
  @media all and (min-width: 768px) {
    text-align: left;
  }
  @media all and (max-width: 286px) {
    font-size: 30px;
  }
`;

export const Headp = styled.p`
  position: relative;
  width: 80%;
  margin: auto;
  margin-top: 20px;

  @media all and (min-width: 768px) {
    text-align: justify;
  }
`;

export const BackButtonWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  background: ${({color})=>(color)};
  @media all and (min-width: 768px) {
    position: absolute;
    top: -140px;
    bottom: 0;
    left: -45vw;
    margin-top: 0;
    display: none;
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: black;

  outline: none;
  border: none;
  background: ${({ color }) => color};
  display: flex;
  margin: auto;
  position: relative;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 768px) {
    background-color: #fcfcfc;
  }
`;

export const BtnText = styled.h5`
  font-weight: 700;
  font-size: 12px;
  line-height: 13.8px;
  padding-left: 5px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 376px;
  position: relative;

  @media all and (min-width: 768px) {
    grid-area: col1;
    height: 355px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 376px;

  @media all and (min-width: 768px) {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    -o-object-fit: cover;
    height: 100%;
  }
`;

export const ButtonDownWrapper = styled.div`
  position: absolute;
  top: 130;
  left: 50vw;
  right: 0;
  bottom: 20px;
  @media all and (min-width: 768px) {
    display: none;
  }
`;
export const ButtonDown = styled(Link)`
  width: 36px;
  height: 36px;
  background: transparent;
  outline: none;
  border: none;
`;
export const ButtonArrow = styled.img`
  width: 15px;
  height: 7.5px;
`;
