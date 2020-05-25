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
  background: ##da4126;
`;

export const Nav = styled(NavItem)`
  color: red;
`;

export const NavLogo = styled.div`
  border: 5px solid black;
`;
