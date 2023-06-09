import styled, { css } from 'styled-components';
import { Theme } from '../Theme';
import { PHONE, PHONEOUT, SINGLE } from '../abstracts/Mixins';

export const CharacterDetailContainer = styled.div`
    display: grid;
    grid-template-columns: 55rem 1fr;

    ${PHONE(css`
        grid-template-columns: 34.5rem;
        row-gap: 5rem;
    `)}

    ${SINGLE(
        'max-width: 430px',
        css`
            grid-template-columns: 100%;
        `,
    )}

    ${PHONEOUT(css`
        column-gap: 4.5rem;
    `)}
`;

export const OtherCharactersContainer = styled.div``;

export const OtherCharactersTitle = styled.p`
    margin-bottom: 2.1rem;
    font-size: ${() => Theme.typography.xlarge};
    font-weight: 600;

    ${PHONE(css`
        margin-bottom: 1rem;
    `)}
`;

export const OtherCharacters = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    ${PHONE(css`
        grid-template-columns: 1fr;
    `)}
`;
