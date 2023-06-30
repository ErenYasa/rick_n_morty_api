import { FlattenSimpleInterpolation, css } from 'styled-components';

export const PHONE = (styles: FlattenSimpleInterpolation) => css`
    @media (max-width: 767px) {
        ${styles}
    }
`;

export const PHONEOUT = (styles: FlattenSimpleInterpolation) => css`
    @media (min-width: 768px) {
        ${styles}
    }
`;

export const TABLET = (styles: FlattenSimpleInterpolation) => css`
    @media (max-width: 1024px) {
        ${styles}
    }
`;

export const LARGE = (styles: FlattenSimpleInterpolation) => css`
    @media (max-width: 1400px) {
        ${styles}
    }
`;

export const DESKTOP = (styles: FlattenSimpleInterpolation) => css`
    @media (max-width: 1200px) {
        ${styles}
    }
`;

export const SINGLE = (query: string, styles: FlattenSimpleInterpolation) => css`
    @media (${query}) {
        ${styles}
    }
`;

export const MULTIPLE = (query: string, query2: string, styles: FlattenSimpleInterpolation) => css`
    @media (${`${query} and ${query2}`}) {
        ${styles}
    }
`;

export const textClamp = (lines: number, lineHeight: false | number = false) => css`
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-line-clamp: ${lines};
    line-clamp: ${lines};
    overflow: hidden;
    text-overflow: ellipsis;

    ${lineHeight &&
    css`
        max-height: ${`${lineHeight * lines * 1}px`};
    `}
`;
