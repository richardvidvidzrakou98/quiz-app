// src/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
// background-color: ${({ theme }) => theme.backgroundColor};
//color: ${({ theme }) => theme.color};
