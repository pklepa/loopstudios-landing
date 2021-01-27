import React from "react";
import styled from "styled-components";

import Logo from "../assets/images/logo.svg";
import HamburguerIcon from "./HamburguerIcon";

function Navbar({ showMenu, setShowMenu }) {
  return (
    <Container className="limit">
      <img src={Logo} alt="Loopstudios logo" />

      <HamburguerIcon showMenu={showMenu} setShowMenu={setShowMenu} />
      <nav className="nav-links">
        <NavItem href="/" className="nav-item">
          About
        </NavItem>
        <NavItem href="/" className="nav-item">
          Careers
        </NavItem>
        <NavItem href="/" className="nav-item">
          Events
        </NavItem>
        <NavItem href="/" className="nav-item">
          Products
        </NavItem>
        <NavItem href="/" className="nav-item">
          Support
        </NavItem>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  padding: 3rem 0;

  z-index: 10;

  .nav-links {
    display: none;

    & > a:not(:first-child) {
      margin-left: 3rem;
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    display: flex;
    align-items: center;

    .nav-links {
      display: flex;
    }
  }
`;

const NavItem = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 25%;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.white};

    transition: 0.4s;
  }

  &:hover::after {
    width: 50%;
  }
`;

export default Navbar;
