import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  .logo {
    font-family: 'Anton', sans-serif;
    letter-spacing: .5rem;
  
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3rem;
    font-weight: 700;
  }

  .logo span {
    color: ${({ theme }) => theme.COLORS.RED};
  }


  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`