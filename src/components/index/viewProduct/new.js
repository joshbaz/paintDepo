import styles from "styled-components";

export const ViewWrapper = styles.section`
width:100%;
height: 100%;
display: grid;
position:relative;
grid-template-columns: repeat(2, 0.5fr);
align-items: center;
justify-content:center;
overflow: hidden;

@media all and (min-width: 1000px){
    display: grid;
position:relative;
grid-template-columns: repeat(2, 0.5fr);
align-items: center;
justify-content:center;
}
`;

export const ObjectImageWrapper = styles.div`
width:450.38px;
height: 579.39px;
margin: 0;
padding: 0;
position:relative;
margin: auto;



`;

export const ObjectImage = styles.img`
width: 100%;
height: 100%;
`;

export const ProductWrapper = styles.div`
width:450.38px;
height: 579.39px;
position:relative;
margin:auto;
`;

export const ImageWrapper = styles.div`
width:255.38px;
height: 251.91px;
`;

export const ProductImage = styles.img`
width:100%;
height: 100%;
`;

export const ProductContent = styles.div`
width: 450px;
height: 579.39px;
`;

export const ContentTitle = styles.h1`
font-size: 34px;
margin-bottom:13px;


`;

export const ContentText = styles.p`
font-size: 20px;
width: 305px;
height: 61px;
margin-bottom:20px;
`;

export const ContentButton = styles.button`

`;
