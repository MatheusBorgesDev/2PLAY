import styled from "styled-components";

export const Render = styled.button`
  height: 3.5rem;
  width: 100%;
  padding: 0 2rem;
  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
`