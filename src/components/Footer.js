import React from "react";
import styled from "styled-components";

import Img from "../assets/images/logo.svg";

import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Twitter from "../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Logo src={Img} alt="Loopstudios Logo" />
        <NavItems>
          <a href="#">About</a>
          <a href="#">Carreers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </NavItems>
      </InnerContainer>

      <InnerContainer>
        <SocialLinks>
          <a href="https://facebook.com" className="img-wrapper">
            <SocialIcon src={Facebook} alt="Facebook" />
          </a>
          <a href="https://instagram.com" className="img-wrapper">
            <SocialIcon src={Instagram} alt="Instagram" />
          </a>
          <a href="https://pinterest.com" className="img-wrapper">
            <SocialIcon src={Pinterest} alt="Pinterest" />
          </a>
          <a href="https://twitter.com" className="img-wrapper">
            <SocialIcon src={Twitter} alt="Twitter" />
          </a>
        </SocialLinks>
        <License>© 2021 Loopstudios. All rights reserved.</License>
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
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.white};
    position: relative;

    &::after {
      position: absolute;
      content: "";
      bottom: -0.5em;
      left: 25%;

      width: 50%;
      height: 2px;
      transform: scale(0);

      background-color: ${(props) => props.theme.colors.white};
      transition: all 0.4s;
    }

    &:hover::after {
      transform: scale(1);
    }
  }

  a:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin: 1rem 0 1.5em;

  .img-wrapper {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      bottom: -0.5em;
      left: 0;

      width: 100%;
      height: 2px;
      transform: scale(0);

      background-color: ${(props) => props.theme.colors.white};
      transition: all 0.4s;
    }

    &:hover::after {
      transform: scale(1);
    }
  }

  .img-wrapper:not(:last-child) {
    margin-right: 1rem;
  }
`;

const SocialIcon = styled.img``;

const License = styled.span`
  color: ${(props) => props.theme.colors.dark_grey};
`;

export default Footer;
