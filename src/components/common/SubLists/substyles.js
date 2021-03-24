import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div``;

export const ListContainer = styled.div`
@media all and (min-width: 1366px){

    width:900px;
    height: 100%;
    margin: auto;
    margin-top: 150px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap:20px;
   
}
`;

export const ListWrap = styled.div`
  width: 179.23px;
  height: 144.4px;
  object-fit: cover;
  img {
    width: 179.23px;
    height: 144.4px;
    object-fit: cover;
  }
`;