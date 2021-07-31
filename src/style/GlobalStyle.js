import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #6f3ff7;
    --text-title: #363f5f;
    --title-primery: #39a6ef;
    --shape: #fff;
    --text-body: #555;
    --background: #f0f2f5;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body , button , textarea, input {
    font-family: 'Poppins';
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    cursor: not-allowed;
  }
`