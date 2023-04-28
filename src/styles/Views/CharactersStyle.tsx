import styled from 'styled-components';
import { Theme } from '../Theme';
import { IFilterContainer } from './interfaces/charactersStyle.interface';

const Filters = styled.div`
    margin-bottom: 4rem;
`;

const FilterTitle = styled.p`
    margin-bottom: 1rem;
    font-size: ${() => Theme.typography.mid};
    font-weight: 500;
`;

const FilterBtnContainer = styled.div`
    display: flex;
    gap: 1.2rem;
`;

export const FilterContainer = ({ title, children }: IFilterContainer) => (
    <Filters>
        <FilterTitle>{title}</FilterTitle>
        <FilterBtnContainer>{children}</FilterBtnContainer>
    </Filters>
);

export const CharacterCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 33.6rem));
    gap: 3rem;
`;
