import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import logo from "../assets/logo-light.svg";
const variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1,
      duration: 2,
    },
  },
};
const item = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bunce: 1,
      opacity: {
        duration: 1,
      },
      y: {
        duration: 0.4,
      },
    },
  },
};
const Home = () => {
  const Main = styled(motion.main)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  `;
  return (
    <Main variants={variant} initial="hidden" animate="visible">
      <Hero item={item} />
      <Grid item={item} />
      <Footer
        color="hsl(var(--clr-dark))"
        logo={logo}
        text="hsl(var(--clr-neutral))"
      />
    </Main>
  );
};

export default Home;
