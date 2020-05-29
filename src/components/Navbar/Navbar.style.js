import styled from "styled-components";
import { Nav as NavItem, Navbar as NavbarBootstrap } from "react-bootstrap";

export const Navbar = styled(NavbarBootstrap)`
  button:focus {
    /* outline: thin dotted; */
  }

  p {
    display: inline;
    font-family: Luna;
    font-size: 0.7rem;
  }

  img {
    width: 25px;
    margin-bottom: 10px;
  }
`;

export const Nav = styled(NavItem)`
  color: red;

  button {
    background: transparent;
    border: none;

    &:focus {
      /* outline: none; */
    }
  }
`;

export const NavLogo = styled.div`
  /* border: 5px solid black; */
`;
