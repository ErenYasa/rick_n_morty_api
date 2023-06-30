import styled, { css } from 'styled-components';

const CommonArrowStyle = css`
    position: absolute;
    top: 0;
    z-index: 1;
    height: calc(100% - 75px);
    display: flex;
    align-items: center;

    &.disabled {
        pointer-events: none;
        opacity: 0.5;
    }
`;

export const PrevArrowStyle = styled.button.attrs(() => ({
    type: 'button',
}))`
    ${CommonArrowStyle}
    left: 0;
    padding-left: 1rem;
`;

export const NextArrowStyle = styled.button.attrs(() => ({
    type: 'button',
}))`
    ${CommonArrowStyle}
    right: 0;
    padding-right: 1rem;
`;
