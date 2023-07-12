import styled from "styled-components";

export const Render = styled.main`
  
  > main {
    width: auto;
    margin: 3.15rem 6.6rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > h1 {
        font-size: 2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      > button {
        width: 13rem;
      }

    > .note_wrapper {
      
    }
    }
  }
`