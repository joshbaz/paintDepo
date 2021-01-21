import styled from 'styled-components';

export const ChooseWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fcfcfc;
  overflow:hidden;
`;

export const ChooseContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  background-color: #fcfcfc;
  overflow: hidden;
`;

export const ChooseTitle = styled.h1`
font-size:29px;
line-height: 34px;
font-weight: 300;
padding-top: 106px;
`;

export const ChooseList = styled.ul`
list-style: none;
position: relative;

@media all and (min-width: 768px){
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  width:90%;
  grid-template-rows: 1fr;
  
}
@media all and (min-width:850px){
  margin:auto;
}

`;

export const ChooseItem = styled.li`
  display: flex;
  justify-content: center;
  
`;

export const ChooseImg = styled.img`

width: 100px;
height:100%;
min-width:80px;
@media all and (max-width: 767px){
  width: 20%;
  min-width: 150px;
  height: 50%;
}
@media all and (max-width:310px){
  width: 20%;
  height:50%;
}
`;

export const ChooseText = styled.h3`
  width: 159.4px;
  height: 67.4px;
  font-weight: normal;
  font-size: 27.3259px;
  line-height: 32px;
  text-align: left;
  position: relative;
  top: 3.5rem;
  @media all and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1.7rem;
    font-size: 23px;
  }
  @media all and (max-width: 767px) {
    font-size: 23px;
    top: 4.5rem;
  }
  @media all and (max-width: 310px) {
    font-size: 15px;
    font-weight:bold;
  }
`;