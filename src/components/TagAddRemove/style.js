import styled from "styled-components";

export const Render = styled.div`

  display: flex;
  align-items: center;
  
  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};

  border: ${({ theme, isNew }) => isNew ? `.16rem dashed ${theme.COLORS.GRAY_900}` : 'none'};
  
  border-radius: .5rem;
  padding-right: 1rem;

  > input {

    width: 100%;
    height: 3.5rem;

    padding: 1rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_900};
    }
  }

  > button {
    border: none;
    background: none;
  }

`