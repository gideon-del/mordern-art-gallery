import React from "react";
import styled from "styled-components";
import imgDesk from "../assets/desktop/image-hero.jpg";
import imgMobile from "../assets/mobile/image-hero.jpg";
import imgTablet from "../assets/tablet/image-hero.jpg";

import icon from "../assets/icon-arrow-right.svg";
import { motion } from "framer-motion";
import Buttons from "../UI/Buttons";
const Hero = ({ item }) => {
  const Section = styled(motion.section)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "header image content";
    margin-block-end: 10rem;
    max-width: 1275px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "image header"
        "image content";
    }
    @media (max-width: 600px) {
      grid-template-columns: auto;
      grid-template-areas:
        "image"
        "header"
        "content";
    }
  `;
  const Heading = styled.div`
    background-color: hsl(var(--clr-dark));
    font-family: var(--ff-sans);
    mix-blend-mode: difference;
    padding-top: min(8vw, 165px);
    grid-area: header;
    color: #fff;
    & h1 {
      font-size: var(--fs-2xl);
      margin-left: min(10vw, 165px);
      margin-inline-end: -10rem;
      white-space: nowrap;
    }
    @media (max-width: 1024px) {
      mix-blend-mode: inherit;
      background-color: #fff;
      align-self: end;
      & h1 {
        margin-left: -2rem;
        margin-inline-end: 0;
        color: hsl(var(--clr-dark));
      }
    }
    @media (max-width: 600px) {
      padding: 1rem;
      & h1 {
        margin-left: 0;
      }
    }
  `;

  const Content = styled.div`
    font-family: var(--ff-outfit);
    color: hsl(var(--clr-min-dark));
    padding-top: min(8vw, 165px);
    margin-left: -3rem;
    grid-area: content;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    & p {
      max-width: 37ch;
      font-size: var(--fs-sm);
      line-height: 32px;
    }
    @media (max-width: 1024px) {
      margin-left: -2rem;
      padding-top: 0;
      gap: 1rem;
    }
    @media (max-width: 600px) {
      margin-left: 0;
      padding: 1rem;
    }
  `;
  const HeroImg = styled.img`
    min-height: 100%;
    min-inline-size: 100%;
    position: relative;
    z-index: -1;
  `;
  const HeroImgs = styled.div`
    grid-area: image;
    position: relative;
  `;
  return (
    <Section variants={item}>
      <Heading>
        <h1>
          MODERN <br /> ART GALLERY
        </h1>
      </Heading>
      <HeroImgs>
        <picture>
          <source srcSet={imgTablet} media="(min-width: 600px)" />
          <source srcSet={imgDesk} media="(min-width: 900px)" />
          <HeroImg src={imgMobile} alt="Hero image" />
        </picture>
      </HeroImgs>
      <Content>
        <p>
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Buttons img={icon} content="our location" path="/location" />
      </Content>
    </Section>
  );
};

export default Hero;
