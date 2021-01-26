import React from "react";
import styled from "styled-components";

import images from "./GalleryImages";

function GallerySection() {
  return (
    <Container>
      <h1>Our Creations</h1>

      {images.map((img, index) => {
        return (
          <ImgWrapper key={`grid-item-${index}`}>
            <img src={img.src} alt={img.title} />
            <span>{img.title}</span>
            <div className="background"></div>
          </ImgWrapper>
        );
      })}

      <button>See All</button>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  padding: 0 3rem;

  h1 {
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 300;
    line-height: 1em;
    color: ${(props) => props.theme.colors.black};
    text-transform: uppercase;
    text-align: center;

    margin: 6rem 0 2rem;
  }

  button {
    line-height: 1em;
    letter-spacing: 2px;
    font-size: 1.8rem;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
    text-transform: uppercase;

    align-self: baseline;
    justify-self: center;

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
