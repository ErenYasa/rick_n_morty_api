import styled, { css } from 'styled-components';
import { Theme } from '../Theme';
import { PHONE, SINGLE } from '../abstracts/Mixins';

export const Filters = styled.div`
    margin-bottom: 4rem;

    ${PHONE(css`
        margin-bottom: 3rem;
    `)}
`;

export const FilterTitle = styled.p`
    margin-bottom: 1rem;
    font-size: ${Theme.typography.mid};
    font-weight: 500;
`;

export const FilterBtnContainer = styled.div`
    display: flex;
    gap: 1.2rem;

    ${PHONE(css`
        overflow-y: hidden;
        width: calc(100% + 15px);
        padding-right: 1.5rem;
        padding-bottom: 1rem;
    `)}
`;

export const CharacterCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 33.6rem));
    gap: 3rem;

    ${SINGLE(
        'min-width: 1024px',
        css`
            grid-template-columns: repeat(4, minmax(20rem, 33.6rem));
        `,
    )}

    ${SINGLE(
        'max-width: 1023px',
        css`
            grid-template-columns: repeat(3, minmax(20rem, 33.6rem));
        `,
    )}

    ${PHONE(css`
        grid-template-columns: repeat(auto-fill, minmax(20rem, 34.5rem));
    `)}
`;
