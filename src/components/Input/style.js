import styled from "styled-components";

export const Render = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem;
  
  
  width: 100%;
  height: 3.5rem;
  border-radius: 10px;
  margin-bottom: .5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > input {

    color: ${({ theme }) => theme.COLORS.WHITE};
    
    width: 100%;
    height: 3.5rem;
    padding: 1rem;

    background: transparent;
    border: none;
    
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`