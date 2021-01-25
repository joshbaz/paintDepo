import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top:${({scrollBy})=>(`${scrollBy}px`)};
  left: 0;
  z-index: 20;
  background: #272727;
  width: 100%;
  height: 100vh;
  min-height: 1200px;
  opacity: 0.9;
  transition:all 0.1s ease-in-out; 
  display: ${({checkdisplay})=>(checkdisplay ? 'none': 'block')}
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  background: #ffffff;
  position: relative;
  top: 20vh;
  left: 30vw;
  @media all and (max-width: 619px) {
    left: 20vw;
  }
  @media all and (max-width: 523px) {
    left: 10vw;
  }

  @media all and (max-width: 469px) {
    width: 300px;
    height: 400px;
    left: 15vw;
  }

  @media all and (max-width: 385px) {
    left: 10vw;
  }

  @media all and (max-width: 360px) {
    width: 230px;
    height: 400px;
    left: 20%;
  }
@media all and (max-width: 320px){
  left: 15vw;
}
  @media all and (max-width: 315px) {
    left: 10vw;
  }
  @media all and (max-width: 262px) {
    left: 5vw;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-top: 130px;

  @media all and (max-width: 469px) {
    padding-top: 60px;
  }
  @media all and (max-width: 360px) {
    padding-top: 40px;
  }
`;
export const Title = styled.h5`
  width: 273px;
  height: 43px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin: auto;
  padding-bottom: 60px !important;

  @media all and (max-width: 360px) {
    width: 90%;
  }
`;

export const CookieText = styled.p`
  width: 272px;
  height: 198px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: justify;
  margin: auto;

  @media all and (max-width: 360px) {
    width: 90%;
  }
`;

export const CookieBtn = styled.div`
  width: 272px;
  height: 40px;
  background: #a17ab3;
  border-radius: 3px;
  text-align: center;
  font-size: 15px;
  line-height: 18px;
  margin: auto;
  color: #fcfcfc;
  position: relative;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 360px) {
    width: 90%;
    margin-top: 40px;
  }
`;
export const BtnText = styled.h5`
  padding-top: 12px;
  
`;