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

import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg" variant="dark" bg="primary" fixed="top" >
        <Navbar.Brand href="/home" class="collapse navbar-collapse">
              <img
                src= '../images/baby.jpg'
                alt="you suck"
                width="90"
                className="d-inline-block align-top"
              />
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav  className="mr-auto" defaultActiveKey="/home" >
              <Link class="link" to="/">Home</Link>
              <Link class="link" to="/about">route1</Link>
              <Link class="link" to="/sightings">route2</Link>
              <Link class="link" to="/shows">route3</Link>
              <Link class="link" to="/memes">route3</Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
    );

export default NavBar;