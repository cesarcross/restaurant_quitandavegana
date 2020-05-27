import React from "react";

import { Navbar, Nav } from "./Navbar.style";
import Scroll from "react-scroll";

import LogoIcon from "../../assets/images/vegetable.png";

const NavbarDefault = () => {
  const ScrollLink = Scroll.Link;

  return (
    <Navbar bg="light" expand="lg">
      <ScrollLink to="home" spy={true} smooth={true} duration={500}>
        <Navbar.Brand>
          <img src={LogoIcon} alt="" srcSet="" /> Quitanda Vegana
        </Navbar.Brand>
      </ScrollLink>
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
            <Nav style={{ background: "" }}>
              <button>Home</button>
            </Nav>
          </ScrollLink>
          <ScrollLink to="cardapio" spy={true} smooth={true} duration={1000}>
            <Nav>
              <button>Cardápio</button>
            </Nav>
          </ScrollLink>
          <ScrollLink to="sobre" spy={true} smooth={true} duration={1000}>
            <Nav>
              <button>Sobre</button>
            </Nav>
          </ScrollLink>
          <ScrollLink to="equipe" spy={true} smooth={true} duration={1000}>
            <Nav>
              <button>Equipe</button>
            </Nav>
          </ScrollLink>
          <ScrollLink to="contato" spy={true} smooth={true} duration={1000}>
            <Nav>
              <button>Contato</button>
            </Nav>
          </ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDefault;
