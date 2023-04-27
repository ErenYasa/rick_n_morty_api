import styled from 'styled-components';
import { Theme } from '../Theme';

export const LayoutStyle = styled.main`
    position: relative;
    display: flex;
    justify-content: center;
    /* height: calc(100% - 120px); */
    padding: 4rem;
    background-color: ${() => Theme.colors.background};
`;
