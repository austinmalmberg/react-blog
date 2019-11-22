import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="light" expand="sm">
    <Navbar.Brand href="/">The Weekend Camper</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/articles">Articles</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
