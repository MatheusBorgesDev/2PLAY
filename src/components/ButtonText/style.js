import styled from "styled-components"

export const Render = styled.button`
    background: none;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.WHITE : theme.COLORS.PINK};
    border: none;
    font-size: 16px;
`;

