import styled from "styled-components";
import { Nav as NavItem, Navbar as NavbarBootstrap } from "react-bootstrap";

// export const NavContainer = styled.div`
//   border: 2px solid green;
//   display: flex;
//   background: white;
// `;

export const Navbar = styled(NavbarBootstrap)`
  display: flex;
  justify-content: space-between;

  button:focus {
    outline: none;
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
      outline: none;
    }
  }
`;

export const NavLogo = styled.div`
  border: 5px solid black;
`;
