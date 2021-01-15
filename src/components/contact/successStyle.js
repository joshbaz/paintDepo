import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SuccessWrapper = styled.section`
  width: 100%;
  height: 100%;
  z-index: 200;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: purple;
  
`;

export const SuccessContainer = styled.div`
width: 100%;
height: 100%;
position:relative;
display:flex;
flex-direction:column;
text-align:center;
align-items:center;
justify-content:center;


`;

export const SuccessText = styled.h1`
  top: 100px;
  font-weight: bold;
  color: white;
  margin-bottom:30px;
  width: 80%;
`;

export const SuccessBtn = styled(Link)`
  border: 2px solid white;
  color: white;
  padding: 20px;
  text-decoration: none;
  padding-left: 30px;
  padding-right: 30px;
  border-radius:3px;
`;

