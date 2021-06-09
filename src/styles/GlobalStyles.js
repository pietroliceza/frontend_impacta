import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-primary);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Roboto,Arial,sans-serif;
  }
  :root {
    --color-primary: #FFF;
    --color-black: #0C0C0C;
    --color-gray: #A5A5A5;
    --color-roxo: #5E17EB;
    --color-desability: #CCD1FF;
    --color-fundo-lateral: rgba(41, 31, 59, 0.8);
    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }
`;
