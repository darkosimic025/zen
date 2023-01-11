import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    /* font-size: 12px; */
    font-family: Inter, sans-serif;
    -webkit-font-smoothing: antialiased;        
    -moz-osx-font-smoothing: grayscale;
  }
  `;
