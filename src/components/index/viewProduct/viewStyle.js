import styles from 'styled-components';
import {Link} from 'react-router-dom';

export const ViewWrapper = styles.section`
width: 100%;
height: 100%;
background-color: #FCFCFC;
padding-top:65px;
margin-bottom:75px;
overflow:hidden;
`;

export const ViewHeadWrap = styles.div`
display:flex;
flex-direction:column;
align-items:center;
width:90%;
margin:auto;
padding-top: 27px;
margin-bottom:35px;
@media all and (min-width:1366px){
    width:1090px;
    margin:auto;
    margin-top: 27px;
margin-bottom:35px;
}
`;

export const ViewHeadTitle = styles.h1`
font-weight: 400;
font-size: 29px;
text-align: center;
text-transform: uppercase;
@media all and (min-width: 1366px){
  height: 47px;
font-size: 40px;
font-weight: 300;
line-height: 47px;
text-transform: uppercase;
}

`;

export const ViewHeadText = styles.p`
font-weight: 400;
  font-size: 20px;
  line-height: 133.2%;
  text-align: justify;
@media all and (min-width:1366px){
  width:65%;
height: 100%;
font-size: 20px;
line-height: 23px;
text-align:center;
color:#838386;
margin:auto;
margin-top:20px;
}

`;
export const ViewWrap = styles.div`
display:grid;
grid-template-columns:1fr ;
grid-gap:1rem;
margin:auto;
width:70%;
@media all and (min-width:1366px){
    width: 1090px;
    height: 100%;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
grid-gap:1rem;
margin:auto;
}

`;
export const ViewContainer = styles(Link)`
position:relative;
height:100%;
width:100%;
margin:auto;
text-decoration:none;

`;

export const ViewContent = styles.div`
width:265.19px;
height: 222.1px;
`;

export const ViewItem = styles.div`
width:265.19px;
height: 222.1px;
`;

export const ViewImage = styles.img`
width:265.19px;
height: 222.1px;
object-fit:cover;
`;

export const ViewTextWrapper = styles.div`
position:absolute;
top:50;
bottom:0;

display: flex;
justify-content:center;
align-items:center;
  background: #fcfcfc;
  width:100%;
  opacity: 0.7;
  height: 49.32px;
`;

export const ViewText = styles.p`
font-weight:500;
font-size:16px;
line-height:19px;
color: #000000;

`;