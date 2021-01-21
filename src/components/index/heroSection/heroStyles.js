import styles, {css} from 'styled-components/macro';

import {IoArrowBack} from 'react-icons/io5'
import { IoArrowForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const HeroWrapper = styles.section`

height: 100vh;
max-height:1100px;
position: relative;
overflow:hidden;
z-index: 1;
`;

export const HeroContainer = styles.div`
width: 100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`;

export const HeroSlide = styles.div`
z-index: 1;
width:100%;
height: 100%;

`;
export const HeroSlider = styles.div`
position: absolute;
top: 0;
left:0;
width: 100%;
height: 100%;
display:flex;
align-items:center;
justify-content:center;
transition: all 10s ease-in-out;
`;
export const HeroImage = styles.img`
position: absolute;
top:0;
left: 0;
width: 100vw;
height: 100vh;
object-fit:cover;
`;
export const HeroContent = styles.div`
position: relative;
z-index:10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100%-100px);
color: #fff;
`;
export const HeroHead = styles.h1`
font-size: clamp(0.5rem, 8vw, 4rem);
font-weight:400;
text-transform: uppercase;
text-shadow:0px 0px 20px rgba(0,0,0,0.4);
margin-bottom:0.8rem;
text-align:center;
`;
export const HeroP = styles.p`
font-weight:400;
font-size: clamp(0.5rem, 2vw, 2rem);
`;

export const CircleButtonWrap = styles.div`
position:absolute;
z-index:10;
bottom:30px;
right: 50px;
display:flex;
align-items:center;
`;

export const CircleButton = styles.div`
background: white;
height:10px;
width: 10px;
border-radius:50%;
margin-right: 6px;
transform:  ${({ currentActive, circleActive }) => {
  if (currentActive === circleActive) {
    return "scale(1.3)";
  } else {
    return "scale(0.9)";
  }
}};
transition: all 0.6s ease-in-out;
`;
export const ButtonWrapper = styles.div`
position: absolute;
bottom: 30px;
z-index:10;

`;

export const DownButton = styles(Link)``;

export const ButtonImg = styles.img`
width: 30px;
height:15px;
`;
export const SliderButtonRight = styles.div`
position:absolute;
top:100;
right:-10px;
display:flex;
z-index:10;
`;
export const SliderButtonLeft = styles.div`
position:absolute;
top:100;
left:5px;
display:flex;
z-index:10;
`;
export const ArrowButtons = css`
width:50px;
height: 50px;
color:#fff;
cursor: pointer;
background: transparent;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition:0.3s;
outline: none;
&:hover {
    background: #cd853f;
    transform:scale(1.05);
}

`
export const PreviousArrow = styles(IoArrowBack)`
${ArrowButtons}
`;

export const NextArrow = styles(IoArrowForward)`
${ArrowButtons}
`;