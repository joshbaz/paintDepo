import styles from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export const MenuContainer = styles.aside`
width: 100%;
height: 100%;
position: fixed;
z-index: 5;
background-color: #662583;
align-items: center;
transition: 0.2s ease-in-out;
opacity: ${({ activeMenu }) => (activeMenu ? "100%" : "0")};
top: ${({ activeMenu }) => (activeMenu ? "0" : "-100%")};
overflow:hidden;
`;

export const HeadSection = styles.div`
position:relative;
height: 80px;
align-items: center;
display: flex;
justify-content:space-between;
`;
export const Logo = styles.div`

`;

export const LogoImage = styles.img`
color: white;
height: 40px;
`;
export const Icon = styles.div`

font-size: 2rem;
cursor: pointer;

`;

export const CloseIcon = styles(FaTimes)`
color: #E9E9E9;

`;

export const MenuWrap = styles.ul`
list-style: none;
display:grid;
position: relative;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
align-items: center;
top: 50px;

`;
export const MenuItem = styles.li`
color: #E5E5E5;
font-size: 24px;

`;

export const MenuLink = styles(Link)`
list-style: none;
text-decoration: none;
color: #E5E5E5;
`;




