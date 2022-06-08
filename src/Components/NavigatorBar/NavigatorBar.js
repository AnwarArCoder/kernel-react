import React from 'react';
import './navigatorbar.css';

import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavigatorBar() {

  // Add class Active On Navbar
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

    // Add class Active On Navbar Link Click
    const [activeNavLink, setActiveNavLink] = useState('#');

  return (
    // :: Navbar
    <Navbar className={scroll ? 'active' : ''} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Kernel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={ () => setActiveNavLink("#") } className={activeNavLink === "#" ? "active" : ""} href="#home">Home</Nav.Link>
            <Nav.Link onClick={ () => setActiveNavLink("#about") } className={activeNavLink === "#about" ? "active" : ""} href="#about">About</Nav.Link>
            <Nav.Link onClick={ () => setActiveNavLink("#services") } className={activeNavLink === "#services" ? "active" : ""} href="#services">Services</Nav.Link>
            <Nav.Link onClick={ () => setActiveNavLink("#portfolio") } className={activeNavLink === "#portfolio" ? "active" : ""} href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link onClick={ () => setActiveNavLink("#clients") } className={activeNavLink === "#clients" ? "active" : ""} href="#clients">Clients</Nav.Link>
            <Nav.Link onClick={ () => setActiveNavLink("#blog") } className={activeNavLink === "#blog" ? "active" : ""} href="#blog">Blog</Nav.Link>
            <Nav.Link onClick={ () => setActiveNavLink("#contact") } className={activeNavLink === "#contact" ? "active" : ""} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigatorBar