import styled from 'styled-components';

export const FaqWrapper = styled.section`
width: 100%;
height: 100%;
`;

export const FaqContainer = styled.div`
width: 100%;
height: 100%;
`;

export const HeadWrapper = styled.div`
  height: 252px;
  width: 100%;
  background: rgba(165, 26, 93, 0.3);
`;

export const HeadText = styled.h1`
font-weight:300;
font-size: 40px;
line-hight: 47px;
text-align: center;
position: relative;
top: 117px;
`;

export const FaqContent = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const FaqTitle = styled.h3`
text-align:center;
font-weight: 700;
font-size: 30px;
line-height: 34px;
`;

export const FaqText = styled.p`
  text-align:left;
  font-size: 21px;
  line-height: 25px;
  width:90%;
  margin:auto;
  margin-top: 40px;
`;

export const FaqDetailsWrapper = styled.div`
  margin: auto;
  border: 1px solid #838386;
  border-radius: 8px;
  margin-top: 30px;
  width: 90%;
`;

export const FaqDetails = styled.div`

`;

export const FaqQuestion = styled.div`
  border-bottom: 1px solid #838386;
  display: flex;
  
  background: rgba(248, 231, 232, 0.5);
  position: relative;
  align-items:center;
  
`;

export const Question = styled.h3`
font-size: 16px;
line-height: 18px;
font-weight:bold;
padding-top: 20px;
padding-bottom: 20px;


`;

export const Button = styled.button`
outline:none;
border: none;
margin-left: 20px;

`;

export const ArrowUp = styled.img`


`;
export const ArrowDown = styled.img``;

export const FaqAnswer = styled.p`
  border-bottom: 1px solid #838386;
`;