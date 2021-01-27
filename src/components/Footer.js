import React from "react";
import styled from "styled-components";

import Img from "../assets/images/logo.svg";

function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Logo src={Img} alt="Loopstudios Logo" />
        <NavItems>
          <a href="#">About</a>
          <a href="#">Discover</a>
        </NavItems>
      </InnerContainer>

      <InnerContainer>
        <SocialLinks />
        <License>2021 Loopstudios. All rights reserved.</License>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};

  padding: 3rem 1rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 0;
`;

const Logo = styled.img`
  margin-bottom: 3rem;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;

  a:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div``;

const License = styled.span`
  color: ${(props) => props.theme.colors.dark_grey};
`;

export default Footer;
