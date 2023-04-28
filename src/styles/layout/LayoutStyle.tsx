import styled, { css } from 'styled-components';
import { Theme } from '../Theme';
import { PHONE } from '../abstracts/Mixins';

export const LayoutStyle = styled.main`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 4rem;
    background-color: ${() => Theme.colors.background};

    ${PHONE(css`
        padding: 1.5rem;
    `)}
`;
