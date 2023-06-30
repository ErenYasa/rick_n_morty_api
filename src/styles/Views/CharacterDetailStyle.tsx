import styled, { css } from 'styled-components';
import { Theme } from '../Theme';
import { PHONE, PHONEOUT, SINGLE } from '../abstracts/Mixins';

export const CharacterDetailContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(30rem, 55rem) minmax(20rem, max-content);

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

export const OtherCharactersContainer = styled.div`
    & .swiper {
        ${PHONEOUT(css`
            max-width: 40rem;
        `)}

        &-button-prev {
            left: 0;
        }

        &-button-next {
            right: 0;
        }
    }
`;

export const OtherCharactersTitle = styled.p`
    margin-bottom: 2.1rem;
    font-size: ${Theme.typography.xlarge};
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

export const OtherCharactersTwoColumns = styled.div`
    display: flex;
    gap: 3rem;
`;

export const OtherCharactersGroup = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 1.5rem;
    /* justify-content: center; */
    margin-inline: 30px;
    text-align: left;
`;
