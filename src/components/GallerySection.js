import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import useWindowDimensions from "../assets/utils/useWindowDimensions";
import { revealVariant } from "../assets/utils/variants";
import { images, imagesDesktop } from "./GalleryImages";

function GallerySection() {
  const { width } = useWindowDimensions();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={revealVariant}
    >
      <h1>Our Creations</h1>

      <GalleryContainer>
        {width < 850
          ? images.map((img, index) => {
              return (
                <ImgWrapper key={`grid-item-${index}`}>
                  <img src={img.src} alt={img.title} />
                  <span>{img.title}</span>
                  <div className="background"></div>
                </ImgWrapper>
              );
            })
          : imagesDesktop.map((img, index) => {
              return (
                <ImgWrapper key={`grid-item-${index}`}>
                  <img src={img.src} alt={img.title} />
                  <span>{img.title}</span>
                  <div className="background"></div>
                </ImgWrapper>
              );
            })}
      </GalleryContainer>

      <button>See All</button>
    </Container>
  );
}

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 4rem 1rem;

  position: relative;

  h1 {
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 300;
    line-height: 1em;
    color: ${(props) => props.theme.colors.black};
    text-transform: uppercase;
    text-align: center;

    margin: 2rem 0;
  }

  button {
    line-height: 1em;
    letter-spacing: 4px;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
    text-transform: uppercase;

    background-color: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.black};
    padding: 1.1rem 2rem 0.8rem;
    margin: 2rem 0;

    transition: all 0.4s;

    &:hover {
      background-color: ${(props) => props.theme.colors.black};
      color: white;
      cursor: pointer;
    }
  }

  @media ${(props) => props.theme.devices.lg_mobile} {
    padding: 4rem 2rem;
  }

  @media ${(props) => props.theme.devices.tablet} {
    align-items: flex-start;
    padding: 4rem 3rem;

    button {
      position: absolute;
      top: 4rem;
      right: 3rem;
      margin: 1rem 0;
    }
  }
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 100%;

  @media ${(props) => props.theme.devices.tablet} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  position: relative;

  span {
    position: absolute;
    bottom: 1rem;
    left: 1rem;

    max-width: 100px;

    font-size: 2rem;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 300;
    line-height: 1em;
    color: white;
    text-transform: uppercase;

    z-index: 10;

    transition: all 0.4s;
  }

  img {
    width: 100%;
  }

  .background {
    opacity: 0;

    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(245, 245, 237, 0.7);

    transition: all 0.4s;
  }

  &:hover {
    cursor: pointer;

    .background {
      opacity: 1;
    }

    span {
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

export default GallerySection;
