// import { GoThreeBars } from 'react-icons/go';
import { NavLink as Link } from 'react-router-dom';
import styled from "styled-components";


export const Nav = styled.nav`
    background: white;
    height: 95px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 22px 10px 22px;
    overflow-x: hidden;
   
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  font-family: cursive;
  font-size: 3rem;
  text-decoration: none;

`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  /* height: 100%; */
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

// export const Bars = styled(GoThreeBars)`
//   display: none;
//   color: #fff;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  padding: 9px 20px;
  color: #black;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    background: #fff;
    color: #808080;
  }
`;