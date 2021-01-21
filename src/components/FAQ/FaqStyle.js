import styled from 'styled-components';
import ArrowUpImg from '../../assets/images/ArrowUp.png';
import ArrowDownImg from '../../assets/images/ArrowDown2.png';
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
  justify-content:space-between;
`;

export const Question = styled.h3`
font-size: 16px;
line-height: 18px;
font-weight:bold;
padding-top: 20px;
padding-bottom: 20px;
text-transform:uppercase;
padding-left:20px;

`;

export const Button = styled.div`
outline:none;
border: none;
margin-right: 20px;
position:relative;
text-align:center;
`;
export const WrapButton = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ activeStatus, checkId }) => {
    let status;
    activeStatus.map((data, index) => {
      if (data.id === checkId) {
        return (status = data.active);
      } else {
        return null;
      }
    });

    if (status) {
      return `url(${ArrowUpImg}) no-repeat`;
    } else {
      return `url(${ArrowDownImg}) no-repeat`;
    }
  }};
  object-fit: contain;
  position: relative;
  background-size:contain;
  top:5px;
`;

export const ArrowUp = styled.img`


`;
export const ArrowDown = styled.img``;

export const FaqAnswer = styled.p`
  border-bottom: 1px solid #838386;
  padding-top:20px;
  padding-bottom:20px;
  padding-left: 20px;
  font-size:20px;
  font-weight:530;
  transition: all 0.2s ease-out;
  display:${({activeStatus, checkId})=>{
    let status;
    
   activeStatus.map((data, index) => {
      if (data.id === checkId) {
        return (status = data.active);
      } else {
        return null;
      }
    });

    if (status) {
      return "block";
    } else {
      return "none";
    }
  }}
`;