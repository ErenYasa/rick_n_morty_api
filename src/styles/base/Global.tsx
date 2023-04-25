import { createGlobalStyle, css } from 'styled-components';
import { ResetStyle } from './Reset';
import { PHONE } from '../abstracts/Mixins';
import { Theme } from '../Theme';

export const GlobalStyles = createGlobalStyle`
    ${ResetStyle}
    :root {
        min-width: 320px;
        font-family: 'roboto', sans-serif;
        line-height: 1.5;
        font-weight: 400;
        font-size: 62.5%;
        color: ${(props) => Theme.colors.text};
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        touch-action: manipulation !important;
    }

    #root {
        height: 100%;

        /* TEST */
        ${PHONE(
            css`
                height: 50%;
                width: 100px;
            `,
        )}

    }

    html,
    body {
        height: 100%;
        width: 100%;
        font-size: 1.6rem;
    }

    .loader {
        width: 2.8rem;
        height: 2.8rem;
        border: 0.3rem solid currentColor;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;

        &.table-loader {
            width: 1.8rem;
            height: 1.8rem;
            align-self: center;
            border-width: 0.2rem;
        }
    }

    .inline-loader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(90, 90, 90, 0.06);
        backdrop-filter: blur(0.2rem);

        &::before {
            content: '';
            width: 2.8rem;
            height: 2.8rem;
            border: 0.3rem solid currentColor;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
        }
    }

    .page-loader {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 40rem;


        .loader-item {
            text-align: center;
            font-size: 1.8rem;
            
            p {
                letter-spacing: 0.04rem;
                margin-top: 0.6rem;
                line-height: 80%;
                position: relative;

                &:after {
                    overflow: hidden;
                    display: inline-block;
                    vertical-align: bottom;
                    animation: ellipsis-animation steps(1, end) 1.4s infinite;
                    animation-delay: 0.2s;
                    font-size: 3rem;
                    content: '\2026';
                    line-height: 80%;
                }
            }
        }
    }
`;
