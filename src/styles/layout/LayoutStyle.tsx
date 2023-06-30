import styled, { css } from 'styled-components';
import { Theme } from '../Theme';
import { PHONE } from '../abstracts/Mixins';

export const LayoutContainer = styled.div`
    width: 100%;
    max-width: 1495px;
`;

export const LayoutStyle = styled.main`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 4rem;
    background-color: ${Theme.colors.background};

    ${PHONE(css`
        padding: 1.5rem;
    `)}
`;
