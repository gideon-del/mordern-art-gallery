import React from "react";
import styled from "styled-components";

const Loader = () => {
  const Wrapper = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <Wrapper>
      <span className="loader"></span>
    </Wrapper>
  );
};

export default Loader;
