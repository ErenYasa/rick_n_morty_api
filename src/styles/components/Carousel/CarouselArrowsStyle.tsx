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

export const PrevArrowStyle = styled.button`
    ${CommonArrowStyle}
    left: 0;
    padding-left: 10px;
`;

export const NextArrowStyle = styled.button`
    ${CommonArrowStyle}
    right: 0;
    padding-right: 10px;
`;
