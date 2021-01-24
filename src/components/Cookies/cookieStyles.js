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
  
`;

export const Content = styled.div`
width:100%;
height:100%;
position: relative;
align-items:center;
justify-content:center;
padding-top: 130px;
`;
export const Title = styled.h5`
  width: 273px;
  height: 43px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin: auto;
`;

export const CookieText = styled.p`
  width: 272px;
  height: 198px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: justify;
  margin: auto;
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
`;
export const BtnText = styled.h5`
  padding-top: 12px;
  
`;