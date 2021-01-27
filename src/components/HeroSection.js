import React from "react";
import styled from "styled-components";

import useWindowDimensions from "../assets/utils/useWindowDimensions";
import HeroImg from "../assets/images/mobile/image-hero.jpg";
import HeroImgDesktop from "../assets/images/desktop/image-hero.jpg";

function HeroSection({ children }) {
  const { width } = useWindowDimensions();

  return (
    <Container
      style={{
        backgroundImage:
          width < 600 ? `url(${HeroImg})` : `url(${HeroImgDesktop})`,
      }}
    >
      {children}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  height: 90vh;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  .title-wrapper {
    width: 100%;
    flex: 1;

    display: flex;
    align-items: center;

    .title {
      font-size: 2.1rem;
      font-family: ${(props) => props.theme.fonts.title};
      font-weight: 300;
      color: ${(props) => props.theme.colors.white};
      line-height: 1.3em;
      text-transform: uppercase;

      max-width: 350px;

      padding: 2rem;
      border: 2px solid ${(props) => props.theme.colors.white};
      margin-bottom: 5rem;
    }
  }

  @media ${(props) => props.theme.devices.lg_mobile} {
    padding: 0 2rem;
  }

  @media ${(props) => props.theme.devices.tablet} {
    padding: 0 3rem;

    .title-wrapper {
      .title {
        font-size: 4rem;
        max-width: 600px;
      }
    }
  }
`;

export default HeroSection;
