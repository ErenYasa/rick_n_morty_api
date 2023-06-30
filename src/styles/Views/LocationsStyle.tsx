import styled, { css } from 'styled-components';
import { PHONEOUT, SINGLE } from '../abstracts/Mixins';

export const LocationCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 44rem));
    row-gap: 2rem;

    ${PHONEOUT(css`
        column-gap: 5rem;
    `)}

    ${SINGLE(
        'max-width: 1500px',
        css`
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        `,
    )}

    ${SINGLE(
        'max-width: 1100px',
        css`
            grid-template-columns: repeat(2, 1fr);
        `,
    )}

    ${SINGLE(
        'max-width: 650px',
        css`
            grid-template-columns: 1fr;
            max-width: 44rem;
        `,
    )}
`;
