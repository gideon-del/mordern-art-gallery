import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Loader = () => {
  const Wrapper = styled(motion.div)`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(var(--clr-dark));
  `;
  return (
    <AnimatePresence>
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        key="loader"
      >
        <span className="loader"></span>
      </Wrapper>
    </AnimatePresence>
  );
};

export default Loader;
