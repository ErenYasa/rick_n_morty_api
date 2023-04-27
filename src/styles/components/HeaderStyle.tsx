import styled from 'styled-components';
import { Theme } from '../Theme';

export const HeaderStyle = styled.header`
    position: sticky;
    top: 0;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12rem;
    padding-inline: 4rem;
    border-bottom: 0.1rem solid rgba(17, 176, 200, 0.11);
    background-color: ${() => Theme.colors.background};

    .logo {
        margin-left: auto;
        margin-right: auto;
    }
`;
