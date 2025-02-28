import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  :root{
    --white:#fff;
    --background:#f3f3f5;
    --gray-line:#dcdde0;
    --text:#666;
    --text-highlight:#b3b9ff;
    --title:#2e384d;
    --red:#e83f5b;
    --green:#4cd62b;
    --blue:#5965e0;
    --blue-dark:#4953b8;
    --blue-twitter:#2aa9e0;
  }

  @media(max-width:1080px){
    html{
      font-size:93.75%;
    }
  }
  @media(max-width:720px){
    html{
      font-size:87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }
  h1, h2, h3, h4, h5, h6, strong{
  font-weight:500;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  button {
    cursor: pointer;
  }
`;