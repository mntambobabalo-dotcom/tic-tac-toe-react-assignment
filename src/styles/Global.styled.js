import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@200;400;500;600&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-width: 320px;
  }

  body {
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Poppins', Arial, sans-serif;
    transition: background-color 180ms ease, color 180ms ease;
  }

  button, input {
    font: inherit;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }
`;
