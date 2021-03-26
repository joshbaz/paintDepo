
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div``;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  @media all and (min-width: 505px) {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;

    margin-top: 40px;
  }
  @media all and (min-width: 543px) {
    width: 505px;
    margin-top: 140px;
  }

  @media all and (min-width: 761px) {
    width: 400px;
  }

  @media all and (min-width: 909px) {
    width: 768px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media all and (min-width: 1355px) {
    width: 900px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 130px;
  }
  @media all and (min-width: 1366px) {
    width: 1000px;
    height: 100%;
    margin: auto;
    margin-top: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-row-gap: 30px;
  }
`;

export const ListWrap = styled.div`
  width: 250px;
  height: 288px;
  object-fit: cover;
  text-decoration: none;
  img {
    width: 240px;
    height: 238.08px;
    object-fit: cover;

    &.adjust {
      object-fit: contain;
    }
  }
`;

export const ListText = styled.p`
  text-align: center;
  font-size: 25px;
  line-height: 35px;
  color:#000000;
`;
