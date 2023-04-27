import styled from 'styled-components';
import { Theme } from '../Theme';

export const LayoutStyle = styled.main`
    display: flex;
    height: calc(100% - 120px);
    background-color: ${() => Theme.colors.background};
`;
