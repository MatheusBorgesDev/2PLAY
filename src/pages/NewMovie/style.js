import styled from "styled-components";

export const Render = styled.main`


  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  display: grid;
  grid-template-rows: 7.2rem auto;
  grid-template-areas: 
    "header"
    "backlink"
    "content";

  > main {
    grid-area: content;

    max-width: 100%;
    margin: 2.5rem 7.7rem;

    overflow-y: scroll;

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
      gap: .5rem;
      padding-right: 1.5rem;
      
    }
      svg, a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

  }

`

export const Form = styled.form`
  

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.25rem;
  }

  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  padding-right: 1.5rem;

  .movie_inputs {

    display: grid;
    grid-template-areas: 
    "name rating"
    "textarea textarea"
    ;

    gap: 2.5rem;
  
    .movie_title {
      grid-area: title;
    }
  
    .movie_rating {
      grid-area: rating;
    }
  
    .movie_notes {
      grid-area: textarea;
    }
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }

  textarea {
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    width: 100%;
    padding: 1rem;

    background: transparent;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: .6rem;

    resize: none;
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    margin-bottom: 1.5rem;
  }
  
  .tag_wrapper {
    height: 3.5rem;

    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
     }
  }

  .new_movie_buttons{
    display: flex;
    gap: 2.5rem;
  }

  
`
