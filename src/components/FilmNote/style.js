import styled from "styled-components";

export const Render = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    height: 3.3rem;
    font-family: Roboto;
    font-size: 1rem;

    overflow: hidden;
    text-overflow: ellipsis;

    
  }

  .tags_wrapper {
    display: flex;
    gap: .5rem;
  }
`
