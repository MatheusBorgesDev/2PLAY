import styled from "styled-components";

export const Render = styled.div `
  
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  display: grid;
  grid-template-rows: 7.2rem auto;
  grid-template-areas: 
    "header"
    "content";
  
  h1, p {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  > main {
    grid-area: content;

    display: flex;
    flex-direction: column;

    width: auto;
    
    margin: 3.15rem 6.6rem;
    overflow-y: scroll;
    padding-right: 1.5rem;
    gap: 1.5rem;

    ::-webkit-scrollbar {
      background-color: transparent;
      width: .5rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 5rem;
    }

    div {
      display: flex;
      gap: .5rem;
      align-items: center;
    }

    img {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
    }

    .back_link {
      svg, a {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`