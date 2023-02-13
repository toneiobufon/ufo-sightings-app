import './Navigation.css';

import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <>

  
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
              <Link class="link" to="/about">About</Link>
              <Link class="link" to="/sightings">Sightings</Link>
              <Link class="link" to="/shows">Shows</Link>
              <Link class="link" to="/memes">Memes</Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
  </>
  )
  };

  export default Navigation;