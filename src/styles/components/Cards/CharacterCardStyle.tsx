import styled, { css } from 'styled-components';
import { Theme } from '../../Theme';
import { PHONE } from '../../abstracts/Mixins';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.9rem;
    cursor: pointer;

    ${PHONE(css`
        gap: 1.5rem;
    `)}
`;

export const Image = styled.img`
    aspect-ratio: 1/1;
    width: 100%;
    height: auto;
    border-radius: ${() => Theme.radius.primary};
    background-color: ${() => Theme.colors.placeholderGrey};
`;

export const Bottom = styled.div`
    height: 6rem;
`;

export const Name = styled.div`
    margin-bottom: 0.6rem;
    text-align: initial;
    font-size: ${() => Theme.typography.large};
    font-weight: 600;
`;

export const Detail = styled.div<{ status: string }>`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: ${() => Theme.typography.mid};
    font-weight: 500;

    svg {
        color: ${({ status }) => (status === 'Alive' ? '#98CD4D' : status === 'Dead' ? '#B90000' : '#B8B8B8')};
    }
`;
