import styled from 'styled-components';
import { Theme } from '../Theme';

export const Filters = styled.div`
    margin-bottom: 4rem;
`;

export const FilterTitle = styled.p`
    margin-bottom: 1rem;
    font-size: ${() => Theme.typography.mid};
    font-weight: 500;
`;

export const FilterBtnContainer = styled.div`
    display: flex;
    gap: 1.2rem;
`;

export const CharacterCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 33.6rem));
    gap: 3rem;
`;
