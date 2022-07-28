import React from 'react'
// import {Link} from "react-router-dom";
import { Nav, NavLogo, NavLink, Bars, NavMenu, NavBtn, NavBtnLink,} from "./NavBarElements";

const NavBar = () => {
  return (
    <>
        <Nav>
            <NavLogo to="/">
                Photo Gallery
            </NavLogo>
            <Bars />

            <NavMenu>

                <NavLink 
                to="/" 
                activeStyle={{color: 'black'}}>
                Explore
                </NavLink>

                <NavLink 
                to="/" 
                activeStyle={{color: 'black'}}>
                Collection
                </NavLink>

                <NavLink 
                to="/" 
                activeStyle={{color: 'black'}}>
                Buy
                </NavLink>

                <NavLink 
                to="/" 
                activeStyle={{color: 'black'}}>
                Community
                </NavLink>

                <NavBtn>
                    <NavBtnLink to="/">Sign Up</NavBtnLink>
                </NavBtn>


            </NavMenu>
        </Nav>
    </>
  )
}

export default NavBar