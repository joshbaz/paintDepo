import styles from 'styled-components';
import {Link} from 'react-router-dom';

export const ViewWrapper = styles.section`
width: 100%;
height: 100%;
background-color: #FCFCFC;
overflow:hidden;
`;

export const ViewContainer = styles.div`
width: 100%;
height: 100%;
position: relative;
align-items:center;
background-color: #FCFCFC;
padding: 126px 0;
overflow:hidden;
`;
export const ObjectImageWrapper = styles.div`
display:none;
`;

export const ObjectImage = styles.img`

`;

export const ProductWrapper = styles.div`
position: relative;
text-align:center;
`;

export const ImageWrapper = styles.div`

`;

export const ProductImage = styles.img`
width: 228.71px;
height: 225.6px;
object-fit:cover;
@media all and (min-width: 1000px){
    width: 255.38px;
    height: 251.91px;
}
`;

export const ProductContent = styles.div`
position: relative;
text-align:center;
margin-top: 59.28px;
`;

export const ContentTitle = styles.h3`
margin-bottom: 11.64px;
font-weight: 300;
font-size: 30.44px;

`;

export const ContentText = styles.p`
height: 54.63px;
width: 273.14px;
text-align:center;
font-size: 17.9px;
font-weight: 500;
margin-left: auto;
margin-right: auto; 
margin-bottom: 17.64px;
`;
export const ContentButtonWrapper = styles.div`
position: relative;
width:100%;
margin-top: 40px;
`;
export const ContentButton = styles(Link)`
margin:auto;
text-decoration: none;
border: 3px solid black;
width:256.36px;
height: 56.4px;
border-radius:5px;
font-size: 17.9px;
font-weight: 500;
outline: none;
padding: 20px 50px;
text-decoration:none;
color: black;
`;