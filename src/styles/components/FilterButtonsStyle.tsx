import styled, { css } from 'styled-components';
import { Theme } from '../Theme';
import { PHONE, PHONEOUT } from '../abstracts/Mixins';
import { IFilterButtonsStyle } from './interfaces/filterButtonStyle.interface';

export const FilterButtonsStyle = styled.button<IFilterButtonsStyle>`
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 12rem;
    padding: 1.4rem 1.1rem;
    font-weight: 500;
    font-size: 1.3rem;
    border-radius: ${() => Theme.radius.filterButton};
    border: 0.1rem solid;
    color: ${() => Theme.colors.dark};

    ${PHONE(
        css`
            min-width: 14rem;
        `,
    )}

    &.disabled {
        pointer-events: none;
        background-color: transparent;

        svg {
            opacity: 0.25;
        }
    }

    ${({ status }) =>
        status === 'alive' &&
        css`
            border-color: #98cd4d;
            background-color: #98cd4d0d;

            &:active {
                background-color: #98cd4d80;
            }

            &.disabled {
                border-color: #98cd4d80;
            }

            ${PHONEOUT(css`
                &:hover {
                    background-color: #98cd4d33;
                }
            `)}
        `}

    ${({ status }) =>
        status === 'dead' &&
        css`
            border-color: #b90000;
            background-color: #b900000d;

            &:focus {
                background-color: #b9000080;
            }

            &.disabled {
                border-color: #b9000080;
            }

            ${PHONEOUT(css`
                &:hover {
                    background-color: #b9000033;
                }
            `)}
        `}

    ${({ status }) =>
        status === 'unknown' &&
        css`
            border-color: #b8b8b8;
            background-color: #b8b8b80d;

            &:focus {
                background-color: #b8b8b880;
            }

            &.disabled {
                border-color: #b8b8b880;
            }

            ${PHONEOUT(css`
                &:hover {
                    background-color: #b8b8b833;
                }
            `)}
        `}

    svg {
        color: ${({ status }) => (status === 'alive' ? '#98CD4D' : status === 'dead' ? '#B90000' : '#B8B8B8')};
    }
`;
