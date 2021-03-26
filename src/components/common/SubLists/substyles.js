import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
width:100%;
overflow:hidden;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  margin-top: 10px;
  grid-row-gap: 10px;
  @media all and (min-width: 360px) {
    width: 90%;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    margin-top: 20px;
  }

  @media all and (min-width:522px){
    width:422px;
  }
  @media all and (min-width: 698px) {
    width: 90%;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    margin-top: 20px;
  }
  @media all and (min-width: 768px) {
    width: 668px;
    margin: auto;
    margin-top: 140px;
  }

  @media all and (min-width: 1170px) {
    width: 768px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media all and (min-width: 1366px) {
    width: 900px;
    height: 100%;
    margin: auto;
    margin-top: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;

export const ListWrap = styled.div`
  width: 100%;
  height: 100%;
  margin:auto;
  object-fit: contain;
  img {
    width: 179.23px;
    height: 144.4px;
    object-fit: contain;
  }
  @media all and (min-width: 1366px) {
    width: 179.23px;
    height: 144.4px;
    object-fit: cover;
    img {
      width: 179.23px;
      height: 144.4px;
      object-fit: cover;
    }
  }
`;