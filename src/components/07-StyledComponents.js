import React from "react";
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";

// Global Styles should be in 'App.js' or 'index.js'
const MyGlobalStyles = createGlobalStyle`
  h2 {
    padding: 2rem;
    background-color: #fff;
    color: #61dafb;
    text-transform: uppercase;
  }
`

let mainColor = "#db7093";
let mainAlphaColor = "#db709380";

const setTransitionTime = (time) => `all ${time} ease-in-out`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const MyH3 = styled.h3`
  padding: 2rem;
  text-align: center;
  color: ${({ color }) => color || "#000"};
  background-color: ${mainColor};
  transition: ${setTransitionTime(".5s")};
  animation: ${fadeIn} 2s ease-in-out;

  ${({ isButton }) =>
    isButton &&
    css`
      margin: auto;
      max-width: 50%;
      border-radius: 0.5rem;
      cursor: pointer;
    `}

  &:hover {
    background-color: ${mainAlphaColor};
  }
`;

// const 'light' and 'dark' should be in an external file
const light = {
  color: "#222",
  bgColor: "#DDD",
};

const dark = {
  color: "#DDD",
  bgColor: "#222",
};

const Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${({theme}) => theme.color};
  background-color: ${({theme}) => theme.bgColor};
`;

// This inherits from styles Box
const BoxRounded = styled(Box)`
  border-radius: 1rem;
`

const StyledComponents = () => {
  return (
    <>
      <MyGlobalStyles />

      <h2>Styled Components</h2>
      <MyH3>Hello I'm an h3 stylized with styled-components</MyH3>
      <MyH3 color="#61dafb">
        Hello I'm an h3 stylized with styled-components
      </MyH3>
      <MyH3 isButton>Hello I'm an h3 stylized with styled-components</MyH3>

      <ThemeProvider theme={light}>
        <Box>I'm a light box</Box>
        <BoxRounded>I'm a ligth round box</BoxRounded>
      </ThemeProvider>

      <ThemeProvider theme={dark}>
        <Box>I'm a dark box</Box>
        <BoxRounded>I'm a dark round box</BoxRounded>
      </ThemeProvider>
    </>
  );
};

export default StyledComponents;
