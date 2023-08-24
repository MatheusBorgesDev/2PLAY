import styled from "styled-components";
import { Link } from "react-router-dom"

export const Render = styled.main`

  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  display: grid;
  grid-template-rows: 7.2rem auto;
  grid-template-areas: 
    "header"
    "content";
  
  > main {
    grid-area: content;
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 3.15rem 6.6rem;
    overflow-y: scroll;
    padding-right: 1.5rem;

    ::-webkit-scrollbar {
      background-color: transparent;
      width: .5rem;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 5rem;
      
    }

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
export const NewMovie= styled(Link)`
`