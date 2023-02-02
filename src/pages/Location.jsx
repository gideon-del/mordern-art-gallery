import React from "react";
import styled from "styled-components";
import imgDesk from "../assets/desktop/image-map.png";
import imgMobile from "../assets/mobile/image-map.png";
import imgTablet from "../assets/tablet/image-map.png";
import Footer from "../components/Footer";
import Container from "../Layout/Container";
import logo from "../assets/logo-dark.svg";
import Buttons from "../UI/Buttons";
import icon from "../assets/icon-arrow-left.svg";
const Location = () => {
  const Main = styled.main`
    display: grid;
    min-height: 100vh;
  `;
  const Content = styled.section`
    background-color: hsl(var(--clr-dark));
    padding: 10rem 2rem;
    font-family: var(--ff-outfit);
    font-size: var(--f-xs);
    color: hsl(var(--clr-neutral));
    @media (max-width: 600px) {
      padding: 2rem;
    }
  `;
  const Map = styled.img`
    min-height: 100%;
  `;
  const Title = styled.h1`
    font-size: var(--fs-xl);
    text-transform: uppercase;
    color: hsl(var(--clr-neutral));
    font-family: var(--ff-sans);
    max-width: 15ch;
  `;
  const Street = styled.h2`
    font-size: 2.2rem;
    color: hsl(var(--clr-brown));
    text-transform: uppercase;
    font-family: var(--ff-sans);
  `;
  const Address = styled.p`
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  `;
  const Loc = styled.div`
    display: flex;
    justify-content: space-between;
    & > * {
      flex: 1 1 50%;
    }
    @media (max-width: 600px) {
      flex-direction: column;
    }
  `;
  const Pos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & p:not(class) {
      max-width: 40ch;
    }
  `;
  const ButtonContainer = styled.div`
    position: absolute;
    top: 0;
    left: min(10vw, 10rem);
  `;
  return (
    <Main>
      <section>
        <ButtonContainer>
          <Buttons img={icon} content="BACK TO HOME" path="/" reverse={true} />
        </ButtonContainer>
        <picture>
          <source srcSet={imgMobile} media="(max-width:600px)" />
          <source srcSet={imgTablet} media="(max-width:900px)" />
          <Map src={imgDesk} />
        </picture>
      </section>
      <Content>
        <Container>
          <Loc>
            <div>
              <Title>OUR LOCATION</Title>
            </div>
            <Pos>
              <Street>99 King Street </Street>

              <Address>
                <span>Newport</span>
                <span>RI 02840</span>
                <span>United States of America</span>
              </Address>
              <p>
                Our newly opened gallery is located near the Edward King House
                on 99 King Street, the Modern Art Gallery is free to all
                visitors and open seven days a week from 8am to 9pm.
              </p>
            </Pos>
          </Loc>
        </Container>
      </Content>
      <Footer
        color="hsl(var(--clr-brown))"
        text="hsl(var(--clr-dark))"
        logo={logo}
      />
    </Main>
  );
};

export default Location;
