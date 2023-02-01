import React from "react";
import styled from "styled-components";
import Container from "../Layout/Container";
import logo from "../assets/logo-light.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
const Footer = () => {
  const Footer = styled.footer`
    background-color: hsl(var(--clr-dark));
    padding: 3rem;
  `;
  const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 3rem;
      align-items: flex-start;
    }
  `;
  const FooterContent = styled.p`
    color: hsl(var(--clr-neutral));
    max-width: 38ch;
    font-family: var(--ff-outfit);
    font-size: var(--fs-xs);
    line-height: 1.5;
  `;
  const FooterContact = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  `;
  const FooterIcon = styled.img`
    cursor: pointer;
    transition: all 500ms ease-in-out;
    &:is(:hover, :focus) {
      filter: invert(0.5) sepia(1);
    }
  `;
  const FooterContainterContent = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `;
  return (
    <Footer>
      <Container>
        <FooterContainer>
          <FooterContainterContent>
            <div>
              <img src={logo} />
            </div>
            <FooterContent>
              The Modern Art Gallery is free to all visitors and open seven days
              a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </FooterContent>
          </FooterContainterContent>
          <FooterContact>
            <FooterIcon src={facebook} alt="Facebook" />
            <FooterIcon src={twitter} alt="twitter" />
            <FooterIcon src={instagram} alt="instagram" />
          </FooterContact>
        </FooterContainer>
      </Container>
    </Footer>
  );
};

export default Footer;
