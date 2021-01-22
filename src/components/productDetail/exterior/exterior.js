import { Link } from "react-router-dom";
import styled from "styled-components";

export const ExteriorWrapper = styled.section`
  width: 100vw;
  height: 100%;
`;

export const ExteriorContainer = styled.div`
  width: 100vw;
  height: 100%;
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
  background-color: #e6e3de;
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

  @media all and (min-width: 768px) {
    position: absolute;
    top: -140px;
    bottom: 0;
    left: -45vw;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: #e6e3de;
  display: flex;
  margin: auto;
  position: relative;
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

export const ExteriorPaintsWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  @media all and (min-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

export const CategoryWrapper = styled.div`
  position: relative;
  text-align: center;

  @media all and (min-width: 768px) {
    text-align: right;
  }
`;

export const CategoryType = styled.button`
  width: 172px;
  height: 55px;
  background-color: white;
  border-radius: 3px;
  outline: none;
  border: 2px solid white;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  &:active {
    border: 2px solid black;
  }
  &:hover {
    border: 2px solid black;
  }
`;

export const CategoryDetails1 = styled.div`
  background-color: white;
  height: 100%;
  text-align: center;
  margin-top: 20px;
  display: ${({ activeState }) => (activeState ? "block" : "none")};

  @media all and (min-width: 768px) {
    display: ${({ activeState }) => (activeState ? "grid" : "none")};
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const CategoryDetailWrapper = styled.div``;
export const PaintImage = styled.img``;

export const PaintTitle = styled.h5`
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
`;

export const PaintType = styled.p`
  color: #838386;
  font-size: 16px;
  font-weight: 400;
`;

export const CategoryDetails2 = styled.div`
  background-color: white;
  text-align: center;
  margin-top: 20px;
  display: ${({ activeState }) => (activeState ? "block" : "none")};

  @media all and (min-width: 768px) {
    display: ${({ activeState }) => (activeState ? "grid" : "none")};
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
