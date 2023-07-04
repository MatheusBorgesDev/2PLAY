import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Render = styled.div`
  display: flex;
  height: 100vh;

`

export const Form = styled.form`

  padding: 0 8.38rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p{
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    font-size: 0.875rem;
    margin-bottom: 3rem;
  }

  h2{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 3rem;
  }

  > button {
    margin-top: 1rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    margin-top: 2.5rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
`;