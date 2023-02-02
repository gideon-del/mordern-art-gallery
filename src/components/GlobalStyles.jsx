import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    /* Colors */
    --clr-brown: 24 56% 63%;
    --clr-dark: 0 0% 8%;
    --clr-min-dark: 0 0% 27%;
    --clr-neutral: 0 0% 100%; 
    /* Fonts */
    --fw-800: 800;
    --fw-300: 300;

    --fs-xm:1.125rem;
    --fs-sm:1.135rem;
    --fs-md:2.25rem;
    --fs-lg: clamp(3.125rem,10vw + 2rem ,3.75rem);
    --fs-xl: clamp(3rem, 5vw + 1rem ,4.38rem);
    --fs-2xl: clamp(3rem, 10vw + 1rem,6rem);
    
    --ff-sans: 'Big Shoulders Display', sans-serif;
    --ff-outfit: 'Outfit', serif
  }
  *,
  *::after,
  *::before{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  body{
    min-height: 100vh;
    line-height: 1.3;
  }
  input,
  button{
    font-family: inherit;
  }
  img,picture{
    max-width: 100%;
    object-fit: cover;
  }
  a{
    text-decoration: none;
    color:inherit
  }
  .loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #FFF;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid #FF3D00;
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`;
