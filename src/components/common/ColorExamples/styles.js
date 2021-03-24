import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
margin-top:60px;

@media all and (min-width:768px){
  margin-top:0;
}
`;

export const Container = styled.div`
@media all and (min-width:1366px){
    width: 1000px;
    margin:auto;
}
`;

export const TextWrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 33px;
  @media all and (min-width: 1366px) {
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    margin:auto;
  }
`;
export const TextContentContainer = styled.div`
  position: relative;
`;
export const TextContent = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 16px;

  @media all and (min-width: 1366px) {
    text-align: left;
    width: 500px;
    font-weight: 600;
  }
`;

export const SubText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  justify-content: center;
  font-style: italic;
  margin-bottom: 20px;
  @media all and (min-width: 1366px) {
    text-align: left;
    justify-content: left;
    font-style: italic;
  }
`;

export const ImageWrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 290px;
    height: 240px;
    margin-bottom:20px;
  }

  @media all and (min-width: 1366px) {
    flex-direction: row;
    width: 100%;

    img {
      width: 290px;
      height: 270px;
      object-fit: contain;
      margin: auto;
      filter: drop-shadow(11.1429px 11.1429px 29.1429px rgba(0, 0, 0, 0.129));
    }
  }
`;

export const ContentButtonWrap = styled.div`
  background: #662583;
  width: 265px;
  width: ${({ widthchange }) => (widthchange ? "285px" : "265px")};
  margin: auto;
  padding: 16px 57px;
  border-radius: 3rem;
  &:hover {
    filter: drop-shadow(13px 13px 34px rgba(0, 0, 0, 0.2));

    border-image-source: linear-gradient(
      180deg,
      #fde1a9 0%,
      #fdebc7 32.81%,
      #ffffff 100%
    );
  }
  @media all and (min-width: 1366px) {
    margin: ${({ btnClass }) => {
      if (btnClass === "Heroservices") {
        return "0px";
      }
    }};
  }
`;

export const ButtonText = styled(Link)`
  text-decoration: none;
  font-size: 19.3902px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
`;