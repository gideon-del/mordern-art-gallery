import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Buttons = ({ img, content, path, reverse }) => {
  const ButtonContainer = styled.div`
    font-family: var(--ff-sans);
    display: flex;
    cursor: pointer;
    flex-direction: ${reverse ? "row-reverse" : "row"};
    transition: all 500ms ease-in;
    & > * {
      transition: all 100ms ease-in;
    }
    &:hover button {
      background-color: hsl(var(--clr-brown));
    }
    &:hover div {
      background-color: hsl(var(--clr-dark));
    }
  `;
  const Button = styled.button`
    background-color: hsl(var(--clr-dark));
    border: none;
    color: hsl(var(--clr-neutral));
    font-size: var(--fs-xs);
    padding: 1rem 1.9rem;
    text-transform: uppercase;
    cursor: pointer;
  `;
  const IconContainer = styled.div`
    background-color: hsl(var(--clr-brown));
    padding: 1rem 1.5rem;
  `;
  return (
    <Link to={path}>
      <ButtonContainer>
        <Button idle="hsl(var(--clr-dark))" hover="hsl(var(--clr-brown))">
          {content}
        </Button>
        <IconContainer
          hover="hsl(var(--clr-dark))"
          idle="hsl(var(--clr-brown))"
        >
          <img src={img} />
        </IconContainer>
      </ButtonContainer>
    </Link>
  );
};

export default Buttons;
