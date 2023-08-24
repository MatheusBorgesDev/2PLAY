import styled from "styled-components";

export const Render = styled.header`
  grid-area: header;
  width: 100%;
  height: 7.2rem;

  display: flex;
  padding: 1.5rem 7.69rem;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  border-bottom: 1px solid #3E3B47;


`

export const Search = styled.div`

    display: flex;
    width: 100%;
    padding: 1.2rem 1.5rem;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: .6rem;

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
  }  
`

export const Profile = styled.div`
   display: flex;
   align-items: center;
   gap: .5rem;


  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    font-size: .875rem;

    > p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.GRAY_900};
    }
  }

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`
