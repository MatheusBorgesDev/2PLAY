import styled from "styled-components";

export const Render = styled.div`
  height: 1.5rem;
  width: fit-content;
  padding: .31rem 1rem;
  border-radius: .5rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  
  font-size: .75rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

`