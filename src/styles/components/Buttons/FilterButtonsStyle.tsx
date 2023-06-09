import styled, { css } from 'styled-components';
import { Theme } from '../../Theme';
import { PHONE } from '../../abstracts/Mixins';
import { IFilterButtonsStyle } from '../interfaces/filterButtonStyle.interface';

interface CheckboxProps {
    status: string;
    name: string;
    value: string;
}

export const HiddenCheckbox = styled.input.attrs<CheckboxProps>(({ status, value, name, defaultChecked }) => ({
    type: 'checkbox',
    name,
    value,
    defaultChecked,
}))`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Button = styled.label<IFilterButtonsStyle>`
    user-select: none;
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 12rem;
    padding: 1.4rem 1.1rem;
    font-weight: 500;
    font-size: 1.3rem;
    text-transform: capitalize;
    border-radius: ${() => Theme.radius.secondary};
    border: 0.1rem solid;
    cursor: pointer;
    color: ${() => Theme.colors.dark};

    ${PHONE(
        css`
            min-width: 14rem;
        `,
    )}

    ${({ status, checked }) =>
        status === 'Alive' &&
        css`
            border-color: #98cd4d;
            background-color: ${() => (checked ? '#98cd4d80' : '#98cd4d0d')};

            &.disabled {
                border-color: #98cd4d80;
            }

            @media (min-width: 768px) {
                &:hover {
                    background-color: ${() => (checked ? '' : '#98cd4d33')};
                }
            }
        `}

    ${({ status, checked }) =>
        status === 'Dead' &&
        css`
            border-color: #b90000;
            background-color: ${() => (checked ? '#b9000080' : '#b900000d')};

            &.disabled {
                border-color: #b9000080;
            }

            @media (min-width: 768px) {
                &:hover {
                    background-color: ${() => (checked ? '' : '#b9000033')};
                }
            }
        `}

    ${({ status, checked }) =>
        status === 'Unknown' &&
        css`
            border-color: #b8b8b8;
            background-color: ${() => (checked ? '#b8b8b880' : '#b8b8b80d')};

            &.disabled {
                border-color: #b8b8b880;
            }

            @media (min-width: 768px) {
                &:hover {
                    background-color: ${() => (checked ? '' : '#b8b8b833')};
                }
            }
        `}

    svg {
        color: ${({ status }) => (status === 'Alive' ? '#98CD4D' : status === 'Dead' ? '#B90000' : '#B8B8B8')};
    }
`;

export const Container = styled.div`
    position: relative;

    &.disabled {
        pointer-events: none;
        background-color: transparent;
        opacity: 0.5;

        ${Button} {
            cursor: not-allowed;
        }
    }
`;
