import React from "react";
import styled from "styled-components";

const Container = (props) => {
  const Container = styled.section`
    max-width: 1110px;
    margin-inline: auto;
  `;
  return <Container>{props.children}</Container>;
};

export default Container;
