import React from "react";

import { Navbar, Nav } from "./Navbar.style";
import Scroll from "react-scroll";

const NavbarDefault = () => {
  const ScrollLink = Scroll.Link;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Quitanda Vegana</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            // className="some-class"
            // activeClass="some-active-class"
          >
            <Nav href="#home" style={{ background: "" }}>
              Home
            </Nav>
          </ScrollLink>
          <ScrollLink to="cardapio" spy={true} smooth={true} duration={1000}>
            <Nav>Cardápio</Nav>
          </ScrollLink>
          <ScrollLink to="sobre" spy={true} smooth={true} duration={1000}>
            <Nav>Sobre</Nav>
          </ScrollLink>
          <ScrollLink to="equipe" spy={true} smooth={true} duration={1000}>
            <Nav>Equipe</Nav>
          </ScrollLink>
          <ScrollLink to="contato" spy={true} smooth={true} duration={1000}>
            <Nav>Contato</Nav>
          </ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDefault;
