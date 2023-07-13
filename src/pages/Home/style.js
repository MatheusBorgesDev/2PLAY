import styled from "styled-components";

export const Render = styled.main`
  
  > main {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 3.15rem 6.6rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.34rem;

      > h1 {
        font-size: 2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      > button {
        width: 13rem;
      }

    }
    
    .notes_wrapper{
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`