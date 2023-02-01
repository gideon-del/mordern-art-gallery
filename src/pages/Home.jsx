import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Hero from "../components/Hero";

const Home = () => {
  const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  `;
  return (
    <Main>
      <Hero />
      <Grid />
      <Footer />
    </Main>
  );
};

export default Home;
