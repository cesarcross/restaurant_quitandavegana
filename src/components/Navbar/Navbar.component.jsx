import React from "react";

import { Navbar, Nav } from "./Navbar.style";

const NavbarDefault = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Quitanda Vegana</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{ background: "#da4126" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#link">Cardápio</Nav.Link>
          <Nav.Link href="#link">Sobre</Nav.Link>
          <Nav.Link href="#link">Equipe</Nav.Link>
          <Nav.Link href="#link">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDefault;
