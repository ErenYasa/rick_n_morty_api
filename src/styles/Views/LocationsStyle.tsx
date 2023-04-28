import styled, { css } from 'styled-components';
import { PHONEOUT } from '../abstracts/Mixins';

export const LocationCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 44rem));
    row-gap: 2rem;

    ${PHONEOUT(css`
        column-gap: 5rem;
    `)}
`;
