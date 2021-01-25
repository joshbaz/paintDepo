import styles from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styles.nav`
width:100vw;
display: flex;
position: fixed;
align-items: center;
height: 80px;
justify-content: space-between;
overflow: hidden;
background-color: ${({ change }) =>
  change ? "#fcfcfc" : "rgba(255, 255, 255, 0.37)"};
box-shadow:  ${({ change }) =>
  change ? "0px 4px 20px rgba(0, 0, 0, 0.04)" : "0px"};
z-index:2;
overflow:hidden;

`;

export const NavLogo = styles(Link)`
justify-self: flex-start;
cursor: pointer;
padding-left: 5px;
@media all and (min-width: 768px){
    padding-left: 5vw;
}
`;

export const LogoImage = styles.img`
height: 40px;
`

export const MobileIcon = styles.div`
color: #662583;
padding-right:5px;
 cursor: pointer;
 position relative;
 height: 40px;
 top: 0.3rem;
 font-size: 20px;
@media all and (min-width: 1000px) {
 display: none;   
}

`;

export const NavMenu = styles.ul`
 display: none;
 
@media all and (min-width: 1000px) {
 display: flex;
 list-style: none;
 position: relative;
 height: 20px;
top: -1px;
right:2rem;

}
`;

export const NavItem = styles.li`
 font-size: 16px;
 font-weight: bold;
 line-height: 19px;
 margin: 0 1rem;
 cursor: pointer;

`;

export const NavLink = styles(Link)`
text-decoration: none;
color: ${({navigationChange, changeColor, navColor})=>(navigationChange ? changeColor : navColor)};
outline:none;
`;