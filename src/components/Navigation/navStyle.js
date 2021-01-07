import styles from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styles.nav`
width: 100vw;
display: flex;
position: sticky;
align-items: center;
height: 80px;
justify-content: space-between;
`;

export const NavLogo = styles(Link)`
justify-self: flex-start;
cursor: pointer;
padding-left: 5px;


`;

export const LogoImage = styles.img`
height: 40px;
`

export const MobileIcon = styles.div`
color: #662583;
padding-right:5px;
 
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
`;