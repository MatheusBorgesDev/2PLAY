import styled from "styled-components";

export const Render = styled.div`
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    gap: .5rem;
    height: 9rem;
    padding: 4rem 9rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > svg, a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }


  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 22rem;
  margin: auto;

  > div:nth-child(4){
      margin-top: 1.5rem;
  }

  > div:nth-child(5){
    margin-bottom: 1.5rem;
  }
`
export const Avatar = styled.div`
    position: relative;
    margin: -6rem auto 4rem;
    
  > img {
    
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
  }

  > label {
    width: 3rem;
    height: 3rem;
    
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: .5rem;
    bottom: .5rem;
    


    cursor: pointer;

    > input {
      display: none;

    }
  }
`