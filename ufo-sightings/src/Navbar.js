/*import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title"> United For Omar (UFO)</Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/sightings">Sightings</CustomLink>
        <CustomLink to="/shows">Shows & Movies</CustomLink>
        <CustomLink to="/memes">Memes</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}*/

import React from 'react';
import { scaleDown as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({
//here's where I pass the props from App.js
  outerContainerId,
  pageWrapId,
}) => {
  return (
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
    {/*use Links to point to other sections/pages*/}
    <Link id="home" className="menu-item" to="/">
        Home
      </Link>
      <Link id="portfolio" className="menu-item" to="/portfolio">
        Portfolio
      </Link>
      <Link id="contact" className="menu-item" to="/contact">
        Contact
      </Link>
    </Menu>
  );
};

export default Navbar;
