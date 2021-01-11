import styled from "styled-components";

export const InteriorWrapper = styled.section`
  width: 100vw;
  height: 100%;
`;

export const InteriorContainer = styled.div`
  width: 100vw;
  height: 100%;
`;

export const HeadWrapper = styled.div`
  text-align: center;
  background-color: #e6e3de;
  height: 355px;
  width: 100vw;
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
`;

export const BackButtonWrapper = styled.div`
  position: relative;
  margin-top: 30px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: #e6e3de;
  display: flex;
  margin: auto;
  position: relative;
  align-items: center;
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
  display: none;
`;
export const Image = styled.img`
  width: 100vw;
  height: 376px;
  display: none;
`;
export const ButtonDown = styled.button`
  width: 36px;
  height: 36px;
  background: transparent;
  outline: none;
  border: none;
  position: absolute;
  left: 187px;
  top: 320px;
`;
export const ButtonArrow = styled.img`
  width: 15px;
  height: 7.5px;
`;

export const InteriorPaintsWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7edfc;
`;

export const CategoryWrapper = styled.div`
  position: relative;
  text-align: center;
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
  &.active {
    border: 2px solid black;
  }
  &.hover {
    border: 2px solid black;
  }
`;

export const CategoryDetails1 = styled.div`
  background-color: white;
  height: 100%;
  margin-top: 20px;
`;

export const PaintImage = styled.img``;

export const PaintTitle = styled.h5``;

export const PaintType = styled.p``;

export const CategoryDetails2 = styled.div`
  background-color: #f7edfc;
`;