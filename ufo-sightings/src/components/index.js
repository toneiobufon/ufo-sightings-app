import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './Navbar';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          <NavLink to='/Sightings' activeStyle>
            Sightings
          </NavLink>
          <NavLink to='/Shows' activeStyle>
            Shows
          </NavLink>
          <NavLink to='/Memes' activeStyle>
            Memes
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;