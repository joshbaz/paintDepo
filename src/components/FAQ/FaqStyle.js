import styled from 'styled-components';
import ArrowUpImg from '../../assets/images/ArrowUp.png';
import ArrowDownImg from '../../assets/images/ArrowDown2.png';
import { Link } from 'react-router-dom';
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
  background: rgba(228, 6, 19, 0.3);

  @media all and (min-width: 768px) {
    height: 400px;
  }
`;

export const HeadText = styled.h1`
font-weight:300;
font-size: 40px;
line-hight: 47px;
text-align: center;
position: relative;
top: 117px;

@media all and (min-width: 768px){
  position:relative;
  text-align: left;
  left: 5vw;
}
`;

export const FaqContent = styled.div`
  width: 100%;
  margin-top: 30px;
  background-color: #fcfcfc;
  @media all and (min-width: 768px) {
    width: 90%;
    margin: auto;
    position: relative;
    top: -180px;
    min-height: 600px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.12);
  }
`;

export const FaqTitle = styled.h3`
text-align:center;
font-weight: 700;
font-size: 30px;
line-height: 34px;
@media all and (min-width: 768px){
  padding-top: 20px;
  text-align: left;
  margin-left:auto;
  width: 95%;
}

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

export const BackButton = styled(Link)`
display:none;
@media all and (min-width: 768px){
  display: flex;
  text-decoration:none;
  margin-top: 40px;
  margin-left: 4vw;
}
`;

export const BackImg = styled.img``;

export const BackText = styled.p`
  margin-left: 10px;
  color: #272727;
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;
`;