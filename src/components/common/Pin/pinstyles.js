import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 10px 5px;
  
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;
  justify-content: center;
  img {
    display: flex;
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    cursor: zoom-in;
  }
  @media all and (min-width: 300px) {
    width: 280px;
  }

  @media all and (min-width: 350px) {
    width: 285px;
  }

  @media all and (min-width: 360px) {
    width: 100%;
    max-height: 400px;
    img {
      height: 100%;
    }
  }
  @media all and (min-width: 374px) {
    width: 100%;
    max-height: 400px;

    img {
      height: 100%;
    }
  }

  @media all and (min-width: 506px) {
    width: 100%;
    max-height: 400px;

    img {
      height: 100%;
    }
  }
`;
