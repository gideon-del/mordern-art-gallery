import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Container from "../Layout/Container";
import img1Desk from "../assets/desktop/image-grid-1.jpg";
import img1Mobile from "../assets/mobile/image-grid-1.jpg";
import img1Tablet from "../assets/tablet/image-grid-1.jpg";
import img2Desk from "../assets/desktop/image-grid-2.jpg";
import img2Mobile from "../assets/mobile/image-grid-2.jpg";
import img2Tablet from "../assets/tablet/image-grid-2.jpg";
import img3Desk from "../assets/desktop/image-grid-3.jpg";
import img3Mobile from "../assets/mobile/image-grid-3.jpg";
import img3Tablet from "../assets/tablet/image-grid-3.jpg";

const Grid = () => {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr;
    grid-template-areas:
      "content-1 image-1 image-1"
      "image-2 image-2 image-3"
      "image-2 image-2 content-2";
    gap: 1rem;
    margin-bottom: 5rem;
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "image-1"
        "content-1"
        "image-2"
        "image-2"
        "image-3"
        "content-2";
    }
  `;
  const Content1 = styled.div`
    grid-area: content-1;
    align-self: center;
  `;
  const Heading = styled.h2`
    font-family: var(--ff-sans);
    font-size: var(--fs-lg);
    text-transform: uppercase;
    /* max-width: 10ch; */
    color: ${(props) => props.color};
  `;
  const Paragraph = styled.p`
    font-family: var(--ff-outfit);
    font-size: var(--fs-xs);
    color: ${(props) => props.color};
    max-width: 37ch;
  `;
  const Image1 = styled.div`
    grid-area: image-1;
    justify-self: end;
    min-width: 82%;
    & > * img {
      min-width: 100%;
    }
    @media (max-width: 600px) {
      justify-self: auto;
    }
  `;
  const Image2 = styled.div`
    grid-area: image-2;
    & img {
      min-width: 100%;
      min-height: 100%;
    }
  `;
  const Image3 = styled.div`
    grid-area: image-3;
    & img {
      min-width: 100%;
      min-height: 100%;
    }
  `;
  const Content2 = styled.div`
    grid-area: content-2;
    background-color: hsl(var(--clr-dark));
    padding: 2rem;
  `;

  return (
    <motion.section
      initiial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 10,
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <Container>
        <Grid>
          <Content1>
            <Heading color="hsl(var(--clr-dark))">
              Your Day at the Gallery
            </Heading>
            <Paragraph color="hsl(var(--clr-min-dark))">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </Paragraph>
          </Content1>
          <Image1>
            <picture>
              <source srcSet={img1Mobile} media="(max-width:600px)" />
              <source srcSet={img1Tablet} media="(max-width:900px)" />
              <img src={img1Desk} />
            </picture>
          </Image1>
          <Image2>
            <picture>
              <source srcSet={img2Mobile} media="(max-width:600px)" />
              <source srcSet={img2Tablet} media="(max-width:900px)" />
              <img src={img2Desk} />
            </picture>
          </Image2>

          <Image3>
            <picture>
              <source srcSet={img3Mobile} media="(max-width:600px)" />
              <source srcSet={img3Tablet} media="(max-width:900px)" />
              <img src={img3Desk} />
            </picture>
          </Image3>
          <Content2>
            <Heading color="hsl(var(--clr-neutral))">
              COME & BE INSPIRED
            </Heading>
            <Paragraph color="hsl(var(--clr-neutral))">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </Paragraph>
          </Content2>
        </Grid>
      </Container>
    </motion.section>
  );
};

export default Grid;
