import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  
  p {
    color: red;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 50px;
  }
`;

export const HeadWrap = styled.div`
background: #B0E6FF;
height: 252px;
@media all and (min-width: 1366px){
    height: 300px;
}

.
`;

export const HeadText = styled.h1`
  font-weight: 300;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  position: relative;
  top: 152px;

  @media all and (min-width: 768px) {
    top: 110px;
    text-align: left;
    left: 4vw;
  }

  @media all and (min-width: 1366px){
      width:1060px;
      margin:auto;
  }
`;

export const Wrappers = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media all and (max-width: 506px) {
    text-align: center;
  }
  @media all and (min-width: 506px) {
  }

  @media all and (min-width: 1000px) {
   width:950px;
   position:relative;
   margin:auto;
    top: -100px;
  }
`;

export const Containers = styled.div`
  margin-top: 15px;
  background-color: white !important;
  width: 100%;

  @media all and (min-width:1366px){
      width:96%;
  }
`;
