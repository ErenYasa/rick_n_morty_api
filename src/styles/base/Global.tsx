import { createGlobalStyle } from 'styled-components';
import { ResetStyle } from './Reset';

export const GlobalStyle = createGlobalStyle`
    
    
    :root {
        min-width: 320px;
        height: 100%;
        font-family: 'roboto', sans-serif;
        line-height: 1.5;
        font-weight: 400;
        font-size: 62.5%;
        color: #000;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        touch-action: manipulation !important;
        scroll-behavior: smooth;
    }
    
    body {
        min-height: 100%;
        display: flex;
        font-size: 1.6rem;
    }

    #root {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .pagination {
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        font-size: 16px;
        font-weight: 500;

        .page-item {
            a {
                padding: 1.2rem 1.9rem;
            }

            &.active {
                a {
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #d9d9d9;
                }
            }
        }
    }

    .swiper-button-next,
    .swiper-button-prev {
        top: 0 !important;
        height: calc(100% - 75px);
        margin-top: 0 !important;
        color: #000 !important;
    }

    .swiper-button-prev {
        left: 0;
        padding-left: 1.5rem !important;
    }

    .swiper-button-next {
        right: 0;
        padding-right: 1.5rem !important;
    }

    .swiper-pagination-bullet {
        background-color: #000 !important;
    }

    .swiper-pagination {
        bottom: 0 !important;
    }
    
    .swiper-pagination-bullet {
        background-color: #000 !important;
    }

    ${ResetStyle}

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
