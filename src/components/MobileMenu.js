import React from "react";
import styled from "styled-components";

function MobileMenu({ showMenu }) {
  return (
    <Container showMenu={showMenu}>
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
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6rem 2rem 3rem;

  position: fixed;
  top: ${(props) => (props.showMenu ? 0 : "-100vh")};
  left: 0;

  transition: all 0.6s;
  z-index: 15;
`;

const NavItem = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;

  margin: 0.5em 0;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.white};

    transition: 0.4s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default MobileMenu;
