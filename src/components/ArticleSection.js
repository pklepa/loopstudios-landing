import React from "react";
import styled from "styled-components";

import Img from "../assets/images/mobile/image-interactive.jpg";

function ArticleSection() {
  return (
    <Container className="limit">
      <img src={Img} alt="Exited man wearing a virtual reality headset" />

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

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 4rem 2rem 2rem;
  width: 100%;

  img {
    width: 100%;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
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
    padding: 1rem;
  }
`;

export default ArticleSection;
