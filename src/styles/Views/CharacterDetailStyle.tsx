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
    .swiper {
        padding-bottom: 2rem;

        ${PHONEOUT(css`
            max-width: 40rem;
        `)}

        .swiper-button-prev,
        .swiper-button-next {
            height: calc(100% - 20px) !important;
        }

        &-button-prev {
            padding-left: 0 !important;
        }

        &-button-next {
            padding-right: 0 !important;
        }

        .swiper-pagination {
            bottom: 0 !important;
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
