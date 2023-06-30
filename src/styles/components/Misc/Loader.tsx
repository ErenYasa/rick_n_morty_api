import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    display: inline-block;
    width: 2.8rem;
    height: 2.8rem;
    border: 0.3rem solid currentColor;
    border-radius: 50%;
    border-bottom-color: transparent;
    animation: ${rotation} 1s linear infinite;
`;
