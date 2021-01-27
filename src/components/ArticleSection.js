import React, { useEffect } from "react";
import styled from "styled-components";

import useWindowDimensions from "../assets/utils/useWindowDimensions";
import Img from "../assets/images/mobile/image-interactive.jpg";
import ImgDesktop from "../assets/images/desktop/image-interactive.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { revealVariant } from "../assets/utils/variants";

function ArticleSection() {
  const { width } = useWindowDimensions();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
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
      <img
        src={width < 850 ? Img : ImgDesktop}
        alt="Exited man wearing a virtual reality headset"
      />

      <Details>
        <h1>The leader in Interactive VR</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </Details>
    </Container>
  );
}

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;

  padding: 4rem 2rem 2rem;
  width: 100%;

  position: relative;

  img {
    width: 100%;
  }

  @media ${(props) => props.theme.devices.tablet} {
    padding: 4rem 3rem 0;
    margin-bottom: 4rem;

    img {
      width: max(800px, 65%);
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    line-height: 1em;
    color: ${(props) => props.theme.colors.black};

    margin: 1.5em 0;
  }

  p {
    color: ${(props) => props.theme.colors.dark_grey};
    text-align: center;
    padding: 0 1rem;
  }

  @media ${(props) => props.theme.devices.tablet} {
    position: absolute;

    bottom: 0;
    right: 0;

    padding: 6rem 3rem 0 6.5rem;
    max-width: 650px;
    background-color: ${(props) => props.theme.colors.white};

    h1 {
      margin: 0 0 1.5em;
      font-size: 2.5rem;
    }

    h1,
    p {
      text-align: left;
      padding: 0;
    }
  }
`;

export default ArticleSection;
