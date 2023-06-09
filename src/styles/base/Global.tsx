import { createGlobalStyle } from 'styled-components';
import { ResetStyle } from './Reset';

export const GlobalStyle = createGlobalStyle`
    ${ResetStyle}
    
    body {
        height: 100%;
        width: 100%;
        font-size: 1.6rem;
    }

    #root {
        height: 100%;
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
